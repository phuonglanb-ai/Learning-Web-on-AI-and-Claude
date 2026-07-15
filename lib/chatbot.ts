import { FaqItem, Locale } from "./types";
import { pick } from "./utils";

// Common function words that carry no topic signal on their own — stripping
// them keeps the overlap score focused on words that actually distinguish
// one FAQ topic from another.
const STOP_WORDS: Record<Locale, Set<string>> = {
  vi: new Set([
    "là", "gì", "có", "không", "được", "và", "của", "cho", "các", "những",
    "một", "này", "đó", "sao", "thế", "nào", "tôi", "bạn", "mình", "để",
    "khi", "với", "hay", "hoặc", "như", "thì", "cũng", "đã", "sẽ", "phải",
    "nên", "trong", "về", "từ", "đến", "ra", "vào", "lên", "xuống", "làm",
    "muốn", "cần", "biết", "giúp", "mà", "nếu", "rất", "vẫn", "còn", "ạ",
    "nhé", "à", "ơi", "bị", "lại", "chỉ", "vậy", "đang", "sử", "dụng",
  ]),
  en: new Set([
    "a", "an", "the", "is", "are", "was", "were", "do", "does", "did",
    "what", "how", "can", "could", "should", "would", "i", "you", "my",
    "your", "to", "of", "for", "in", "on", "and", "or", "it", "this",
    "that", "with", "about", "if", "will", "have", "has", "be", "me",
    "we", "our", "so", "not", "there", "using", "use",
  ]),
};

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[?!.,;:"'()/\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string, locale: Locale): string[] {
  const stop = STOP_WORDS[locale];
  return normalize(text)
    .split(" ")
    .filter((w) => w.length > 1 && !stop.has(w));
}

/**
 * Matches a free-text question against the local FAQ dataset.
 *
 * Scores each FAQ item by how many meaningful query words it shares with
 * the item's question/tags, then requires at least half of the query's
 * meaningful words to match before accepting the best candidate. Without
 * that coverage floor, a single incidental shared word (e.g. a common verb)
 * would let the bot confidently answer a question it has no real match for
 * — which is what caused off-topic answers in the previous version.
 */
export function answerFor(query: string, locale: Locale, items: FaqItem[]): string | null {
  const qTokens = Array.from(new Set(tokenize(query, locale)));
  if (qTokens.length === 0) return null;

  let best: { coverage: number; score: number; answer: string } | null = null;

  for (const item of items) {
    const questionTokens = tokenize(pick(item.question, locale), locale);
    const tagTokens = item.tags.flatMap((tag) => tag.split("-"));
    const haystack = new Set([...questionTokens, ...tagTokens]);

    let matched = 0;
    let tagMatched = 0;
    for (const t of qTokens) {
      if (haystack.has(t)) {
        matched += 1;
        if (tagTokens.includes(t)) tagMatched += 1;
      }
    }
    if (matched === 0) continue;

    const coverage = matched / qTokens.length;
    const score = matched + tagMatched * 0.5;

    if (!best || score > best.score || (score === best.score && coverage > best.coverage)) {
      best = { coverage, score, answer: pick(item.answer, locale) };
    }
  }

  if (!best || best.coverage < 0.5) return null;
  return best.answer;
}

"use client";

import { useEffect, useState, FormEvent } from "react";
import { ShieldAlert, Plus, Trash2 } from "lucide-react";
import { useLanguage } from "@/context/AppProviders";
import { cn } from "@/lib/utils";

interface RiskItem {
  id: string;
  name: string;
  probability: number; // 1-5
  impact: number; // 1-5
}

const STORAGE_KEY = "ai-hub-risk-matrix";

const LEVEL_LABELS = {
  vi: ["Rất thấp", "Thấp", "Trung bình", "Cao", "Rất cao"],
  en: ["Very low", "Low", "Medium", "High", "Very high"],
};

function priorityFor(score: number): { key: "low" | "medium" | "high"; className: string } {
  if (score >= 15) return { key: "high", className: "bg-rose-500" };
  if (score >= 8) return { key: "medium", className: "bg-amber-400" };
  return { key: "low", className: "bg-accent-400" };
}

export function RiskMatrixTool() {
  const { locale } = useLanguage();
  const isVi = locale === "vi";
  const [risks, setRisks] = useState<RiskItem[]>([]);
  const [name, setName] = useState("");
  const [probability, setProbability] = useState(3);
  const [impact, setImpact] = useState(3);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setRisks(JSON.parse(stored));
      } catch {
        // ignore malformed local storage
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(risks));
  }, [risks]);

  function handleAdd(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setRisks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: name.trim(), probability, impact },
    ]);
    setName("");
  }

  function handleRemove(id: string) {
    setRisks((prev) => prev.filter((r) => r.id !== id));
  }

  const grid = Array.from({ length: 5 }, (_, rowIdx) => 5 - rowIdx); // impact 5..1 top to bottom

  return (
    <div className="rounded-xl2 border border-ink-200 bg-white p-6 shadow-card">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
          <ShieldAlert size={20} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-semibold text-ink-900">{isVi ? "Ma trận rủi ro tương tác" : "Interactive Risk Matrix"}</h3>
          <p className="text-sm text-ink-500">
            {isVi
              ? "Thêm rủi ro, chọn xác suất và mức ảnh hưởng — công cụ tự xếp vị trí và gợi ý mức ưu tiên."
              : "Add a risk, choose probability and impact — the tool plots it and suggests a priority level."}
          </p>
        </div>
      </div>

      <form onSubmit={handleAdd} className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_auto_auto]">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={isVi ? "Tên rủi ro (vd: Rò rỉ dữ liệu khách hàng)" : "Risk name (e.g. Customer data leak)"}
          className="focus-ring rounded-md border border-ink-200 px-3 py-2 text-sm"
        />
        <select
          value={probability}
          onChange={(e) => setProbability(Number(e.target.value))}
          className="focus-ring rounded-md border border-ink-200 px-2 py-2 text-sm"
          aria-label={isVi ? "Xác suất" : "Probability"}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {isVi ? "Xác suất" : "Prob."} {n}
            </option>
          ))}
        </select>
        <select
          value={impact}
          onChange={(e) => setImpact(Number(e.target.value))}
          className="focus-ring rounded-md border border-ink-200 px-2 py-2 text-sm"
          aria-label={isVi ? "Mức ảnh hưởng" : "Impact"}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {isVi ? "Ảnh hưởng" : "Impact"} {n}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="focus-ring inline-flex items-center justify-center gap-1 rounded-md bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600"
        >
          <Plus size={16} />
          {isVi ? "Thêm" : "Add"}
        </button>
      </form>

      <div className="grid grid-cols-[auto_1fr] gap-2">
        <div className="flex flex-col justify-between py-2 text-[10px] font-medium text-ink-400">
          <span className="rotate-0">{isVi ? "Ảnh hưởng ↑" : "Impact ↑"}</span>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {grid.map((impactLevel) =>
            [1, 2, 3, 4, 5].map((probLevel) => {
              const score = impactLevel * probLevel;
              const cellRisks = risks.filter((r) => r.impact === impactLevel && r.probability === probLevel);
              const priority = priorityFor(score);
              return (
                <div
                  key={`${impactLevel}-${probLevel}`}
                  className={cn(
                    "relative flex min-h-[3.5rem] flex-col items-center justify-center rounded-md p-1 text-[10px] font-medium text-white/90",
                    priority.className,
                    "bg-opacity-80"
                  )}
                  title={`${isVi ? "Xác suất" : "Prob."} ${probLevel} × ${isVi ? "Ảnh hưởng" : "Impact"} ${impactLevel}`}
                >
                  {cellRisks.length > 0 && (
                    <span className="rounded-full bg-black/20 px-1.5 py-0.5">{cellRisks.length}</span>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
      <p className="mt-1 pl-6 text-center text-[10px] font-medium text-ink-400">
        {isVi ? "Xác suất →" : "Probability →"}
      </p>

      {risks.length > 0 && (
        <ul className="mt-6 space-y-2 border-t border-ink-100 pt-4">
          {risks
            .slice()
            .sort((a, b) => b.probability * b.impact - a.probability * a.impact)
            .map((r) => {
              const score = r.probability * r.impact;
              const priority = priorityFor(score);
              return (
                <li
                  key={r.id}
                  className="flex items-center justify-between gap-3 rounded-lg border border-ink-100 px-3 py-2 text-sm"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium text-ink-800">{r.name}</p>
                    <p className="text-xs text-ink-400">
                      {LEVEL_LABELS[locale][r.probability - 1]} × {LEVEL_LABELS[locale][r.impact - 1]} ={" "}
                      {score}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px] font-medium text-white",
                        priority.className
                      )}
                    >
                      {priority.key === "high" && (isVi ? "Ưu tiên cao" : "High priority")}
                      {priority.key === "medium" && (isVi ? "Ưu tiên trung bình" : "Medium priority")}
                      {priority.key === "low" && (isVi ? "Ưu tiên thấp" : "Low priority")}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemove(r.id)}
                      className="focus-ring rounded p-1 text-ink-400 hover:bg-ink-100 hover:text-rose-600"
                      aria-label={isVi ? "Xoá" : "Remove"}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}

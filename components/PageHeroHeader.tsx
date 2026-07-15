export function PageHeroHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="border-b border-ink-100 bg-gradient-to-br from-brand-50 via-white to-accent-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-ink-900">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-ink-600">{subtitle}</p>}
      </div>
    </section>
  );
}

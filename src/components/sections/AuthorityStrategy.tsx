import { homeAuthorityStrategy } from "@/data/home-content";

export function AuthorityStrategy() {
  const data = homeAuthorityStrategy;

  return (
    <section
      id="about"
      aria-labelledby="authority-heading"
      className="or-section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="hero-hero-grid absolute inset-0 opacity-80" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[1180px]">
        <header className="mx-auto mb-16 max-w-[850px] text-center">
          <p className="or-eyebrow inline-flex items-center gap-2 rounded-full border border-or-orange/25 bg-or-orange/[0.055] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-or-orange" />
            {data.eyebrow}
          </p>
          <h2
            id="authority-heading"
            className="mt-5 font-[family-name:var(--font-hero-serif)] text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {data.title}
            <span className="mt-1 block text-or-orange">{data.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-or-muted">
            {data.intro}
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-or-orange">
              {data.foundationLabel}
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-hero-serif)] text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {data.foundationTitle}
              <span className="block text-or-muted/90">{data.foundationTitleMuted}</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-or-muted">
              {data.foundationBody}
            </p>
            <div className="mt-6 flex gap-3 rounded-xl border border-or-orange/20 bg-or-orange/[0.045] p-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-or-orange" />
              <p className="text-sm leading-relaxed text-or-body">{data.callout}</p>
            </div>
          </div>

          <div className="space-y-3">
            {data.pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-or-orange/25 sm:grid-cols-[40px_1fr]"
              >
                <span className="text-[10px] font-semibold tracking-wider text-or-orange">
                  {pillar.number}
                </span>
                <div>
                  <p className="text-[9px] font-semibold tracking-[0.14em] text-or-muted">
                    {pillar.label}
                  </p>
                  <h4 className="mt-1 text-lg font-medium text-white">{pillar.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-or-muted">{pillar.body}</p>
                  <span className="mt-3 inline-block rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] font-semibold tracking-[0.13em] text-or-muted">
                    {pillar.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
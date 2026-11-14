import { caseStudies } from "@/data/seo-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CaseStudies() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="or-section-dark py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proof"
          title="Case studies & measurable SEO growth"
          description="Before/after snapshots across DR, organic traffic, and keyword visibility—from SaaS founders to agency partners."
          align="center"
          id="results-heading"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.client}
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
            >
              <header>
                <p className="text-xs font-semibold uppercase tracking-wider text-or-orange">
                  {study.industry}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {study.client}
                </h3>
              </header>

              <dl className="mt-6 grid gap-3">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/5 bg-or-canvas/60 px-4 py-3"
                  >
                    <dt className="text-xs text-or-muted">{metric.label}</dt>
                    <dd className="mt-1 flex items-end justify-between gap-2">
                      <span className="text-sm text-or-muted">
                        {metric.before} →{" "}
                        <span className="font-semibold text-white">
                          {metric.after}
                        </span>
                      </span>
                      <span className="text-sm font-semibold text-emerald-400">
                        {metric.delta}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>

              <blockquote className="mt-6 flex-1 border-l-2 border-or-orange/45 pl-4 text-sm italic text-or-body">
                “{study.quote}”
              </blockquote>
              <footer className="mt-4 text-xs font-medium text-or-muted">
                — {study.author}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

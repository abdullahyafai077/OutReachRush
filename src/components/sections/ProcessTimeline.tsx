import { processSteps } from "@/data/seo-content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessTimeline() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="or-section-dark py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="A transparent 6-step outreach process"
          description="Every campaign follows the same open playbook—from audit through live reporting—so you always know where links land."
          id="process-heading"
        />

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step.step}>
              <article className="or-surface-card relative h-full rounded-2xl p-6">
                <span
                  className="font-mono text-xs font-semibold text-or-orange"
                  aria-hidden
                >
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-or-muted">
                  {step.description}
                </p>
                {index < processSteps.length - 1 ? (
                  <span className="sr-only">Next: {processSteps[index + 1]?.title}</span>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

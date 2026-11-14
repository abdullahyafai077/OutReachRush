import {
  whiteLabelAgencyRole,
  whiteLabelBehindScenes,
  whiteLabelFinalCta,
  whiteLabelHero,
  whiteLabelHowItWorks,
  whiteLabelNetwork,
  whiteLabelPlacementCriteria,
  whiteLabelServices,
  whiteLabelWhoFor,
  whiteLabelWhyAgencies,
} from "@/data/white-label-content";
import { PageFinalCta } from "@/components/sections/PageFinalCta";
import { ServicePageHero } from "@/components/sections/ServicePageHero";

export function WhiteLabelLinkBuildingPage() {
  return (
    <>
      <ServicePageHero {...whiteLabelHero} />

      <ProseSection title={whiteLabelBehindScenes.title} paragraphs={whiteLabelBehindScenes.paragraphs} />
      <ProseSection title={whiteLabelNetwork.title} paragraphs={whiteLabelNetwork.paragraphs} />

      <section className="or-section-dark px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-hero-serif)] text-3xl text-white">
            {whiteLabelServices.title}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whiteLabelServices.items.map((item) => (
              <article key={item.title} className="or-surface-card rounded-2xl p-5">
                <h3 className="text-lg font-medium text-or-orange">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-or-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProseSection title={whiteLabelAgencyRole.title} paragraphs={[whiteLabelAgencyRole.body]} />

      <section className="or-section-dark px-4 py-16 sm:px-6">
        <SectionWrap title={whiteLabelWhyAgencies.title}>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-or-muted">
            {whiteLabelWhyAgencies.bullets.map((b) => (
              <li key={b.slice(0, 48)}>{b}</li>
            ))}
          </ul>
        </SectionWrap>
      </section>

      <section className="or-section-light px-4 py-16 sm:px-6">
        <SectionWrap title={whiteLabelPlacementCriteria.title} light>
          <p className="text-sm text-or-ink/70">{whiteLabelPlacementCriteria.intro}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {whiteLabelPlacementCriteria.checks.map((c) => (
              <li
                key={c}
                className="rounded-lg border border-or-ink/10 bg-white/60 px-3 py-2 text-sm text-or-ink"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-or-ink/65">
            {whiteLabelPlacementCriteria.footnote}
          </p>
        </SectionWrap>
      </section>

      <section className="or-section-dark px-4 py-16 sm:px-6">
        <SectionWrap title={whiteLabelHowItWorks.title}>
          <ol className="mt-4 space-y-3">
            {whiteLabelHowItWorks.steps.map((step, i) => (
              <li
                key={step}
                className="or-surface-card flex gap-4 rounded-xl p-4 text-sm text-or-muted"
              >
                <span className="font-semibold text-or-orange">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </SectionWrap>
      </section>

      <section className="or-section-dark px-4 py-12 sm:px-6">
        <SectionWrap title={whiteLabelWhoFor.title}>
          <p className="text-sm leading-relaxed text-or-muted">{whiteLabelWhoFor.body}</p>
        </SectionWrap>
      </section>

      <PageFinalCta
        title={whiteLabelFinalCta.title}
        body={whiteLabelFinalCta.body}
        cta={whiteLabelFinalCta.cta}
        light
      />
    </>
  );
}

function ProseSection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: readonly string[];
}) {
  return (
    <section className="or-section-dark border-b border-white/5 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-hero-serif)] text-3xl text-white">{title}</h2>
        {paragraphs.map((p) => (
          <p key={p.slice(0, 50)} className="mt-4 text-sm leading-relaxed text-or-muted">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function SectionWrap({
  title,
  children,
  light,
}: {
  title: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <h2
        className={`font-[family-name:var(--font-hero-serif)] text-3xl ${
          light ? "text-or-ink" : "text-white"
        }`}
      >
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
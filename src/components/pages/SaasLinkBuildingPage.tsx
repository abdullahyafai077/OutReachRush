import {
  saasComparison,
  saasDifferentApproach,
  saasDualSearch,
  saasFaqs,
  saasFinalCta,
  saasHero,
  saasPricingTeaser,
  saasProcess,
  saasQuality,
  saasSocialProof,
} from "@/data/saas-content";
import { FAQ } from "@/components/sections/FAQ";
import { PageFinalCta } from "@/components/sections/PageFinalCta";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SaasLinkBuildingPage() {
  return (
    <>
      <ServicePageHero {...saasHero} />

      <section className="or-section-dark border-y border-white/10 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-medium text-white">{saasSocialProof.resultsTitle}</h2>
          <p className="mt-2 text-sm text-or-muted">{saasSocialProof.resultsBody}</p>
          <div className="or-surface-card mx-auto mt-8 aspect-video max-w-2xl rounded-2xl border border-dashed border-white/20 p-8 text-sm text-or-muted">
            Analytics screenshot placeholder — replace with client asset
          </div>
          <p className="or-eyebrow mt-12">{saasSocialProof.testimonialsTitle}</p>
        </div>
      </section>

      <section className="or-section-dark px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading
            eyebrow="DUAL CHANNEL"
            title={saasDualSearch.strategyQuestion}
            description={saasDualSearch.strategyAnswer}
            align="center"
          />
          <p className="mx-auto max-w-4xl text-center text-sm leading-relaxed text-or-body">
            {saasDualSearch.title}
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <DualChannelCard data={saasDualSearch.google} />
            <DualChannelCard data={saasDualSearch.ai} />
          </div>
          <p className="text-center text-sm font-medium text-or-orange">
            {saasDualSearch.footnote}
          </p>
        </div>
      </section>

      <section className="or-section-dark px-4 py-16 sm:px-6">
        <ContentBlock title={saasDifferentApproach.title} className="max-w-4xl">
          <p className="text-or-body">{saasDifferentApproach.intro}</p>
          <p className="mt-4 text-sm leading-relaxed text-or-muted">
            {saasDifferentApproach.body}
          </p>
          <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-or-muted">
            {saasDifferentApproach.reasons.map((r) => (
              <li key={r.slice(0, 40)}>{r}</li>
            ))}
          </ol>
        </ContentBlock>
      </section>

      <section className="or-section-dark px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-[family-name:var(--font-hero-serif)] text-3xl text-white">
            {saasComparison.title}
          </h2>
          <div className="or-surface-card mt-8 overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-or-muted">
                  {saasComparison.columns.map((col) => (
                    <th key={col} className="px-4 py-3 font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {saasComparison.rows.map((row) => (
                  <tr key={row.service} className="border-b border-white/5">
                    <td className="px-4 py-3 font-medium text-white">{row.service}</td>
                    <td className="px-4 py-3 text-or-muted">{row.other}</td>
                    <td className="px-4 py-3 text-or-body">{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="or-section-light px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-hero-serif)] text-3xl text-or-ink">
            {saasQuality.question}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-or-ink/65">{saasQuality.answer}</p>
          <PostVendorLists
            prioritize={saasQuality.prioritize}
            avoid={saasQuality.avoid}
          />
          <p className="mt-6 text-sm leading-relaxed text-or-ink/65">
            {saasQuality.processNote}
          </p>
        </div>
      </section>

      <section className="or-section-dark px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-hero-serif)] text-3xl text-white">
            {saasProcess.title}
          </h2>
          <ol className="mt-8 space-y-4">
            {saasProcess.steps.map((step) => (
              <li
                key={step.step}
                className="or-surface-card grid gap-3 rounded-2xl p-5 sm:grid-cols-[48px_1fr]"
              >
                <span className="text-or-orange">{step.step}</span>
                <div>
                  <h3 className="font-medium text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-or-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="or-section-dark px-4 py-12 sm:px-6">
        <ContentBlock title={saasPricingTeaser.title} className="max-w-3xl text-center">
          <p className="text-or-muted">{saasPricingTeaser.body}</p>
        </ContentBlock>
      </section>

      <FAQ
        items={[...saasFaqs]}
        title="SaaS link building FAQs"
        description="Common questions from the OutreachRush SaaS link building playbook."
      />

      <PageFinalCta
        title={saasFinalCta.title}
        body={saasFinalCta.body}
        cta={saasFinalCta.cta}
        light
      />
    </>
  );
}

function DualChannelCard({
  data,
}: {
  data: {
    title: string;
    bullets: readonly string[];
    body: string;
  };
}) {
  return (
    <article className="or-surface-card rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-or-orange">{data.title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {data.bullets.map((b) => (
          <li
            key={b}
            className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-or-muted"
          >
            {b}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-or-muted">{data.body}</p>
    </article>
  );
}

function PostVendorLists({
  prioritize,
  avoid,
}: {
  prioritize: readonly string[];
  avoid: readonly string[];
}) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      <div>
        <h3 className="text-sm font-semibold text-or-orange">What we prioritize</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-or-ink/70">
          {prioritize.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-or-orange">What we avoid</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-or-ink/70">
          {avoid.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ContentBlock({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto ${className}`}>
      <h2 className="font-[family-name:var(--font-hero-serif)] text-3xl text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
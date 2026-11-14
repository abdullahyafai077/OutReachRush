import { Button } from "@/components/ui/Button";

type PageFinalCtaProps = {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  body: string;
  cta: { label: string; href: string };
  light?: boolean;
  sectionId?: string;
};

export function PageFinalCta({
  eyebrow,
  title,
  titleAccent,
  body,
  cta,
  light = true,
  sectionId,
}: PageFinalCtaProps) {
  return (
    <section
      id={sectionId}
      className={
        light
          ? "or-section-light px-4 py-20 sm:px-6 lg:py-24"
          : "or-section-dark px-4 py-20 sm:px-6 lg:py-24"
      }
    >
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? <p className="or-eyebrow">{eyebrow}</p> : null}
        <h2
          className={`mt-4 font-[family-name:var(--font-hero-serif)] text-4xl font-medium sm:text-5xl ${
            light ? "text-or-ink" : "text-white"
          }`}
        >
          {title}
          {titleAccent ? (
            <span className="mt-1 block text-or-orange">{titleAccent}</span>
          ) : null}
        </h2>
        <p
          className={`mx-auto mt-4 max-w-2xl text-sm leading-relaxed ${
            light ? "text-or-ink/65" : "text-or-muted"
          }`}
        >
          {body}
        </p>
        <Button href={cta.href} className="mt-8" variant="primary">
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
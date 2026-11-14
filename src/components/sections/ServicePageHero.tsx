import { Button } from "@/components/ui/Button";

type ServicePageHeroProps = {
  title: string;
  titleAccent?: string;
  subhead?: string;
  intro?: string;
  cta: { label: string; href: string };
};

export function ServicePageHero({
  title,
  titleAccent,
  subhead,
  intro,
  cta,
}: ServicePageHeroProps) {
  return (
    <section className="hero-home relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:pt-32">
      <div className="hero-hero-grid absolute inset-0" aria-hidden />
      <div className="hero-hero-glow absolute" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-3xl text-center">
        <h1 className="font-[family-name:var(--font-hero-serif)] text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
          {titleAccent ? (
            <span className="mt-2 block text-or-orange">{titleAccent}</span>
          ) : null}
        </h1>
        {subhead ? (
          <p className="mx-auto mt-5 text-base leading-relaxed text-[#D3D7D9] sm:text-lg">
            {subhead}
          </p>
        ) : null}
        {intro ? (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-or-muted">
            {intro}
          </p>
        ) : null}
        <Button href={cta.href} className="mt-8" variant="primary">
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
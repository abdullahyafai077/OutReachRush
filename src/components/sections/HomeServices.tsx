import Link from "next/link";
import { homeServices } from "@/data/home-content";

export function HomeServices() {
  const data = homeServices;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="or-section-dark relative overflow-hidden px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="hero-hero-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-6xl">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <p className="or-eyebrow">{data.eyebrow}</p>
          <h2
            id="services-heading"
            className="mt-4 font-[family-name:var(--font-hero-serif)] text-4xl font-medium text-white sm:text-5xl"
          >
            {data.title} <span className="text-or-orange">{data.titleAccent}</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-or-muted">{data.intro}</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <article
              key={item.number}
              className="or-surface-card group flex flex-col rounded-2xl p-6 transition hover:border-or-orange/30"
            >
              <div className="flex items-center justify-between text-[10px] font-semibold tracking-wider">
                <span className="text-or-orange">{item.number}</span>
                <span className="text-or-muted">{item.meta}</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-or-muted">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-or-body transition group-hover:text-or-orange"
              >
                Explore <span aria-hidden>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
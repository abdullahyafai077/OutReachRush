import { homeTestimonials } from "@/data/home-content";

export function HomeTestimonials() {
  const data = homeTestimonials;

  return (
    <section
      id="results"
      aria-labelledby="testimonials-heading"
      className="or-section-dark px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="or-eyebrow">{data.eyebrow}</p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-[family-name:var(--font-hero-serif)] text-4xl font-medium text-white"
          >
            {data.title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-or-muted">{data.intro}</p>
        </header>

        <div className="flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {data.reviews.map((review, i) => (
            <article
              key={i}
              className="or-surface-card min-h-[200px] w-[min(100%,320px)] shrink-0 rounded-2xl p-6 sm:w-[340px]"
            >
              <p className="text-or-orange tracking-widest" aria-hidden>
                ★★★★★
              </p>
              <p className="mt-4 text-sm leading-relaxed text-or-body">
                “{review.quote}”
              </p>
              <footer className="mt-6 text-xs">
                <strong className="text-white">{review.name}</strong>
                <span className="mt-1 block text-or-muted">{review.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
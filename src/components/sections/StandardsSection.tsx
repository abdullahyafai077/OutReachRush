import { homeStandards } from "@/data/home-content";

export function StandardsSection() {
  const data = homeStandards;

  return (
    <section
      aria-labelledby="standards-heading"
      className="or-section-light px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <p className="or-eyebrow">{data.eyebrow}</p>
          <h2
            id="standards-heading"
            className="mt-3 font-[family-name:var(--font-hero-serif)] text-4xl font-medium text-or-ink"
          >
            {data.title}{" "}
            <span className="italic text-or-orange">{data.titleAccent}</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-or-ink/60">{data.intro}</p>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          <StandardsColumn
            title="What We Prioritize"
            label="WE PRIORITIZE"
            icon="+"
            items={data.prioritize}
            variant="light"
          />
          <StandardsColumn
            title="What We Avoid"
            label="WE AVOID"
            icon="×"
            items={data.avoid}
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}

function StandardsColumn({
  title,
  label,
  icon,
  items,
  variant,
}: {
  title: string;
  label: string;
  icon: string;
  items: readonly { title: string; body: string }[];
  variant: "light" | "dark";
}) {
  const dark = variant === "dark";

  return (
    <div
      className={
        dark
          ? "rounded-2xl border border-or-canvas bg-or-canvas p-5 text-white"
          : "rounded-2xl border border-or-ink/10 bg-white/70 p-5 text-or-ink"
      }
    >
      <div className="mb-4 flex items-center gap-3 border-b border-current/10 pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-or-orange/15 text-lg text-or-orange">
          {icon}
        </span>
        <div>
          <p className="text-[9px] font-semibold tracking-[0.15em] text-or-orange">
            {label}
          </p>
          <h3 className="font-[family-name:var(--font-hero-serif)] text-2xl">
            {title}
          </h3>
        </div>
      </div>
      <ul className="divide-y divide-current/10">
        {items.map((item, i) => (
          <li key={item.title} className="grid grid-cols-[28px_1fr] gap-3 py-4">
            <span className={dark ? "text-white/30" : "text-or-ink/30"}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p
                className={
                  dark
                    ? "mt-1 text-xs leading-relaxed text-white/50"
                    : "mt-1 text-xs leading-relaxed text-or-ink/55"
                }
              >
                {item.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
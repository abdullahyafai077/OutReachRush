"use client";

import { useState } from "react";
import { homeWhyDifferent } from "@/data/home-content";
import { cn } from "@/lib/cn";

export function WhyDifferent() {
  const data = homeWhyDifferent;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      aria-labelledby="why-heading"
      className="or-section-dark px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center">
          <p className="or-eyebrow">{data.eyebrow}</p>
          <h2
            id="why-heading"
            className="mt-4 font-[family-name:var(--font-hero-serif)] text-4xl font-medium text-white sm:text-5xl"
          >
            {data.title} <span className="text-or-orange">{data.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-or-muted">
            {data.intro}
          </p>
        </header>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {data.items.map((item, index) => {
            const open = openIndex === index;
            return (
              <article key={item.number} className={cn(open && "bg-or-orange/[0.04]")}>
                <button
                  type="button"
                  className="flex w-full items-center gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="w-12 font-[family-name:var(--font-hero-serif)] text-2xl text-or-orange/45">
                    {item.number}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[9px] font-semibold tracking-[0.15em] text-or-muted">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xl font-medium text-white">
                      {item.title}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-or-orange transition",
                      open && "rotate-45 border-or-orange/35 bg-or-orange/10",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {open ? (
                  <p className="pb-5 pl-16 pr-14 text-sm leading-relaxed text-or-muted">
                    {item.body}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
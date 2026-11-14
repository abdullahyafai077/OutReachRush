"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/seo-content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type FaqItem = { question: string; answer: string };

type FAQProps = {
  items?: FaqItem[];
  title?: string;
  description?: string;
  id?: string;
};

export function FAQ({
  items,
  title = "Search-intent questions, answered",
  description = "Structured for FAQ rich results.",
  id = "faq",
}: FAQProps) {
  const list = items ?? [...faqs];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="or-section-dark py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={title}
          description={description}
          align="center"
          id={headingId}
        />

        <div className="or-surface-card mt-10 divide-y divide-white/10 rounded-2xl">
          {list.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white sm:text-base"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-or-muted transition",
                        open && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>
                </h3>
                {open ? (
                  <div className="px-5 pb-4 text-sm leading-6 text-or-muted">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
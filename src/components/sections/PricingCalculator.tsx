"use client";

import { useMemo, useState } from "react";
import {
  pricingConfig,
  type DrTierId,
  type NicheId,
} from "@/data/seo-content";
import { calculateMonthlyPrice } from "@/lib/pricing";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

export function PricingCalculator() {
  const [drTier, setDrTier] = useState<DrTierId>("dr50");
  const [niche, setNiche] = useState<NicheId>("saas");
  const [volume, setVolume] = useState<number>(pricingConfig.volume.default);

  const quote = useMemo(
    () => calculateMonthlyPrice(drTier, volume, niche),
    [drTier, volume, niche],
  );

  const selectedTier = pricingConfig.drTiers.find((t) => t.id === drTier);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="or-section-dark py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transparent pricing"
          title="Interactive link building & ROI calculator"
          description="Toggle DR tiers, monthly volume, and niche to see estimated investment and deliverables—packages from $100/month."
          align="center"
          id="pricing-heading"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="or-surface-card rounded-2xl p-6 sm:p-8 lg:col-span-3">
            <fieldset>
              <legend className="text-sm font-semibold text-white">
                Domain Rating tier
              </legend>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {pricingConfig.drTiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setDrTier(tier.id)}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-left text-sm transition",
                      drTier === tier.id
                        ? "border-or-orange/55 bg-or-orange/15 text-white"
                        : "border-white/10 bg-white/[0.03] text-or-muted hover:border-or-orange/25",
                    )}
                    aria-pressed={drTier === tier.id}
                  >
                    <span className="block font-semibold">{tier.label}</span>
                    <span className="mt-1 block text-xs text-or-muted">
                      {tier.description}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8">
              <label
                htmlFor="volume-slider"
                className="flex items-center justify-between text-sm font-semibold text-white"
              >
                Monthly backlinks
                <span className="font-mono text-or-orange">{volume}</span>
              </label>
              <input
                id="volume-slider"
                type="range"
                min={pricingConfig.volume.min}
                max={pricingConfig.volume.max}
                step={pricingConfig.volume.step}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="mt-3 w-full accent-or-orange"
              />
              <p className="mt-2 text-xs text-or-muted">
                {pricingConfig.volume.min}–{pricingConfig.volume.max} editorial
                placements per month
              </p>
            </div>

            <fieldset className="mt-8">
              <legend className="text-sm font-semibold text-white">
                Industry niche
              </legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {pricingConfig.niches.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setNiche(item.id)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition",
                      niche === item.id
                        ? "border-or-orange/45 bg-or-orange/10 text-white"
                        : "border-white/10 text-or-muted hover:border-or-orange/30",
                    )}
                    aria-pressed={niche === item.id}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <aside className="flex flex-col rounded-2xl border border-or-orange/25 bg-gradient-to-b from-or-orange/10 to-or-surface/60 p-6 sm:p-8 lg:col-span-2">
            <p className="text-sm text-or-muted">Estimated monthly investment</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white">
              ${quote.monthly.toLocaleString()}
              <span className="text-lg font-normal text-or-muted">/mo</span>
            </p>
            <p className="mt-2 text-sm text-or-muted">
              ~${quote.perLink}/link × {quote.links} links
              {selectedTier ? ` · ${selectedTier.label}` : ""}
            </p>

            <h3 className="mt-8 text-sm font-semibold text-white">
              Deliverables included
            </h3>
            <ul className="mt-4 flex-1 space-y-3">
              {pricingConfig.deliverables.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-or-body">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Button href="#contact" className="mt-8 w-full" variant="primary">
              Start This Campaign
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}

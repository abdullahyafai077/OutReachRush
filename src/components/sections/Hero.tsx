"use client";

import Link from "next/link";
import { heroContent } from "@/data/seo-content";
import { HeroNetworkVisual } from "@/components/sections/HeroNetworkVisual";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="hero-home relative flex min-h-[720px] items-center overflow-hidden px-4 pb-14 pt-24 sm:px-6 lg:min-h-[850px] lg:px-6 lg:pb-16 lg:pt-[95px]"
    >
      <div className="hero-hero-grid absolute inset-0" />
      <div className="hero-hero-glow absolute" />

      <div className="relative z-[2] mx-auto w-full max-w-[1200px]">
        <div className="relative lg:min-h-[520px]">
          <article className="relative z-[5] max-w-[690px] lg:w-[55%]">
            <div className="hero-kicker">
              <span className="hero-kicker-dot" />
              {heroContent.kicker}
            </div>

            <h1
              id="hero-heading"
              className="hero-title mt-6 font-[family-name:var(--font-hero-serif)] text-[clamp(2.75rem,6.2vw,5.25rem)] font-medium leading-[0.94] tracking-[-0.055em] text-white"
            >
              {heroContent.h1}
              <span className="mt-1.5 block text-[#F89822]">
                {heroContent.h1Accent}
              </span>
            </h1>

            <p className="mt-6 max-w-[650px] text-[15px] leading-[1.85] text-[#D3D7D9]">
              {heroContent.intro}
            </p>
            <p className="mt-4 max-w-[625px] text-[13px] leading-[1.85] text-[#A4AAAF]">
              {heroContent.support}
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center sm:gap-[18px]">
              <Link href={heroContent.primaryCta.href} className="hero-cta">
                {heroContent.primaryCta.label}
                <span aria-hidden>→</span>
              </Link>
              <p className="flex items-center justify-center gap-2 text-[8px] text-[#71787D] sm:justify-start">
                <span className="hero-micro-dot" />
                {heroContent.microProof}
              </p>
            </div>
          </article>

          <HeroNetworkVisual />
        </div>

        <div
          className="mt-10 grid gap-3.5 border-t border-white/[0.075] pt-5 sm:grid-cols-3 lg:mt-[52px] lg:pt-[22px]"
          aria-label="Campaign focus"
        >
          {heroContent.bottomStrip.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col gap-1 px-0 sm:px-6 ${
                i > 0 ? "border-t border-white/[0.055] pt-3.5 sm:border-l sm:border-t-0 sm:pt-0" : ""
              }`}
            >
              <small className="text-[7px] font-semibold tracking-[0.13em] text-[#636A6F]">
                {item.label}
              </small>
              <strong className="text-[10px] font-normal text-[#C5C9CC]">
                {item.value}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

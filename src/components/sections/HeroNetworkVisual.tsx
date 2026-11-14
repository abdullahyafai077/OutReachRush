"use client";

const PATHS = {
  tl: "M76 124 C170 118 234 190 310 285",
  tr: "M544 124 C450 118 386 190 310 285",
  bl: "M310 285 C245 360 180 424 97 476",
  br: "M310 285 C375 360 440 424 523 476",
} as const;

export function HeroNetworkVisual() {
  return (
    <div
      className="hero-visual pointer-events-none relative mx-auto h-[420px] w-full max-w-[620px] lg:absolute lg:right-[-35px] lg:top-1/2 lg:h-[600px] lg:w-[610px] lg:-translate-y-[48%]"
      aria-hidden
    >
      <div className="hero-orbit hero-orbit-1" />
      <div className="hero-orbit hero-orbit-2" />
      <div className="hero-orbit hero-orbit-3" />

      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 620 580"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="orHeroLine">
            <stop offset="0%" stopColor="#F89822" stopOpacity={0} />
            <stop offset="45%" stopColor="#F89822" stopOpacity={0.45} />
            <stop offset="100%" stopColor="#F89822" stopOpacity={0} />
          </linearGradient>
          <filter id="orHeroGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {(Object.values(PATHS) as string[]).map((d) => (
          <path
            key={d}
            className="hero-network-line"
            d={d}
            fill="none"
            stroke="url(#orHeroLine)"
            strokeWidth={1}
            strokeDasharray="5 8"
          />
        ))}

        <circle className="hero-moving-dot" r={4} filter="url(#orHeroGlow)">
          <animateMotion
            dur="3.3s"
            repeatCount="indefinite"
            path={PATHS.tl}
          />
        </circle>
        <circle className="hero-moving-dot" r={4} filter="url(#orHeroGlow)">
          <animateMotion
            dur="3.8s"
            begin="1.1s"
            repeatCount="indefinite"
            path={PATHS.tr}
          />
        </circle>
        <circle className="hero-moving-dot" r={4} filter="url(#orHeroGlow)">
          <animateMotion
            dur="3.5s"
            begin="0.7s"
            repeatCount="indefinite"
            path={PATHS.bl}
          />
        </circle>
        <circle className="hero-moving-dot" r={4} filter="url(#orHeroGlow)">
          <animateMotion
            dur="3.7s"
            begin="1.7s"
            repeatCount="indefinite"
            path={PATHS.br}
          />
        </circle>
      </svg>

      <div className="hero-node hero-node-float absolute left-[6px] top-[101px] -rotate-[5deg]">
        <div className="hero-node-icon">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
            <path d="M5 19h14" fill="none" stroke="currentColor" strokeWidth="1.35" />
            <path d="M7 17V7h10v10" fill="none" stroke="currentColor" strokeWidth="1.35" />
            <path d="M9 10h6M9 13h4" fill="none" stroke="currentColor" strokeWidth="1.35" />
          </svg>
        </div>
        <div>
          <small className="hero-node-label">RELEVANT SITE</small>
          <strong className="hero-node-title">Editorial Placement</strong>
        </div>
      </div>

      <div
        className="hero-node hero-node-float absolute right-[4px] top-[103px] rotate-[5deg]"
        style={{ animationDelay: "-2.3s" }}
      >
        <div className="hero-node-icon">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
            <path d="M5 19h14M7 17V9l5-4 5 4v8M10 17v-4h4v4" fill="none" stroke="currentColor" strokeWidth="1.35" />
          </svg>
        </div>
        <div>
          <small className="hero-node-label">TRUSTED SOURCE</small>
          <strong className="hero-node-title">Category Relevant</strong>
        </div>
      </div>

      <div className="hero-core absolute left-1/2 top-1/2 grid h-[185px] w-[185px] -translate-x-1/2 -translate-y-1/2 place-items-center">
        <div className="hero-core-pulse absolute inset-0 rounded-full border border-[rgba(248,152,34,0.2)]" />
        <div className="hero-core-inner relative z-[4] flex h-[122px] w-[122px] flex-col items-center justify-center rounded-full border border-[rgba(248,152,34,0.47)] bg-[radial-gradient(circle_at_35%_30%,rgba(248,152,34,0.16),#292929_67%)] shadow-[0_0_0_8px_#242424,0_0_0_9px_rgba(248,152,34,0.09),0_0_65px_rgba(248,152,34,0.12)]">
          <small className="mb-2 text-[6px] font-semibold tracking-[0.18em] text-[#777E83]">
            BACKLINK
          </small>
          <div className="hero-chain flex h-[25px] items-center">
            <span />
            <span />
          </div>
          <strong className="mt-2 text-[10px] tracking-[0.12em] text-white">
            AUTHORITY
          </strong>
        </div>
      </div>

      <div className="hero-node absolute bottom-[65px] left-6 -rotate-[5deg]">
        <div className="hero-node-icon">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
            <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.35" />
            <path d="M8.5 12h7M12 8.5v7" fill="none" stroke="currentColor" strokeWidth="1.35" />
          </svg>
        </div>
        <div>
          <small className="hero-node-label">TRADITIONAL SEARCH</small>
          <strong className="hero-node-title">Google Search</strong>
        </div>
      </div>

      <div className="hero-ai-box hero-node absolute bottom-[65px] right-6 rotate-[5deg]">
        <div className="hero-ai-scan" />
        <div className="hero-node-icon text-[#F89822]">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
            <path
              d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
            />
            <path
              d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
            />
          </svg>
        </div>
        <div>
          <small className="hero-node-label text-[#F89822]/80">AI-POWERED DISCOVERY</small>
          <strong className="hero-node-title">AI Search</strong>
        </div>
      </div>

      <div className="hero-chip hero-chip-float absolute left-[83px] top-[235px]">
        <span>LINK</span>
        <b>+1</b>
      </div>
      <div
        className="hero-chip hero-chip-float absolute right-[83px] top-[245px]"
        style={{ animationDelay: "-1.4s" }}
      >
        <span>EDITORIAL</span>
        <b>↗</b>
      </div>
      <div
        className="hero-chip hero-chip-float hero-chip-float-center absolute left-1/2 top-[58px]"
        style={{ animationDelay: "-2.7s" }}
      >
        <span>RELEVANCE</span>
        <b>✓</b>
      </div>
    </div>
  );
}

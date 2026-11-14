/**
 * Design tokens aligned with client homepage HTML reference
 * (dark canvas #242424, accent #F89822, light sections #F2F6F9).
 */
export const designTokens = {
  colors: {
    orange: "#F89822",
    canvas: "#242424",
    canvasElevated: "#292929",
    surface: "#2B2B2B",
    surfaceGlass: "rgba(43, 43, 43, 0.9)",
    light: "#F2F6F9",
    border: "rgba(255, 255, 255, 0.11)",
    borderOrange: "rgba(248, 152, 34, 0.25)",
    foreground: "#FFFFFF",
    body: "#D3D7D9",
    muted: "#A4AAAF",
    mutedDark: "#71787D",
    primary: "#F89822",
    primaryHover: "#e5891a",
    ink: "#242424",
    inkMuted: "rgba(36, 36, 36, 0.62)",
    success: "#34D399",
    gradientHero:
      "radial-gradient(circle at 75% 48%, rgba(248, 152, 34, 0.075), transparent 28%), #242424",
    gradientSection:
      "radial-gradient(circle at 50% 50%, rgba(248, 152, 34, 0.06), transparent 38%), #242424",
  },
  typography: {
    fontSans: "var(--font-poppins), system-ui, sans-serif",
    fontSerif: 'var(--font-hero-serif), Georgia, serif',
    fontMono: "var(--font-geist-mono), ui-monospace, monospace",
    h1: "text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.02]",
    h2: "text-3xl sm:text-4xl font-medium tracking-tight",
    h3: "text-xl font-semibold tracking-tight",
    body: "text-base leading-7 text-or-body",
    eyebrow: "text-xs font-semibold uppercase tracking-[0.2em] text-or-orange",
  },
  spacing: {
    sectionY: "py-20 lg:py-28",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    cardPadding: "p-6 sm:p-8",
    gapSection: "gap-12 lg:gap-16",
  },
  radius: {
    card: "rounded-2xl",
    button: "rounded-xl",
    pill: "rounded-full",
  },
  effects: {
    glassNav:
      "bg-or-canvas/65 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
    cardGlow:
      "shadow-[0_20px_50px_rgba(0,0,0,0.14),0_0_0_1px_rgba(255,255,255,0.09)]",
    buttonPrimary:
      "bg-or-orange text-or-canvas border border-or-orange hover:brightness-105 shadow-[0_12px_32px_rgba(248,152,34,0.28)]",
  },
} as const;
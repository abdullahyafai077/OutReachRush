import {
  pricingConfig,
  type DrTierId,
  type NicheId,
} from "@/data/seo-content";

export function calculateMonthlyPrice(
  drTier: DrTierId,
  volume: number,
  niche: NicheId,
): { monthly: number; perLink: number; links: number } {
  const tier = pricingConfig.drTiers.find((t) => t.id === drTier);
  const nicheConfig = pricingConfig.niches.find((n) => n.id === niche);
  if (!tier || !nicheConfig) {
    return { monthly: pricingConfig.floorMonthly, perLink: 0, links: volume };
  }

  const perLink = Math.round(tier.basePerLink * nicheConfig.multiplier);
  const raw = perLink * volume;
  const monthly = Math.max(pricingConfig.floorMonthly, raw);

  return { monthly, perLink, links: volume };
}

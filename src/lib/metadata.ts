import type { Metadata } from "next";
import { homeSeo, siteConfig } from "@/data/seo-content";

type PageSeo = {
  title: string;
  description: string;
  keywords: readonly string[];
  canonicalPath: string;
};

export function buildPageMetadata(overrides?: Partial<PageSeo>): Metadata {
  const seo: PageSeo = { ...homeSeo, ...overrides };
  const canonical = new URL(seo.canonicalPath, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: seo.title,
    description: seo.description,
    keywords: [...seo.keywords],
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: siteConfig.defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — White-hat link building`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [siteConfig.defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

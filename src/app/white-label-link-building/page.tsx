import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhiteLabelLinkBuildingPage } from "@/components/pages/WhiteLabelLinkBuildingPage";
import { buildPageMetadata } from "@/lib/metadata";
import { whiteLabelSeo } from "@/data/white-label-content";

export const metadata: Metadata = buildPageMetadata({
  title: whiteLabelSeo.title,
  description: whiteLabelSeo.description,
  keywords: [...whiteLabelSeo.keywords],
  canonicalPath: whiteLabelSeo.canonicalPath,
});

export default function WhiteLabelLinkBuildingRoute() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <WhiteLabelLinkBuildingPage />
      </main>
      <Footer />
    </>
  );
}
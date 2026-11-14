import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SaasLinkBuildingPage } from "@/components/pages/SaasLinkBuildingPage";
import { buildPageMetadata } from "@/lib/metadata";
import { saasSeo } from "@/data/saas-content";

export const metadata: Metadata = buildPageMetadata({
  title: saasSeo.title,
  description: saasSeo.description,
  keywords: [...saasSeo.keywords],
  canonicalPath: saasSeo.canonicalPath,
});

export default function SaasLinkBuildingRoute() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <SaasLinkBuildingPage />
      </main>
      <Footer />
    </>
  );
}
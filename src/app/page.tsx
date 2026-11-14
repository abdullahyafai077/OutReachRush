import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AuthorityStrategy } from "@/components/sections/AuthorityStrategy";
import { HomeServices } from "@/components/sections/HomeServices";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { HomeTestimonials } from "@/components/sections/HomeTestimonials";
import { StandardsSection } from "@/components/sections/StandardsSection";
import { PageFinalCta } from "@/components/sections/PageFinalCta";
import { homeFinalCta } from "@/data/home-content";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AuthorityStrategy />
        <HomeServices />
        <WhyDifferent />
        <HomeTestimonials />
        <StandardsSection />
        <PageFinalCta {...homeFinalCta} sectionId="pricing" />
      </main>
      <Footer />
    </>
  );
}
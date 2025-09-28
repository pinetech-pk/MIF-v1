// src/app/page.tsx - Refactored landing page with sections
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AffiliationsCarousel from "@/components/sections/AffiliationsCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      <FeaturesSection />
      <AffiliationsCarousel />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Section 4 Placeholder
          </h2>
        </div>
      </section>
    </main>
  );
}

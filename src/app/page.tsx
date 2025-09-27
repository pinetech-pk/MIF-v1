// src/app/page.tsx - Refactored landing page with sections
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section - We'll add this next */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Features Section Coming Soon
          </h2>
          <p className="text-gray-600">
            This is where we will add the features section next
          </p>
        </div>
      </section>

      {/* Additional sections will go here */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Section 3 Placeholder
          </h2>
        </div>
      </section>

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

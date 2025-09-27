// src/components/sections/HeroSection.tsx - Hero section component
import HeroContent from "../hero/HeroContent";
import HeroStats from "../hero/HeroStats";
import HeroIllustration from "../hero/HeroIllustration";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <HeroContent />
            <HeroStats />
          </div>

          {/* Right side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

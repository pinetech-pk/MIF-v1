// src/components/hero/HeroContent.tsx - Hero content with title and description

import HeroButton from "./HeroButton";

const HeroContent = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat text-gray-900 leading-tight">
        Illuminate Young Minds with Quran
      </h1>

      <p className="text-lg lg:text-xl text-gray-600 font-nunito leading-relaxed max-w-2xl">
        Accessible Islamic education for every child — Hifz, Recitation,
        Tutoring, and Scholarship Programs to nurture hearts and minds.
      </p>

      <div className="pt-4">
        <HeroButton />
      </div>
    </div>
  );
};

export default HeroContent;

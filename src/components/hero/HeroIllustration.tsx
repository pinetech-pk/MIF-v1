// src/components/hero/HeroIllustration.tsx - Hero illustration component
import Image from "next/image";

const HeroIllustration = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Placeholder for now - you can replace with your actual illustration */}
      <div className="aspect-square bg-gradient-to-br from-blue-200 to-indigo-300 rounded-3xl p-8 shadow-2xl">
        <div className="w-full h-full bg-white/20 rounded-2xl flex items-center justify-center">
          {/* You can replace this with your actual illustration/image */}
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white font-semibold">Quranic Education</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80"></div>
    </div>
  );
};

export default HeroIllustration;

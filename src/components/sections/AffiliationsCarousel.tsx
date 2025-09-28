//src/components/AffiliationsCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const AffiliationsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Affiliations data based on your images
  const affiliations = [
    {
      name: "Sindh Charities Registration & Regulation Commission",
      logo: "/images/sindh-charities.png", // You'll need to add these images
      description: "Visit Website",
      website: "#",
      hasWebsite: true,
    },
    {
      name: "Joint Stock Companies, Sindh, Directorate of Industries",
      logo: "/images/joint-stock.png",
      description: "Website Not Available",
      website: null,
      hasWebsite: false,
    },
    {
      name: "Federal Board of Revenue (FBR)",
      logo: "/images/fbr-logo.png",
      description: "Visit Website",
      website: "#",
      hasWebsite: true,
    },
    {
      name: "United Nations - UNDP",
      logo: "/images/undp-logo.png",
      description: "Visit Website",
      website: "#",
      hasWebsite: true,
    },
  ];

  // Auto-slide carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % affiliations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [affiliations.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % affiliations.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + affiliations.length) % affiliations.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 lg:py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-center mb-12 text-gray-800">
          Our Affiliations
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {affiliations.map((affiliation, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-50 p-8 mx-2 rounded-lg text-center min-h-[300px] flex flex-col justify-center">
                    {/* Logo Container */}
                    <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-6 flex items-center justify-center shadow-md border border-gray-100">
                      {/* Replace this with actual images when available */}
                      <div className="text-gray-600 text-sm font-medium text-center px-2">
                        {affiliation.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .substring(0, 4)}
                      </div>
                      {/* 
                      Uncomment when you have actual images:
                      <img 
                        src={affiliation.logo} 
                        alt={`${affiliation.name} Logo`}
                        className="w-16 h-16 object-contain"
                      /> 
                      */}
                    </div>

                    {/* Affiliation Name */}
                    <h3 className="text-lg font-bold font-montserrat mb-4 text-gray-800 px-4">
                      {affiliation.name}
                    </h3>

                    {/* Website Link or Status */}
                    {affiliation.hasWebsite ? (
                      <a
                        href={affiliation.website ?? "#"}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-nunito font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {affiliation.description}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-gray-500 font-nunito">
                        {affiliation.description}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 z-10"
            aria-label="Previous affiliation"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 z-10"
            aria-label="Next affiliation"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {affiliations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar (Optional) */}
          <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-blue-600 h-1 rounded-full transition-all duration-500"
              style={{
                width: `${((currentSlide + 1) / affiliations.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Trust Message */}
        <div className="text-center mt-8">
          <p className="text-gray-600 font-nunito">
            Officially registered and affiliated with leading institutions
          </p>
        </div>

        {/* Affiliations CTA */}
        <div className="text-center mt-12">
          <Link
            href="/affiliations"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-bold font-nunito text-lg hover:bg-blue-700 transition-colors shadow-lg group"
          >
            View All Affiliations
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AffiliationsCarousel;

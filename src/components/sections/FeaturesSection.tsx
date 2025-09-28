//src/components/FeaturesSection.tsx
"use client";

import Link from "next/link";
import { BookOpen, Heart, TrendingUp, Users, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Education",
      description: "Comprehensive educational programs and scholarships",
      color: "blue",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100 group-hover:bg-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical support and health awareness programs",
      color: "red",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100 group-hover:bg-red-200",
      iconColor: "text-red-600",
    },
    {
      icon: TrendingUp,
      title: "Microfinancing",
      description: "Small business loans and entrepreneurship support",
      color: "green",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100 group-hover:bg-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      title: "Social Welfare",
      description: "Community development, emergency relief",
      color: "purple",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100 group-hover:bg-purple-200",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-montserrat mb-6 text-gray-800">
            Our Impact Areas
          </h2>
          <p className="text-xl font-nunito text-gray-600 max-w-3xl mx-auto">
            We focus on four key pillars to create lasting change in our
            communities
          </p>
        </div>

        {/* 2x2 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="font-nunito text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-bold font-nunito text-lg hover:bg-blue-700 transition-colors shadow-lg group"
          >
            Explore All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

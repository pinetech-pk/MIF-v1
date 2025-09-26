// src/components/Header.tsx - Fixed version using Next.js Image component
"use client";

import { useState } from "react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationLinks = [
    { href: "/about", label: "About MIF" },
    { href: "/projects", label: "Projects" },
    { href: "/affiliations", label: "Affiliations" },
    { href: "/appeals", label: "Appeals" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section - Left */}
          <div className="flex items-center space-x-3">
            {/* Logo Image - Responsive sizes */}
            <div className="flex-shrink-0">
              <Image
                src="/images/mif-logo.png"
                alt="MIF Logo"
                width={48}
                height={48}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                priority
              />
            </div>

            {/* Logo Text - Responsive sizes */}
            <div className="font-montserrat font-bold leading-tight">
              <div className="text-blue-800">
                <div className="text-sm sm:text-base lg:text-lg">
                  Madrasa Ishaq
                </div>
                <div className="text-sm sm:text-base lg:text-lg">Farooqi</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-nunito font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side - Login & Donate Buttons */}
          <div className="flex items-center space-x-3">
            {/* Desktop Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <LoginLink className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 font-nunito font-medium transition-colors duration-200">
                Login
              </LoginLink>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-nunito font-medium transition-colors duration-200">
                Donate
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Navigation Links */}
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-nunito font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Buttons */}
              <div className="pt-4 space-y-2">
                <LoginLink className="block w-full px-3 py-2 text-center text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 font-nunito font-medium transition-colors duration-200">
                  Login
                </LoginLink>
                <button className="block w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-nunito font-medium transition-colors duration-200">
                  Donate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

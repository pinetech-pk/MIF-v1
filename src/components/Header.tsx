// src/components/layout/Header.tsx - Refactored with small components
"use client";

import { useState } from "react";
import Logo from "./ui/Logo";
import Navigation from "./layout/Navigation";
import AuthButtons from "./auth/AuthButtons";
import MobileMenuToggle from "./ui/MobileMenuToggle";
import MobileMenu from "./layout/MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/about", label: "About MIF" },
    { href: "/projects", label: "Projects" },
    { href: "/affiliations", label: "Affiliations" },
    { href: "/appeals", label: "Appeals" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          <Navigation
            items={navigationItems}
            className="hidden md:flex items-center space-x-8"
          />

          <div className="flex items-center space-x-3">
            <AuthButtons />
            <MobileMenuToggle
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
            />
          </div>
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          navigationItems={navigationItems}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;

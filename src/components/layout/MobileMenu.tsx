// src/components/layout/MobileMenu.tsx - Mobile menu component
import AuthButtons from "../auth/AuthButtons";
import Navigation from "./Navigation";

interface NavigationItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navigationItems: NavigationItem[];
  onClose: () => void;
}

const MobileMenu = ({ isOpen, navigationItems, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-200 bg-white">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Navigation
          items={navigationItems}
          onItemClick={onClose}
          className="flex flex-col space-y-1"
        />

        <div className="pt-4">
          <AuthButtons variant="mobile" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

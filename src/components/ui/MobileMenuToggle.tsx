// src/components/ui/MobileMenuToggle.tsx - Mobile menu toggle button
import { Menu, X } from "lucide-react";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuToggle = ({ isOpen, onToggle }: MobileMenuToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
      aria-label="Toggle mobile menu"
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

export default MobileMenuToggle;

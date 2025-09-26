// src/components/layout/Navigation.tsx - Reusable navigation component
import Link from "next/link";

interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  onItemClick?: () => void;
}

const Navigation = ({
  items,
  className = "",
  onItemClick,
}: NavigationProps) => {
  return (
    <nav className={className}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 font-nunito font-medium transition-colors duration-200"
          onClick={onItemClick}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;

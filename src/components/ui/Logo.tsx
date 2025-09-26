// src/components/ui/Logo.tsx - Reusable logo component
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-6 h-6 sm:w-8 sm:h-8",
    md: "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12",
    lg: "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20",
  };

  const textSizeClasses = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base lg:text-lg",
    lg: "text-base sm:text-lg lg:text-xl",
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex-shrink-0">
        <Image
          src="/images/mif-logo.png"
          alt="MIF Logo"
          width={48}
          height={48}
          className={`object-contain ${sizeClasses[size]}`}
          priority
        />
      </div>

      {showText && (
        <div className="font-montserrat font-bold leading-tight">
          <div className="text-blue-800">
            <div className={textSizeClasses[size]}>Madrasa Ishaq</div>
            <div className={textSizeClasses[size]}>Farooqi</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;

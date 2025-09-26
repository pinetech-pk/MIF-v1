// src/components/auth/AuthButtons.tsx - Authentication buttons component
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface AuthButtonsProps {
  variant?: "desktop" | "mobile";
}

const AuthButtons = ({ variant = "desktop" }: AuthButtonsProps) => {
  const containerClass =
    variant === "mobile"
      ? "space-y-2"
      : "hidden sm:flex items-center space-x-3";

  const buttonClass =
    variant === "mobile" ? "block w-full px-3 py-2 text-center" : "px-4 py-2";

  return (
    <div className={containerClass}>
      <LoginLink
        className={`${buttonClass} text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 font-nunito font-medium transition-colors duration-200`}
      >
        Login
      </LoginLink>
      <button
        className={`${buttonClass} bg-blue-600 text-white rounded-md hover:bg-blue-700 font-nunito font-medium transition-colors duration-200`}
      >
        Donate
      </button>
    </div>
  );
};

export default AuthButtons;

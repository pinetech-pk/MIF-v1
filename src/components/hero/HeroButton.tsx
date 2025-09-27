// src/components/hero/HeroButton.tsx - Get Involved button component
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const HeroButton = () => {
  return (
    <Link
      href="/get-involved"
      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold font-nunito rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
    >
      <ExternalLink className="w-5 h-5 mr-2" />
      Get Involved
    </Link>
  );
};

export default HeroButton;

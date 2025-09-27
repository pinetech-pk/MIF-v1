// src/components/ui/StatCard.tsx - Reusable statistics card component
interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

const StatCard = ({ number, label, className = "" }: StatCardProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="text-3xl lg:text-4xl font-bold font-montserrat text-gray-900">
        {number}
      </div>
      <p className="text-sm lg:text-base text-gray-600 font-nunito leading-relaxed">
        {label}
      </p>
    </div>
  );
};

export default StatCard;

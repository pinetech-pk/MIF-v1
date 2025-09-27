// src/components/hero/HeroStats.tsx - Statistics display component
import StatCard from "../ui/StatCard";

const HeroStats = () => {
  const stats = [
    {
      number: "1200+",
      label: "Students empowered through Quranic and academic education",
    },
    {
      number: "130+",
      label: "Underprivileged Families supported through scholarship and aid",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
      {stats.map((stat, index) => (
        <StatCard key={index} number={stat.number} label={stat.label} />
      ))}
    </div>
  );
};

export default HeroStats;

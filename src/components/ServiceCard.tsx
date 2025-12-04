import React from "react";

interface ServiceCardProps {
  title: string;
  icon: string;
  items: string[];
    link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, items }) => (
  <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 hover:border-cyan-400/70 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition">
    <div className="flex items-center gap-2 mb-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800 text-lg">
        {icon}
      </span>
      <h3 className="text-sm font-semibold">{title}</h3>
    </div>
    <ul className="text-xs text-slate-200 space-y-1">
      {items.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;

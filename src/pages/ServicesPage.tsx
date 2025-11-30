import React from "react";
import ServiceCard from "../components/ServiceCard";

const ServicesPage: React.FC = () => {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Sales & Services by{" "}
              <span className="text-cyan-400">SK Infotech</span>
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              One-stop solution in Vadodara for device repair, upgrades,
              networking and CCTV installation with professional support.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-300">
            🏠 Onsite Home / Office Visit · 🏢 Shop Support
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <ServiceCard
            title="Laptop & Desktop Repair"
            icon="💻"
            items={[
              "Laptop repairing & desktop repairing",
              "Hardware & software diagnose & upgrade",
              "Windows, drivers & software installation",
              "System optimization & performance tuning",
            ]}
          />
          <ServiceCard
            title="Networking & Peripherals"
            icon="🌐"
            items={[
              "Networking setup & troubleshooting",
              "Wi-Fi, LAN configuration & sharing",
              "Printers & scanners setup & repair",
              "Branded & assembled computers & peripherals",
            ]}
          />
          <ServiceCard
            title="Security & Data"
            icon="🛡️"
            items={[
              "Virus protection & system security",
              "Data backup & data recovery",
              "CCTV cameras sales & installation",
              "Remote viewing & DVR/NVR configuration",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

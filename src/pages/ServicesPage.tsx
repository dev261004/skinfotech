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
            🏠 Home Visit Available · ⚙️ Genuine Parts · 🔧 Warranty on Repair
          </span>
        </div>

        {/* Services grid (2 x 2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <ServiceCard
            title="Laptop & Desktop Repair"
            icon="💻"
            items={[
              "Hardware & software diagnose & upgrade",
              "Windows installation & driver setup",
              "Performance tuning & heating solution",
              "Laptop screen & keyboard replacement",
            ]}
            link="/laptop-repair"
          />

          <ServiceCard
            title="Networking & Peripherals"
            icon="🌐"
            items={[
              "Wi-Fi & LAN configuration",
              "Printers & scanners setup & repair",
              "Network sharing, router replacement",
              "Branded & assembled computer systems",
            ]}
          />

          <ServiceCard
            title="Security & Data"
            icon="🛡️"
            items={[
              "Virus removal & OS recovery",
              "Data backup & data recovery",
              "Security patch installation",
              "System security & ransomware protection",
            ]}
          />

          <ServiceCard
            title="CCTV Installation & Repair"
            icon="📹"
            items={[
              "DVR / NVR setup & remote viewing",
              "Indoor & outdoor camera installation",
              "Cable management & wiring repair",
              "Recording, storage & mobile live view setup",
            ]}
            link="/cctv-repair"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

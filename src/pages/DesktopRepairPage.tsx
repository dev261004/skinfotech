import React from "react";

const DesktopRepairPage: React.FC = () => {
  const phone = "+91 9904274783";
  const whatsappNumber = "919904274783";

  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        
        {/* HERO: left text + right image */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              Desktop Repair{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Fast & Professional
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 mb-5 max-w-2xl">
              Whether it’s a power issue, motherboard failure, display problem,
              software corruption or performance slowdown,{" "}
              <span className="font-semibold text-slate-100">SK Infotech</span>{" "}
              provides expert desktop repair with genuine parts and doorstep
              support in Vadodara.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 text-[11px] md:text-xs">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-1 text-emerald-300">
                ⚡ Same-day fix for many issues
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-3 py-1 text-cyan-300">
                🏠 Home visit available
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${phone}`}
                className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs md:text-sm font-semibold px-5 py-2 transition"
              >
                📞 Call for Desktop Repair
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-emerald-400/70 text-emerald-300 text-xs md:text-sm font-semibold px-5 py-2 hover:bg-emerald-400/10 transition"
              >
                💬 WhatsApp Your Issue
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/desktop_repair.jpg"
              alt="Desktop repair service"
              className="w-full max-w-sm h-auto object-contain rounded-2xl border border-slate-700 bg-slate-900 shadow-[0_0_30px_rgba(8,47,73,0.5)]"
            />
          </div>
        </div>

        {/* SECTION: Common problems + Parts */}
        <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
          {/* Common Problems */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-sm md:text-base font-semibold mb-3">
              🛠 Common Desktop Problems We Fix
            </h2>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>• PC not turning on / no display</li>
              <li>• Automatic restart / shutdown</li>
              <li>• Display not working</li>
              <li>• Motherboard issues</li>
              <li>• Slow performance / hanging</li>
              <li>• SMPS failure / power supply issue</li>
              <li>• Software & OS problems</li>
              <li>• Virus & malware removal</li>
            </ul>
          </div>

          {/* Parts we replace */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-sm md:text-base font-semibold mb-3">
              🔧 Parts We Replace / Upgrade
            </h2>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>• SMPS / Power Supply</li>
              <li>• Motherboard</li>
              <li>• RAM / SSD / HDD</li>
              <li>• Processor (CPU)</li>
              <li>• Cabinet & Fans</li>
              <li>• Graphics Card</li>
              <li>• Display cables & connectors</li>
            </ul>
          </div>
        </div>

        {/* SECTION: Why choose us */}
        <div className="mt-10 bg-slate-900/80 border border-slate-700 rounded-2xl p-5">
          <h2 className="text-sm md:text-base font-semibold mb-3">
            ⭐ Why Choose SK Infotech for Desktop Repair?
          </h2>
          <ul className="grid md:grid-cols-2 gap-1 text-xs md:text-sm">
            <li>• Same-day repair for many issues</li>
            <li>• Home visit available</li>
            <li>• Genuine parts with warranty</li>
            <li>• Affordable pricing & free diagnosis</li>
            <li>• Experienced technician</li>
            <li>• Fast delivery after repair</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DesktopRepairPage;

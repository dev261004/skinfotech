import React from "react";

const CctvRepairPage: React.FC = () => {
  const phone = "+91 9904274783";
  const whatsappNumber = "919904274783";

  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">

        {/* HERO: text left, image right */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Left Text */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              CCTV Installation & Repair{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Secure Your Home & Office
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 mb-5 max-w-2xl">
              SK Infotech provides CCTV installation, DVR/NVR setup, camera
              repair, wiring solutions and remote monitoring configuration using
              genuine hardware and expert networking support in Vadodara.
            </p>

            <div className="flex flex-wrap gap-2 mb-6 text-[11px] md:text-xs">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-1 text-emerald-300">
                🔒 Secure monitoring solutions
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-3 py-1 text-cyan-300">
                🏠 Home & Office Visit Available
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${phone}`}
                className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs md:text-sm font-semibold px-5 py-2 transition"
              >
                📞 Call for CCTV Service
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

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/cctv_repair.jpeg"
              alt="CCTV Services"
              className="w-full max-w-sm h-auto object-contain rounded-2xl border border-slate-700 bg-slate-900 shadow-[0_0_30px_rgba(8,47,73,0.5)]"
            />
          </div>
        </div>

        {/* SERVICES grid */}
        <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
          {/* Services Offered */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-sm md:text-base font-semibold mb-3">
              🛡 CCTV Services We Provide
            </h2>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>• CCTV installation (Indoor / Outdoor)</li>
              <li>• DVR/NVR setup & configuration</li>
              <li>• Camera not showing / No signal</li>
              <li>• Video recording issues</li>
              <li>• Hard disk not detecting / storage error</li>
              <li>• Remote live view setup (Mobile/PC)</li>
              <li>• Cable management & wiring repair</li>
              <li>• Upgrade to HD / IP cameras</li>
            </ul>
          </div>

          {/* Parts Supplied */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-sm md:text-base font-semibold mb-3">
              🔧 Parts & Accessories We Provide
            </h2>
            <ul className="space-y-1 text-xs md:text-sm">
              <li>• Cameras (Analog, AHD, IP)</li>
              <li>• DVR / NVR</li>
              <li>• SMPS / Power supply</li>
              <li>• Hard disk & storage solutions</li>
              <li>• POE adapters / Switches</li>
              <li>• CAT6 / Coaxial cables & connectors</li>
            </ul>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-10 bg-slate-900/80 border border-slate-700 rounded-2xl p-5">
          <h2 className="text-sm md:text-base font-semibold mb-3">
            ⭐ Why Choose SK Infotech for CCTV?
          </h2>
          <ul className="grid md:grid-cols-2 gap-1 text-xs md:text-sm">
            <li>• Professional installation & support</li>
            <li>• Fast service at affordable cost</li>
            <li>• Home/Office visit available</li>
            <li>• Warranty on installation & parts</li>
            <li>• Free remote mobile setup</li>
            <li>• Expert in multi-camera networking</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CctvRepairPage;

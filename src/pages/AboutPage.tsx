import React from "react";

const AboutPage: React.FC = () => {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[1.1fr,1.1fr] gap-8">
        {/* LEFT: ABOUT TEXT */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            About <span className="text-cyan-400">SK Infotech</span>
          </h1>
          <p className="text-sm text-slate-300 mb-3">
            SK Infotech is a trusted{" "}
            <span className="font-medium text-slate-100">
              laptop, desktop & CCTV repair center
            </span>{" "}
            serving customers in Vadodara, Gujarat. We handle both home and
            office systems with professional care and clear communication.
          </p>
          <p className="text-sm text-slate-300 mb-3">
            From simple software issues to advanced motherboard repairs, we focus
            on giving honest guidance, quality work and long-term reliability
            instead of temporary fixes. Our goal is to keep your systems stable
            and ready for work, study or business.
          </p>
          <ul className="text-sm text-slate-200 space-y-1.5 mb-4">
            <li>• Dedicated to quick resolution & clear explanation of issues</li>
            <li>• Support for individuals, small offices & local businesses</li>
            <li>• Regular clients across Vadodara and nearby areas</li>
          </ul>
          <p className="text-xs text-slate-400 mb-4">
            Need help? Just call or WhatsApp your issue – we will guide you on
            whether it needs a home visit or workshop repair and suggest the
            most cost-effective solution.
          </p>

          {/* Small highlight badges */}
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-emerald-300">
              ⭐ Customer-first Approach
            </span>
            <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-cyan-300">
              🏠 Home Visit Available
            </span>
          </div>
        </div>

        {/* RIGHT: SERVICE PROCESS CARD */}
        <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 md:p-6">
          <h2 className="text-sm font-semibold mb-3">
            📍 Service Process – How We Work
          </h2>
          <ol className="space-y-3 text-xs text-slate-200">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-slate-950 text-xs font-bold">
                1
              </span>
              <div>
                <p className="font-semibold">Device Checkup (free inspection)</p>
                <p className="text-slate-300">
                  We inspect your laptop/desktop/CCTV, listen to your problem,
                  and check the condition of the device.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-slate-950 text-xs font-bold">
                2
              </span>
              <div>
                <p className="font-semibold">Problem Finding & Estimate</p>
                <p className="text-slate-300">
                  We explain the issue clearly in simple language and give an
                  approximate cost and time before we start the repair.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-slate-950 text-xs font-bold">
                3
              </span>
              <div>
                <p className="font-semibold">Repair & Testing</p>
                <p className="text-slate-300">
                  The device is repaired using proper tools and, wherever
                  possible, genuine parts. We then test it under real usage
                  conditions.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-slate-950 text-xs font-bold">
                4
              </span>
              <div>
                <p className="font-semibold">Delivery & Warranty Support</p>
                <p className="text-slate-300">
                  The device is delivered back (or handed over at shop) with a
                  clear explanation of the work done and any applicable warranty
                  on parts and repair.
                </p>
              </div>
            </li>
          </ol>

          <p className="mt-4 text-[11px] text-slate-400">
            We believe in transparent repair – you will always know what is being
            replaced, why it is needed, and what it will cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

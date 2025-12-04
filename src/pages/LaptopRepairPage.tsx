import React from "react";

const BrandPill: React.FC<{ name: string }> = ({ name }) => (
  <span className="inline-flex items-center justify-center rounded-full bg-slate-800 text-[11px] px-3 py-1 text-slate-100 border border-slate-700">
    {name}
  </span>
);

const LaptopRepairPage: React.FC = () => {
  const phone = "+91 9904274783"; // update
  const whatsappNumber = "919904274783"; // update (with country code, no spaces)

  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        {/* HERO: text left, image right */}
       {/* HERO: text left, image right */}
<div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
  {/* LEFT — text section */}
  <div>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
      Laptop Repairing{" "}
      <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
        Complete Care
      </span>
    </h1>

    <p className="text-sm md:text-base text-slate-300 mb-5 max-w-2xl">
      From minor software glitches to major hardware faults,{" "}
      <span className="text-slate-50 font-semibold">SK Infotech</span> handles
      all kinds of laptop issues with professional tools, genuine parts and
      doorstep service in Vadodara.
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
        📞 Call for Laptop Repair
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

  {/* RIGHT — image section */}
  <div className="flex justify-center lg:justify-end">
    <img
      src="/laptop_repair.jpeg"
      alt="Laptop repairing"
      className="w-full max-w-sm h-auto object-contain rounded-2xl border border-slate-700 bg-slate-900 shadow-[0_0_30px_rgba(8,47,73,0.5)]"
    />
  </div>
</div>


        {/* TOP GRID: COMMON PROBLEMS + PARTS + UPGRADES */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Common problems */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-sm md:text-base font-semibold mb-3 flex items-center gap-2">
              🖥 Common Laptop Problems We Repair
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-xs md:text-sm text-slate-200">
              <div>
                <p className="font-semibold text-slate-100 mb-1">
                  Hardware Issues
                </p>
                <ul className="space-y-1">
                  <li>• Laptop not turning on</li>
                  <li>• No display / black screen</li>
                  <li>• Broken or flickering display</li>
                  <li>• Keyboard not working / some keys not working</li>
                  <li>• Touchpad not working</li>
                  <li>• Motherboard faults</li>
                  <li>• Laptop overheating</li>
                  <li>• USB / HDMI ports not working</li>
                  <li>• Battery not charging</li>
                  <li>• Loose hinges / broken body panel</li>
                  <li>• DC jack / charging pin issue</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-100 mb-1">
                  Software Issues
                </p>
                <ul className="space-y-1">
                  <li>• Windows not starting</li>
                  <li>• Slow laptop performance</li>
                  <li>• Virus / malware removal</li>
                  <li>• Windows installation</li>
                  <li>• Driver installation</li>
                  <li>• Data recovery</li>
                  <li>• Blue screen errors</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Parts & upgrades */}
          <div className="space-y-4">
            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-xs md:text-sm text-slate-200">
              <h2 className="text-sm md:text-base font-semibold mb-2">
                🔋 Parts We Replace
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <ul className="space-y-1">
                  <li>• Laptop screen (LED / LCD / Touch)</li>
                  <li>• Battery</li>
                  <li>• Keyboard</li>
                  <li>• SSD / HDD</li>
                  <li>• RAM</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Charger / Adapter</li>
                  <li>• Cooling fan</li>
                  <li>• Hinges</li>
                  <li>• Speakers</li>
                  <li>• Motherboard components (IC, chipset, charging section)</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-xs md:text-sm text-slate-200">
              <h2 className="text-sm md:text-base font-semibold mb-2">
                ⚙ Laptop Upgrade Services
              </h2>
              <ul className="space-y-1">
                <li>• SSD upgrade (speed boost)</li>
                <li>• RAM upgrade (smooth multitasking)</li>
                <li>• Windows 10 / 11 upgrade</li>
                <li>• Antivirus installation</li>
                <li>• Performance tuning & cleanup</li>
                <li>• Software installation package</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM GRID: BRANDS + WHY CHOOSE US */}
        <div className="grid lg:grid-cols-[1.2fr,1.1fr] gap-6">
          {/* Brands we repair */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-xs md:text-sm text-slate-200">
            <h2 className="text-sm md:text-base font-semibold mb-2">
              🏷 Brands We Repair
            </h2>
            <div className="grid sm:grid-cols-3 gap-2">
              <BrandPill name="Dell" />
              <BrandPill name="HP" />
              <BrandPill name="Lenovo" />
              <BrandPill name="Acer" />
              <BrandPill name="Asus" />
              <BrandPill name="Apple MacBook" />
              <BrandPill name="Samsung" />
              <BrandPill name="MSI" />
              <BrandPill name="Sony Vaio" />
              <BrandPill name="Toshiba" />
              <BrandPill name="All other brands" />
            </div>
          </div>

          {/* Why choose SK Infotech */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-xs md:text-sm text-slate-200">
            <h2 className="text-sm md:text-base font-semibold mb-2">
              🛠 Why Choose SK Infotech?
            </h2>
            <ul className="space-y-1">
              <li>• Fast service (same-day for many repairs)</li>
              <li>• Affordable pricing</li>
              <li>• Genuine parts available</li>
              <li>• Doorstep pickup & delivery (optional)</li>
              <li>• Experienced technician with years of work</li>
              <li>• Free diagnosis</li>
              <li>• Warranty on parts & repair</li>
            </ul>
          </div>
        </div>

        {/* CTA: BOOK LAPTOP REPAIR NOW */}
        <div className="mt-10 bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_0_35px_rgba(8,47,73,0.7)]">
          <div>
            <h2 className="text-sm md:text-lg font-semibold mb-1">
              Book Laptop Repair Now
            </h2>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl">
              Facing any of the above issues? Call or WhatsApp SK Infotech and
              get quick guidance, estimated cost and a suitable time slot for
              home visit or workshop repair in Vadodara.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${phone}`}
              className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs md:text-sm font-semibold px-5 py-2 transition"
            >
              📞 Call for Booking
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-emerald-400/70 text-emerald-300 text-xs md:text-sm font-semibold px-5 py-2 hover:bg-emerald-400/10 transition"
            >
              💬 Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopRepairPage;

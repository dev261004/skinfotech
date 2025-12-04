import React from "react";

const DesktopRepairPage: React.FC = () => {
  const phone = "+91 98XXXXXXXX";
  const whatsappNumber = "9198XXXXXXXX";

  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Desktop Repair – Fast & Professional Service
        </h1>
        <p className="text-sm text-slate-300 mb-8 max-w-2xl">
          Whether it’s a power issue, motherboard failure, display problem,
          software corruption or performance slowdown, SK Infotech provides
          expert desktop repair with genuine parts and doorstep support in
          Vadodara.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
          {/* Common Problems */}
          <div className="space-y-2">
            <h2 className="text-slate-100 font-semibold mb-1">
              🛠 Common Desktop Problems We Fix
            </h2>
            <ul className="space-y-1">
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
          <div className="space-y-2">
            <h2 className="text-slate-100 font-semibold mb-1">
              🔧 Parts We Replace / Upgrade
            </h2>
            <ul className="space-y-1">
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

        {/* Why choose us */}
        <div className="mt-10">
          <h2 className="text-slate-100 font-semibold mb-3">
            ⭐ Why Choose SK Infotech for Desktop Repair?
          </h2>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-300">
            <li>• Same-day repair for many issues</li>
            <li>• Home visit available</li>
            <li>• Genuine parts with warranty</li>
            <li>• Affordable pricing & free diagnosis</li>
            <li>• Experienced technician</li>
            <li>• Fast delivery after repair</li>
          </ul>
        </div>

        {/* Call to action */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`tel:${phone}`}
            className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold px-6 py-2.5 transition"
          >
            📞 Call Now
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-emerald-400/70 text-emerald-300 text-sm font-semibold px-6 py-2.5 hover:bg-emerald-400/10 transition"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesktopRepairPage;

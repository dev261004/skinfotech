import React from "react";

const CctvRepairPage: React.FC = () => {
  const phone = "+91 98XXXXXXXX";
  const whatsappNumber = "9198XXXXXXXX";

  return (
    <section className="border-b border-slate-800 bg-slate-950/95">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          CCTV Installation & Repair – Secure Your Home & Office
        </h1>
        <p className="text-sm text-slate-300 mb-8 max-w-2xl">
          SK Infotech provides CCTV installation, DVR/NVR setup, camera repair,
          wiring solutions and remote monitoring configuration with reliable
          service at affordable charges in Vadodara.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
          {/* Services Offered */}
          <div className="space-y-2">
            <h2 className="text-slate-100 font-semibold mb-1">
              🛡 CCTV Services We Provide
            </h2>
            <ul className="space-y-1">
              <li>• CCTV installation (Indoor / Outdoor)</li>
              <li>• DVR/NVR setup & configuration</li>
              <li>• Camera not showing / No signal</li>
              <li>• Video recording not working</li>
              <li>• Hard disk not detecting / storage error</li>
              <li>• Mobile live view setup & remote access</li>
              <li>• Cable management & wiring repair</li>
              <li>• Upgrade to HD/IP cameras</li>
            </ul>
          </div>

          {/* Parts supplied */}
          <div className="space-y-2">
            <h2 className="text-slate-100 font-semibold mb-1">
              🔧 Parts & Accessories We Provide
            </h2>
            <ul className="space-y-1">
              <li>• Cameras (Analog, AHD, IP)</li>
              <li>• DVR / NVR</li>
              <li>• Power supply</li>
              <li>• Hard disk</li>
              <li>• Connectors / Switches / POE</li>
              <li>• CAT6 / Coaxial cables</li>
            </ul>
          </div>
        </div>

        {/* Why choose us */}
        <div className="mt-10">
          <h2 className="text-slate-100 font-semibold mb-3">
            ⭐ Why SK Infotech for CCTV?
          </h2>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-slate-300">
            <li>• Professional installation & support</li>
            <li>• Fast service at affordable cost</li>
            <li>• Home/office visit available</li>
            <li>• Warranty on installation & parts</li>
            <li>• Free DVR mobile setup</li>
            <li>• Expert in multi-camera networking</li>
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

export default CctvRepairPage;

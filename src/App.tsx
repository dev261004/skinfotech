import React from "react";

const App: React.FC = () => {
  const phone = "+91 9904274783"; // <- put your real number
  const whatsappNumber = "919904274783"; // <- with country code, no spaces
  const email = "kalpeshsneha11@gmail.com";

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {/* LOGO – put your logo in /public/sk-logo.png or adjust src */}
            <img
              src="/sk infotech.png"
              alt="SK Infotech Logo"
              className="h-9 w-9 rounded-full object-contain border border-slate-700 bg-slate-900"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-wide">
                SK Infotech
              </span>
              <span className="text-[11px] text-slate-400">
                Laptop • Desktop • CCTV | Vadodara
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <button onClick={() => handleScroll("hero")} className="hover:text-cyan-400 transition">
              Home
            </button>
            <button onClick={() => handleScroll("services")} className="hover:text-cyan-400 transition">
              Services
            </button>
            <button onClick={() => handleScroll("laptop")} className="hover:text-cyan-400 transition">
              Laptop Repair
            </button>
            <button onClick={() => handleScroll("about")} className="hover:text-cyan-400 transition">
              About
            </button>
            <button onClick={() => handleScroll("contact")} className="hover:text-cyan-400 transition">
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3">
           <a
  href="https://maps.app.goo.gl/VVBcnLexZfENqs2c7"
  target="_blank"
  rel="noreferrer"
  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition"
  aria-label="Google Maps"
>
  {/* Map Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
</a>
            <a
  href="https://www.instagram.com/sk.infotech2/?igsh=MWx3YzkyM3NnMjM2#"
  target="_blank"
  rel="noreferrer"
  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-pink-500 text-pink-400 hover:bg-pink-500/10 transition"
  aria-label="Instagram"
>
  {/* Instagram Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="w-5 h-5"
  >
    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" ry="5" />
    <path d="M15.5 11.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    <circle cx="17.35" cy="6.65" r="1.25" />
  </svg>
</a>

            <a
              href={`tel:${phone}`}
              className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-semibold px-4 py-1.5 transition whitespace-nowrap"
            >
              Call Now
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-slate-800"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.20),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.25),_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 mb-3">
              HOME VISIT AVAILABLE
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
              Expert{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Laptop, Desktop & CCTV
              </span>{" "}
              Repair in Vadodara
            </h1>
            <p className="text-slate-300 text-sm md:text-base mb-5 max-w-xl">
              SK Infotech provides fast, reliable{" "}
              <span className="font-medium text-slate-100">
                Sales & Services
              </span>{" "}
              for laptops, desktops, networking, printers and CCTV systems.
              Genuine parts, clear communication and doorstep service.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
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
            <p className="text-[11px] text-slate-400">
              Mon–Sun · 8:00 AM – 11:30 PM · Quick response on WhatsApp.
            </p>
          </div>

          {/* Right side hero card */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 md:p-6 shadow-[0_0_40px_rgba(8,47,73,0.7)]">
            <h2 className="text-sm font-semibold text-slate-100 mb-3 flex items-center gap-2">
              🛠 Same-Day Laptop Repair
              <span className="text-[10px] text-emerald-300 font-normal">
                (for many common issues)
              </span>
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-100">Common Issues</p>
                <ul className="space-y-1 text-slate-300">
                  <li>• Not turning on / no display</li>
                  <li>• Broken / flickering screen</li>
                  <li>• Keyboard not working</li>
                  <li>• Laptop overheating</li>
                  <li>• Windows not starting</li>
                </ul>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-100">Instant Help</p>
                <ul className="space-y-1 text-slate-300">
                  <li>• Free basic diagnosis</li>
                  <li>• Home visit available</li>
                  <li>• Genuine parts support</li>
                  <li>• Warranty on repairs</li>
                  <li>• Pickup & drop (optional)</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-slate-400">
              Share your device problem on WhatsApp and get a quick estimate
              before we visit.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW – MODERN GRID */}
      <section
        id="services"
        className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Sales & Services by{" "}
                <span className="text-cyan-400">SK Infotech</span>
              </h2>
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

      {/* LAPTOP REPAIR DETAILS */}
      <section
        id="laptop"
        className="border-b border-slate-800 bg-slate-950/95"
      >
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Laptop Repairing – Complete Care
          </h2>
          <p className="text-sm text-slate-300 mb-8 max-w-2xl">
            From minor software glitches to major hardware faults, SK Infotech
            handles all kinds of laptop issues with professional tools and
            experience.
          </p>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Common problems */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                🖥 1. Common Laptop Problems We Repair
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-200">
                <div>
                  <p className="font-semibold text-slate-100 mb-1">
                    Hardware Issues
                  </p>
                  <ul className="space-y-1">
                    <li>• Laptop not turning on</li>
                    <li>• No display / black screen</li>
                    <li>• Broken or flickering display</li>
                    <li>• Keyboard / touchpad not working</li>
                    <li>• Motherboard faults</li>
                    <li>• Laptop overheating</li>
                    <li>• USB / HDMI not working</li>
                    <li>• Battery not charging</li>
                    <li>• Loose hinges / broken body</li>
                    <li>• DC jack / charging pin issues</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-100 mb-1">
                    Software Issues
                  </p>
                  <ul className="space-y-1">
                    <li>• Windows not starting</li>
                    <li>• Slow performance</li>
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
              <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
                <h3 className="text-sm font-semibold mb-2">
                  🔋 2. Parts We Replace
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="space-y-1">
                    <li>• Laptop screen (LED/LCD/Touch)</li>
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
                    <li>• Motherboard components (IC, chipset, etc.)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
                <h3 className="text-sm font-semibold mb-2">
                  ⚙ 4. Laptop Upgrade Services
                </h3>
                <ul className="space-y-1">
                  <li>• SSD upgrade for faster speed</li>
                  <li>• RAM upgrade for multitasking</li>
                  <li>• Windows 10 / 11 upgrade</li>
                  <li>• Antivirus installation</li>
                  <li>• Performance tuning</li>
                  <li>• Software installation package</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brands & Why choose us */}
          <div className="grid lg:grid-cols-[1.2fr,1.1fr] gap-6">
            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
              <h3 className="text-sm font-semibold mb-2">
                🏷 3. Brands We Repair
              </h3>
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
                <BrandPill name="& all other brands" />
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
              <h3 className="text-sm font-semibold mb-2">
                🛠 5. Why Choose SK Infotech?
              </h3>
              <ul className="space-y-1">
                <li>• Fast service (same-day for many repairs)</li>
                <li>• Affordable and transparent pricing</li>
                <li>• Genuine parts available</li>
                <li>• Doorstep pickup & delivery (optional)</li>
                <li>• Experienced technician with years of work</li>
                <li>• Free diagnosis</li>
                <li>• Warranty on parts & repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & SERVICE PROCESS */}
      <section
        id="about"
        className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[1.1fr,1.1fr] gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              About <span className="text-cyan-400">SK Infotech</span>
            </h2>
            <p className="text-sm text-slate-300 mb-3">
              SK Infotech is a trusted{" "}
              <span className="font-medium text-slate-100">
                laptop, desktop & CCTV repair center
              </span>{" "}
              serving customers in Vadodara, Gujarat. We handle both home and
              office systems with professional care.
            </p>
            <p className="text-sm text-slate-300 mb-3">
              From simple software issues to advanced motherboard repairs, we
              focus on giving honest guidance, quality work and long-term
              reliability instead of temporary fixes.
            </p>
            <ul className="text-sm text-slate-200 space-y-1.5 mb-4">
              <li>• Dedicated to quick resolution & clear communication</li>
              <li>• Support for individuals, small offices & businesses</li>
              <li>• Regular clients across Vadodara and nearby areas</li>
            </ul>
            <p className="text-xs text-slate-400">
              Need help? Just call or WhatsApp your issue – we will guide you
              on whether it needs a home visit or workshop repair.
            </p>
          </div>

          {/* Service Process */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 md:p-6">
            <h3 className="text-sm font-semibold mb-3">
              📍 Service Process
            </h3>
            <ol className="space-y-3 text-xs text-slate-200">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-slate-950 text-xs font-bold">
                  1
                </span>
                <div>
                  <p className="font-semibold">Device Checkup (free inspection)</p>
                  <p className="text-slate-300">
                    We inspect your laptop/desktop/CCTV and understand the
                    problem in detail.
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
                    We explain the issue clearly and give an approximate cost
                    before starting repair.
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
                    The device is repaired using proper tools and tested under
                    real conditions.
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
                    Device is delivered back. Follow-up support and warranty
                    assistance available.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="bg-slate-950 text-slate-50 py-10 md:py-14"
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.1fr,1fr] gap-8">
          {/* LEFT SIDE – CONTACT + ADDRESS */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Contact & Booking
            </h2>
            <p className="text-sm text-slate-300 mb-4 max-w-xl">
              Share your problem on call or WhatsApp and we&apos;ll guide you
              with the best solution, estimated cost and available timing.
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-slate-400">Name:</span>{" "}
                <span className="font-semibold">
                  SK Infotech – Laptop & Desktop Repair
                </span>
              </p>
              <p>
                <span className="text-slate-400">Location:</span>{" "}
                Vadodara, Gujarat
              </p>
              <p>
                <span className="text-slate-400">Phone:</span>{" "}
                <a href={`tel:${phone}`} className="text-cyan-400 underline">
                  {phone}
                </a>
              </p>
              <p>
                <span className="text-slate-400">WhatsApp:</span>{" "}
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-300 underline"
                >
                  Chat on WhatsApp
                </a>
              </p>
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-cyan-400 underline"
                >
                  {email}
                </a>
              </p>
              <p>
                <span className="text-slate-400">Timings:</span> Mon–Sun, 8:00 AM – 11:30 PM
              </p>
            </div>

            {/* NEW ADDRESS CARD */}
            <div className="mt-5 bg-slate-900/80 border border-slate-700 rounded-2xl p-4 text-xs text-slate-200">
              <h3 className="text-sm font-semibold mb-1.5">
              📍 Office Address
              </h3>
              <p>SK Infotech – Laptop & Desktop Repair</p>
              <p>C/56, Pramukh Swami Tirth Soc., Behind Balaji Skyrise, Nr. Narayan Wadi, Atladara ,</p>
              <p>Vadodara – 390012, Gujarat, India</p>

              <a
  href="https://maps.app.goo.gl/VVBcnLexZfENqs2c7"
  target="_blank"
  rel="noreferrer"
  className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-400 text-cyan-300 text-sm font-semibold px-5 py-2 hover:bg-cyan-400/10 transition"
>
  {/* Map Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>

  View on Google Maps
</a>

            
            </div>

            <div className="flex gap-3 mt-5">
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
                💬 WhatsApp
              </a>
            </div>

           
          </div>

          {/* RIGHT SIDE – RECOMMENDS + SOCIAL */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold mb-2">
                Why customers recommend us:
              </p>
              <ul className="text-xs text-slate-200 space-y-1">
                <li>• Home visit available in Vadodara</li>
                <li>• Support for laptops, desktops, printers & CCTV</li>
                <li>• Honest advice – repair vs replace</li>
                <li>• Long-term service relationship with clients</li>
              </ul>

              {/* NEW "Recommended For" SECTION TO FILL SPACE */}
              <div className="mt-4 border-t border-slate-800 pt-3">
                <p className="text-xs text-slate-400 mb-1">Recommended for:</p>
                <ul className="text-xs text-slate-200 space-y-1">
                  <li>• Students with college / project laptops</li>
                  <li>• Work-from-home professionals</li>
                  <li>• Small offices & shops</li>
                  <li>• CCTV & security setup for homes & businesses</li>
                </ul>
                <p className="mt-3 text-xs text-slate-400">
                  Primary service area: Vadodara city & nearby locations.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-xs text-slate-400 mb-2">Follow us:</p>
              <div className="flex gap-3">
               <a
  href="https://maps.app.goo.gl/VVBcnLexZfENqs2c7"
  target="_blank"
  rel="noreferrer"
  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition"
  aria-label="Google Maps"
>
  {/* Map Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
</a>

               <a
  href="https://www.instagram.com/sk.infotech2/?igsh=MWx3YzkyM3NnMjM2#"
  target="_blank"
  rel="noreferrer"
  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-pink-500 text-pink-400 hover:bg-pink-500/10 transition"
  aria-label="Instagram"
>
  {/* Instagram Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="w-5 h-5"
  >
    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5" ry="5" />
    <path d="M15.5 11.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    <circle cx="17.35" cy="6.65" r="1.25" />
  </svg>
</a>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 text-[11px] text-slate-500 py-3">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-1">
          <p>© {new Date().getFullYear()} SK Infotech. All rights reserved.</p>
          <p>Made for clients in Vadodara & nearby areas.</p>
        </div>
      </footer>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  icon: string;
  items: string[];
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

const BrandPill: React.FC<{ name: string }> = ({ name }) => (
  <span className="inline-flex items-center justify-center rounded-full bg-slate-800 text-[11px] px-3 py-1 text-slate-100 border border-slate-700">
    {name}
  </span>
);

export default App;

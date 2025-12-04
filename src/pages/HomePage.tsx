import React from "react";

const HomePage: React.FC = () => {
  const phone = "+91 9904274783"; // update with real number
  const whatsappNumber = "919904274783"; // update with country code no spaces
  const email = "kalpeshsneha11@gmail.com"; // update with real email

  return (
    <>
      {/* HERO SECTION */}
     {/* HERO SECTION */}
<section className="relative overflow-hidden border-b border-slate-800">
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.20),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.25),_transparent_60%)]" />
  <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT — unchanged */}
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
        <span className="font-medium text-slate-100">Sales & Services</span>{" "}
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

    {/* RIGHT — NEW IMAGE (instead of Same-Day card) */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/home_img.jpeg"
        alt="SK Infotech Services"
        className="w-full max-w-md h-auto object-contain rounded-xl"
      />
    </div>
  </div>
</section>


      {/* QUICK CONTACT SECTION ON HOME PAGE */}
      <section className="bg-slate-950 text-slate-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 grid md:grid-cols-[1.1fr,1fr] gap-8">
          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Quick Contact – SK Infotech
            </h2>
            <p className="text-sm text-slate-300 mb-4 max-w-xl">
              Need urgent help with your laptop, desktop or CCTV? Reach out
              directly on call or WhatsApp and get a quick response from SK
              Infotech in Vadodara.
            </p>

            <div className="space-y-2 text-sm">
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
                <span className="text-slate-400">Location:</span> Vadodara,
                Gujarat (Home-based technician – home visit available)
              </p>
              <p>
                <span className="text-slate-400">Timing:</span> Mon–Sun, 8:00AM – 11:30 PM
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
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

            <p className="mt-3 text-[11px] text-slate-400 max-w-md">
              Direct contact helps us understand your issue better and suggest
              whether it needs a home visit or pickup.
            </p>
          </div>

          {/* RIGHT: ADDRESS + MAP + INSTAGRAM */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold mb-2">📌 Service Area</h3>
              <p className="text-xs text-slate-200 mb-1">
                SK Infotech – Laptop & Desktop Repair
              </p>
              < p className="text-xs text-slate-200 mb-1">
                C/56, Pramukh Swami Tirth Soc., Behind Balaji Skyrise, Nr. Narayan Wadi,Atladara,
            Vadodara – 390012, Gujarat, India
               
              </p>
              <p className="text-[11px] text-slate-400 mb-3">
                Home-based technician providing onsite service in Vadodara and
                nearby locations.
              </p>

              {/* Icons row: Google Maps + Instagram */}
              <div className="flex gap-3 items-center">
                {/* Google Maps Icon Button */}
                <a
                  href="https://maps.app.goo.gl/VVBcnLexZfENqs2c7"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 transition"
                  aria-label="Google Maps"
                >
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

                {/* Instagram Icon Button */}
                <a
                  href="https://www.instagram.com/sk.infotech2/?igsh=MWx3YzkyM3NnMjM2#"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-pink-500 text-pink-400 hover:bg-pink-500/10 transition"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="w-5 h-5"
                  >
                    <rect
                      x="2.75"
                      y="2.75"
                      width="18.5"
                      height="18.5"
                      rx="5"
                      ry="5"
                    />
                    <path d="M15.5 11.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    <circle cx="17.35" cy="6.65" r="1.25" />
                  </svg>
                </a>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">
              Tap the map icon to open location on Google Maps or follow us on
              Instagram for updates and tips.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

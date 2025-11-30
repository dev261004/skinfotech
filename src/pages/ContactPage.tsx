import React from "react";

const ContactPage: React.FC = () => {
  const phone = "+91 9904274783"; // update your real number
  const whatsappNumber = "919904274783"; // with country code, no spaces
  const email = "kalpeshsneha11@gmail.com"; // update your real email

  return (
    <section className="bg-slate-950 text-slate-50 py-10 md:py-14 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.1fr,1fr] gap-8">
        {/* LEFT SIDE — CONTACT & ADDRESS */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Contact & Booking
          </h1>
          <p className="text-sm text-slate-300 mb-4 max-w-xl">
            Share your problem on call or WhatsApp and we&apos;ll guide you with the
            best solution, estimated cost and available timing.
          </p>

          <div className="space-y-2 text-sm">
            <p>
              <span className="text-slate-400">Name:</span>{" "}
              <span className="font-semibold">
                SK Infotech – Laptop & Desktop Repair
              </span>
            </p>
            <p>
              <span className="text-slate-400">Location:</span> Vadodara, Gujarat
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
              <a href={`mailto:${email}`} className="text-cyan-400 underline">
                {email}
              </a>
            </p>
            <p>
              <span className="text-slate-400">Timing:</span> Mon–Sun, 8:00 AM – 11:30 PM
            </p>
          </div>

          {/* ADDRESS CARD */}
          <div className="mt-5 bg-slate-900/80 border border-slate-700 rounded-2xl p-4 text-xs text-slate-200">
            <h3 className="text-sm font-semibold mb-1.5">📌 Office Address</h3>
            <p>SK Infotech – Laptop & Desktop Repair</p>
            <p>C/56, Pramukh Swami Tirth Soc., Behind Balaji Skyrise, Nr. Narayan Wadi, Atladara ,</p>
            <p>Vadodara – 390012, Gujarat, India</p>

            {/* Google Maps Icon Button (no text) */}
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

          {/* CALL + WHATSAPP BUTTONS */}
          <div className="flex gap-3 mt-6">
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
            Direct communication → quicker problem understanding & faster repair.
          </p>
        </div>

        {/* RIGHT SIDE — RECOMMENDATION + SOCIAL */}
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

            {/* Recommended For */}
            <div className="mt-4 border-t border-slate-800 pt-3">
              <p className="text-xs text-slate-400 mb-1">Recommended for:</p>
              <ul className="text-xs text-slate-200 space-y-1">
                <li>• Students with college / project laptops</li>
                <li>• Work-from-home professionals</li>
                <li>• Small offices & shops</li>
                <li>• CCTV & security setup for businesses</li>
              </ul>
              <p className="mt-3 text-xs text-slate-400">
                Primary service area: Vadodara city & nearby locations.
              </p>
            </div>
          </div>

          {/* SOCIAL ICONS (MAP + INSTAGRAM) */}
          <div className="mt-5">
            <p className="text-xs text-slate-400 mb-2">Connect with us:</p>
            <div className="flex gap-3">
              {/* Google Maps Icon */}
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

              {/* Instagram Icon */}
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
  );
};

export default ContactPage;

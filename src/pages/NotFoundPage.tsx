import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const phone = "+91 9904274783";
  const whatsappNumber = "919904274783";

  return (
    <section className="relative min-h-[70vh] border-b border-slate-800 bg-slate-950 overflow-hidden">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.20),transparent_55%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20 flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-[11px] font-semibold text-amber-300">
          Oops! Page not found
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
        </span>

        {/* 404 + message */}
        <div>
          <div className="text-6xl md:text-7xl font-extrabold tracking-tight mb-3">
            <span className="text-slate-700">4</span>
            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              0
            </span>
            <span className="text-slate-700">4</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-50 mb-2">
            Looks like this wire is disconnected.
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mx-auto">
            The page you’re looking for doesn’t exist or may have been moved.
            Don’t worry—SK Infotech is still here to help you with your{" "}
            <span className="font-semibold text-slate-100">
              Laptop, Desktop & CCTV
            </span>{" "}
            issues.
          </p>
        </div>

        {/* Simple illustration style block */}
        <div className="w-full max-w-md mx-auto">
          <div className="relative rounded-3xl bg-slate-900/80 border border-slate-700 shadow-[0_0_40px_rgba(8,47,73,0.6)] px-6 py-5 flex items-center gap-4">
            <div className="flex-1 text-left">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400 mb-1">
                QUICK SUPPORT
              </p>
              <p className="text-sm md:text-base text-slate-100 font-semibold mb-1">
                Need to go back or need technical help?
              </p>
              <p className="text-[11px] text-slate-400">
                Return to the homepage or contact SK Infotech directly for
                instant support.
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-center gap-1 text-cyan-300 text-2xl">
              <span>💻</span>
              <span className="text-xs text-slate-400">SK Infotech</span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold px-6 py-2.5 transition"
          >
            ⬅ Back to Home
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="rounded-full border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 text-sm font-semibold px-6 py-2.5 transition"
          >
            📩 Go to Contact Page
          </button>

          <a
            href={`tel:${phone}`}
            className="rounded-full border border-emerald-400/70 text-emerald-300 text-sm font-semibold px-6 py-2.5 hover:bg-emerald-400/10 transition"
          >
            📞 Call SK Infotech
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-emerald-400/70 text-emerald-300 text-sm font-semibold px-6 py-2.5 hover:bg-emerald-400/10 transition"
          >
            💬 WhatsApp Support
          </a>
        </div>

        {/* small hint text */}
        <p className="text-[11px] text-slate-500 mt-2">
          If you reached this page from a link, the link might be outdated or
          mistyped.
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;

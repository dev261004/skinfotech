import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.20),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.25),_transparent_60%)]" />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-5 px-4">
        {/* Logo + brand */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-cyan-500/10 blur-2xl" />
          <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl border border-slate-700 bg-slate-900 shadow-[0_0_40px_rgba(8,47,73,0.7)]">
            <img
              src="/sk infotech.png"
              alt="SK Infotech"
              className="h-12 w-12 rounded-full object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <div className="text-center space-y-1">
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">
            SK Infotech
          </p>
          <h1 className="text-lg md:text-xl font-bold">
            Preparing your{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              service experience
            </span>
          </h1>
          <p className="text-[12px] md:text-sm text-slate-400 max-w-md">
            Please wait a moment while we load content for{" "}
            <span className="text-slate-100 font-medium">
              Laptop, Desktop & CCTV
            </span>{" "}
            services.
          </p>
        </div>

        {/* Loader */}
        <div className="flex flex-col items-center gap-3 mt-2">
          {/* Circular spinner */}
          <div className="h-9 w-9 rounded-full border-2 border-slate-700 border-t-cyan-400 animate-spin" />

          {/* Animated progress bar */}
          <div className="w-52 h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 animate-[slide_1.4s_ease-in-out_infinite]" />
          </div>

          <p className="text-[11px] text-slate-500">
            Loading... this usually takes only a few seconds.
          </p>
        </div>
      </div>

      {/* simple keyframes for progress bar */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(30%); }
            100% { transform: translateX(120%); }
          }
        `}
      </style>
    </section>
  );
};

export default LoadingPage;

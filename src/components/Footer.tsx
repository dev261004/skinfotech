import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-[11px] text-slate-500 py-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-1">
        <p>© {new Date().getFullYear()} SK Infotech. All rights reserved.</p>
        <p>Serving Vadodara & nearby areas.</p>
      </div>
    </footer>
  );
};

export default Footer;

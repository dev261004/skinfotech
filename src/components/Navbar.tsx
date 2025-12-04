import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [repairOpen, setRepairOpen] = useState(false); // desktop dropdown
  const navigate = useNavigate();
  const location = useLocation();
  const repairRef = useRef<HTMLDivElement | null>(null);

  const phone = "+91 9904274783";
  const navLinkBase =
    "text-sm font-medium hover:text-cyan-400 transition";
  const navLinkActive = "text-cyan-400";

  // highlight Repair when any of its pages are active
  const isRepairActive = [
    "/laptop-repair",
    "/desktop-repair",
    "/cctv-repair",
  ].includes(location.pathname);

  // close Repair dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        repairRef.current &&
        !repairRef.current.contains(event.target as Node)
      ) {
        setRepairOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo + brand */}
        <button
          className="flex items-center gap-2"
          onClick={() => navigate("/")}
        >
          <img
            src="/sk infotech.png"
            alt="SK Infotech Logo"
            className="h-9 w-9 rounded-full object-contain border border-slate-700 bg-slate-900"
          />
          <div className="flex flex-col leading-tight text-left">
            <span className="font-bold text-lg tracking-wide">
              SK Infotech
            </span>
            <span className="text-[11px] text-slate-400">
              Laptop • Desktop • CCTV | Vadodara
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Services
          </NavLink>

          {/* REPAIR DROPDOWN (DESKTOP) – CLICK TO OPEN/CLOSE */}
          <div className="relative" ref={repairRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // so outside click handler doesn't instantly close it
                setRepairOpen((prev) => !prev);
              }}
              className={`${navLinkBase} relative inline-flex items-center gap-1 pb-0.5 ${
                isRepairActive ? navLinkActive : ""
              }`}
            >
              Repair
              <span
                className={`text-[10px] transition-transform duration-200 ${
                  repairOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▾
              </span>

              {/* Underline shown when open or active */}
              <span
                className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-cyan-400 origin-left transition-transform duration-200 ${
                  repairOpen || isRepairActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>

            {repairOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-slate-900 border border-slate-700 shadow-lg py-2 z-20">
                <NavLink
                  to="/laptop-repair"
                  className={({ isActive }) =>
                    `block px-3 py-1.5 text-sm ${
                      isActive
                        ? "text-cyan-400 bg-slate-800"
                        : "text-slate-200 hover:bg-slate-800/60"
                    }`
                  }
                  onClick={() => setRepairOpen(false)}
                >
                  Laptop Repair
                </NavLink>
                <NavLink
                  to="/desktop-repair"
                  className={({ isActive }) =>
                    `block px-3 py-1.5 text-sm ${
                      isActive
                        ? "text-cyan-400 bg-slate-800"
                        : "text-slate-200 hover:bg-slate-800/60"
                    }`
                  }
                  onClick={() => setRepairOpen(false)}
                >
                  Desktop Repair
                </NavLink>
                <NavLink
                  to="/cctv-repair"
                  className={({ isActive }) =>
                    `block px-3 py-1.5 text-sm ${
                      isActive
                        ? "text-cyan-400 bg-slate-800"
                        : "text-slate-200 hover:bg-slate-800/60"
                    }`
                  }
                  onClick={() => setRepairOpen(false)}
                >
                  CCTV Repair
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Testimonials
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Icons + Call (desktop) */}
        <div className="hidden md:flex items-center gap-3">
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

          <a
            href={`tel:${phone}`}
            className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-semibold px-4 py-1.5 transition whitespace-nowrap"
          >
            Call Now
          </a>
        </div>

        {/* Mobile: hamburger + call */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold px-3 py-1 transition"
          >
            Call
          </a>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition"
            aria-label="Toggle navigation"
          >
            {open ? (
              <span className="text-lg">✕</span>
            ) : (
              <span className="text-lg">☰</span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm text-slate-200">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/laptop-repair", label: "Laptop Repair" },
              { to: "/desktop-repair", label: "Desktop Repair" },
              { to: "/cctv-repair", label: "CCTV Services" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-1 ${navLinkBase} ${
                    isActive ? navLinkActive : "text-slate-200"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

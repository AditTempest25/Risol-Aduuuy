"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "Promo", id: "promo" },
  { name: "Menu", id: "menu" },
  { name: "Kenapa Kami", id: "tentang" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;
      const y = section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, mobileOpen ? 300 : 0);
  };

  const isLight = !scrolled && !mobileOpen; // transparent phase

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">

          {/* ── LOGO ── */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
            {/* <span className="text-xl">🥟</span> */}
            <span className={`font-extrabold text-lg transition ${isLight ? "text-white drop-shadow" : "text-red-600"}`}>
              Risol <span className={isLight ? "text-orange-200" : "text-orange-400"}>Aduuuy</span>
            </span>
          </button>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                  active === link.id
                    ? scrolled ? "text-red-600" : "text-white"
                    : scrolled ? "text-gray-600 hover:text-red-500" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full -z-10 ${scrolled ? "bg-red-50" : "bg-white/15"}`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* ── DESKTOP CTA ── */}
          <a
            href="https://wa.me/6287788394435?text=Halo saya mau order risol"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition duration-300 hover:scale-105 shadow-md ${
              scrolled
                ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-red-200"
                : "bg-white text-red-600 shadow-white/30"
            }`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.25a.75.75 0 00.924.924l5.42-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.356l-.354-.212-3.668.992.993-3.638-.228-.372A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            Order Sekarang
          </a>

          {/* ── HAMBURGER (mobile) ── */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`md:hidden flex flex-col gap-[5px] p-2 rounded-lg transition ${
              scrolled || mobileOpen ? "text-gray-800" : "text-white"
            }`}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-current rounded-full origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-0.5 bg-current rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-current rounded-full origin-center"
            />
          </button>

        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-20"
            style={{ background: "linear-gradient(160deg, #fff7ed 0%, #fff 100%)" }}
          >
            <nav className="flex flex-col px-6 pt-6 gap-1">
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center gap-3 text-left px-4 py-4 rounded-2xl font-bold text-lg transition ${
                    active === link.id
                      ? "bg-red-50 text-red-600"
                      : "text-gray-700 hover:bg-orange-50"
                  }`}
                >
                  {active === link.id && (
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                  )}
                  {link.name}
                </motion.button>
              ))}
            </nav>

            {/* mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="px-6 mt-6"
            >
              <a
                href="https://wa.me/6287788394435?text=Halo saya mau order risol"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-extrabold py-4 rounded-2xl text-base shadow-lg shadow-red-100"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.25a.75.75 0 00.924.924l5.42-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.356l-.354-.212-3.668.992.993-3.638-.228-.372A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
                Order via WhatsApp
              </a>
            </motion.div>

            {/* contact quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 }}
              className="px-6 mt-4 flex gap-3"
            >
              <a
                href="https://www.instagram.com/risol.aduyy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-orange-200 text-orange-600 font-semibold py-3 rounded-2xl text-sm"
              >
                📸 Instagram
              </a>
              <a
                href="https://wa.me/6287788394435"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-orange-200 text-orange-600 font-semibold py-3 rounded-2xl text-sm"
              >
                💬 WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const [pulsing, setPulsing] = useState(false);
  const lastScroll = useRef(0);

  /* show after scrolling 120px, hide when scrolling back to top */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 120);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* pulse the button every 4s to draw attention */
  useEffect(() => {
    const id = setInterval(() => {
      setPulsing(true);
      setTimeout(() => setPulsing(false), 700);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="mobile-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="fixed bottom-0 left-0 w-full md:hidden z-50"
        >
          {/* safe-area padding for iOS home indicator */}
          <div
            className="bg-white/95 backdrop-blur-md border-t border-orange-100 shadow-[0_-8px_30px_rgba(0,0,0,0.1)] px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))]"
          >
            <div className="flex items-center justify-between gap-3 max-w-md mx-auto">

              {/* left — price + tagline */}
              <div className="flex flex-col leading-tight">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-gray-900">4K</span>
                  <span className="text-xs text-gray-400 font-medium">/ risol</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  {["Gurih", "Renyah", "Nagih"].map((t, i) => (
                    <span key={t} className="flex items-center gap-1 text-xs text-gray-500">
                      {t}
                      {i < 2 && <span className="text-orange-300">•</span>}
                    </span>
                  ))}
                </div>

                {/* live green dot */}
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-green-600 font-semibold">Buka & Fast Respon</span>
                </div>
              </div>

              {/* right — CTA button */}
              <a
                href="https://wa.me/6287788394435?text=Halo saya mau order risol"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex-shrink-0"
              >
                {/* pulse ring */}
                <AnimatePresence>
                  {pulsing && (
                    <motion.span
                      key="ring"
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 1.6, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.65, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-green-400 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                <motion.span
                  whileTap={{ scale: 0.94 }}
                  className="relative flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3.5 rounded-full font-extrabold shadow-lg shadow-green-200 text-sm"
                >
                  {/* WhatsApp icon */}
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.25a.75.75 0 00.924.924l5.42-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.356l-.354-.212-3.668.992.993-3.638-.228-.372A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                  Order Sekarang
                </motion.span>
              </a>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
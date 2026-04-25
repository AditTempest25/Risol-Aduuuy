"use client";

import { motion } from "framer-motion";

export default function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 left-0 w-full md:hidden z-50"
    >
      <div className="bg-white/95 backdrop-blur-md border-t shadow-lg p-4 flex items-center justify-between gap-3">

        {/* TEXT */}
        <div>
          <p className="font-bold text-sm text-gray-800">
            Mulai dari 4K
          </p>
          <p className="text-xs text-gray-500">
            Gurih • Renyah • Nagih
          </p>
        </div>

        {/* BUTTON */}
        <a
          href="https://wa.me/6287788394435?text=Halo saya mau order risol"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-5 py-3 rounded-full font-bold shadow-md active:scale-95 transition flex items-center gap-2"
        >
          <span>Order</span>
          <span>→</span>
        </a>

      </div>
    </motion.div>
  );
}
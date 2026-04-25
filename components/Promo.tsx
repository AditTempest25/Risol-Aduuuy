"use client";

import { motion } from "framer-motion";

export default function Promo() {
  return (
    <section
      id="promo"
      className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center"
    >
      <div className="max-w-4xl mx-auto px-4">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold"
        >
          🔥 PROMO SPESIAL HARI INI 🔥
        </motion.h2>

        {/* SUB */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-4 text-lg"
        >
          Beli 5 GRATIS 1 😱 <br />
          Cuma hari ini, jangan sampe kehabisan!
        </motion.p>

        {/* CTA */}
        <motion.a
          href={`https://wa.me/6287788394435?text=${encodeURIComponent(
            "Halo saya mau ambil promo Beli 5 Gratis 1"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          className="inline-block mt-8 bg-white text-red-600 font-bold px-8 py-4 rounded-full shadow-lg"
        >
          Ambil Promo Sekarang 🚀
        </motion.a>

      </div>
    </section>
  );
}
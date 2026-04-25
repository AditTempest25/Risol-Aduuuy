"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-20 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-white text-sm mb-4"
          >
            🔥 Best Seller Sejak 2026
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            Risol Lumer  
            <br />
            Bikin Nagih
          </motion.h1>

          {/* SUBTEXT */}
          <p className="mt-4 text-white text-lg font-medium">
            Isian melimpah, kulit renyah, harga mulai dari 4K aja 🔥
          </p>

          {/* TRUST */}
          <div className="flex items-center gap-4 mt-4 text-white text-sm">
            <span>⭐ 4.9 Rating</span>
            <span>•</span>
            <span>1000+ Terjual</span>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/6287788394435?text=Halo saya mau order risol"
            className="inline-block mt-6 bg-white text-red-600 px-8 py-4 rounded-full font-extrabold text-lg shadow-xl hover:scale-110 transition"
          >
            Order Sekarang 🚀
          </a>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >

          {/* MAIN IMAGE */}
          <Image
            src="/images/hero.png"
            alt="Risol"
            width={500}
            height={500}
            className="mx-auto drop-shadow-2xl"
          />

          {/* FLOATING BADGE */}
          {/* <div className="absolute top-5 left-5 bg-white text-red-600 px-3 py-1 rounded-full text-xs font-bold shadow">
            Best Seller 🔥
          </div> */}

          <div className="absolute bottom-5 right-5 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
            Fresh Hari Ini
          </div>

        </motion.div>

      </div>
    </section>
  );
}
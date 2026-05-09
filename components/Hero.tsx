"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-20 relative overflow-hidden scroll-mt-24"
      style={{
        background: "linear-gradient(135deg, #facc15 0%, #f97316 45%, #ef4444 100%)",
      }}
    >
      {/* ── Decorative blurred blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "#fde68a" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "#b91c1c" }}
      />

      {/* ── Grain overlay for texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10 relative z-10">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 bg-white/25 backdrop-blur-sm border border-white/30 px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-5 shadow-sm"
          >
            🔥 Best Seller Sejak 2026
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] drop-shadow-lg tracking-tight"
          >
            Risol Lumer
            <br />
            <span className="relative inline-block">
              Bikin Nagih
              {/* underline squiggle accent */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 220 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 8 Q55 2 110 8 Q165 14 218 6"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 text-white/90 text-lg font-medium leading-relaxed"
          >
            Isian melimpah, kulit renyah,{" "}
            <span className="font-bold text-white">harga mulai dari 4K aja</span> 🔥
          </motion.p>

          {/* TRUST */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-3 mt-4"
          >
            <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full border border-white/25">
              ⭐ 4.9 Rating
            </span>
            <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full border border-white/25">
              🛒 1000+ Terjual
            </span>
          </motion.div>

          {/* CTA */}
          <motion.a
            href="https://wa.me/6287788394435?text=Halo saya mau order risol"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.55, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-8 bg-white text-red-600 px-9 py-4 rounded-full font-extrabold text-lg shadow-2xl relative overflow-hidden group"
          >
            {/* pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-white/40 group-hover:bg-transparent" />
            <span className="relative">Order Sekarang 🚀</span>
          </motion.a>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex items-center gap-2 text-white/60 text-xs"
          >
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
            Scroll untuk lihat menu
          </motion.div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.65, delay: 0.25, type: "spring", stiffness: 120 }}
          className="relative flex justify-center"
        >
          {/* Glow behind image */}
          <div
            aria-hidden
            className="absolute inset-10 rounded-full blur-2xl opacity-60"
            style={{ background: "rgba(255,255,255,0.35)" }}
          />

          {/* MAIN IMAGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <Image
              src="/images/hero.png"
              alt="Risol lumer yang menggugah selera"
              width={500}
              height={500}
              priority
              className="relative drop-shadow-2xl mx-auto"
            />
          </motion.div>

          {/* BEST SELLER badge (top-left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 14 }}
            className="absolute top-4 left-4 bg-white text-red-600 px-3 py-1.5 rounded-full text-xs font-extrabold shadow-lg flex items-center gap-1"
          >
            🏆 Best Seller
          </motion.div>

          {/* FRESH badge (bottom-right) — bouncy loop */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 300, damping: 12 }}
            className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-extrabold shadow-lg"
          >
            <motion.span
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="inline-block"
            >
              ✅ Fresh Hari Ini
            </motion.span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ── countdown to end of day ── */
function useCountdown() {
  const getSecondsLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);
    return Math.floor((midnight.getTime() - now.getTime()) / 1000);
  };

  const [secs, setSecs] = useState(getSecondsLeft);

  useEffect(() => {
    const id = setInterval(() => setSecs(getSecondsLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const h = String(Math.floor(secs / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return { h, m, s };
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/20 backdrop-blur border border-white/30 rounded-2xl w-16 h-16 flex items-center justify-center text-3xl font-extrabold text-white shadow-inner tabular-nums">
        {value}
      </div>
      <span className="text-white/70 text-xs mt-1.5 font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}

const promos = [
  {
    emoji: "🎁",
    title: "Beli 5 Gratis 1 Minuman",
    desc: "Order 5 risol pilihan kamu, langsung dapat 1 minuman segar GRATIS!",
    highlight: true,
    cta: "Klaim Promo Ini",
    waText: "Halo saya mau klaim promo beli 5 risol gratis 1 minuman",
    badge: "TERPOPULER",
    badgeColor: "bg-yellow-400 text-yellow-900",
  },
  {
    emoji: "👥",
    title: "Paket Bundling 10+",
    desc: "Pesan 10 risol atau lebih? Harga spesial dan bisa request varian bebas.",
    highlight: false,
    cta: "Tanya Harga Bundling",
    waText: "Halo saya mau tanya paket bundling 10 risol lebih",
    badge: "HEMAT",
    badgeColor: "bg-emerald-400 text-emerald-900",
  },
  {
    emoji: "⭐",
    title: "Pelanggan Setia = Diskon",
    desc: "Sudah 3x order? Kabarin kami dan dapatkan kejutan diskon khusus!",
    highlight: false,
    cta: "Klaim Diskon Setia",
    waText: "Halo saya pelanggan setia mau klaim diskon khusus",
    badge: "EKSKLUSIF",
    badgeColor: "bg-pink-400 text-pink-900",
  },
];

export default function Promo() {
  const { h, m, s } = useCountdown();

  return (
    <section
      id="promo"
      className="py-24 scroll-mt-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1c0a00 0%, #7c2d12 40%, #991b1b 100%)",
      }}
    >
      {/* grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* decorative circles */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-25" style={{ background: "#f97316" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "#dc2626" }} />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* ── header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block bg-yellow-400 text-yellow-900 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          >
            Promo Spesial Hari Ini !!
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Jangan Sampai{" "}
            <span className="text-yellow-400 relative inline-block">
              Kehabisan!
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 5 Q50 1 100 5 Q150 9 198 4" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-white/60 max-w-sm mx-auto text-base">
            Promo berlaku hari ini aja. Berakhir dalam:
          </p>

          {/* countdown */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <TimeBlock value={h} label="Jam" />
            <span className="text-white/50 text-3xl font-bold mb-4">:</span>
            <TimeBlock value={m} label="Menit" />
            <span className="text-white/50 text-3xl font-bold mb-4">:</span>
            <TimeBlock value={s} label="Detik" />
          </div>
        </motion.div>

        {/* ── promo cards ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          className="grid md:grid-cols-3 gap-6"
        >
          {promos.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 48 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative rounded-3xl p-6 flex flex-col gap-4 overflow-hidden border ${
                p.highlight
                  ? "bg-gradient-to-br from-yellow-400 to-orange-500 border-yellow-300 shadow-2xl shadow-yellow-900/40"
                  : "bg-white/10 backdrop-blur border-white/15 shadow-lg"
              }`}
            >
              {/* badge */}
              <span className={`absolute top-4 right-4 text-[10px] font-extrabold px-2.5 py-1 rounded-full ${p.badgeColor}`}>
                {p.badge}
              </span>

              {/* icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-md ${p.highlight ? "bg-white/30" : "bg-white/15"}`}>
                {p.emoji}
              </div>

              <div className="flex-1">
                <h3 className={`font-extrabold text-xl leading-snug ${p.highlight ? "text-white" : "text-white"}`}>
                  {p.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${p.highlight ? "text-white/80" : "text-white/60"}`}>
                  {p.desc}
                </p>
              </div>

              <a
                href={`https://wa.me/6287788394435?text=${encodeURIComponent(p.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 font-extrabold text-sm px-5 py-3 rounded-full transition duration-300 ${
                  p.highlight
                    ? "bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                    : "bg-white/20 text-white border border-white/25 hover:bg-white/30"
                }`}
              >
                {p.cta} →
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* ── bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/35 text-xs mt-10"
        >
          *Promo berlaku selama stok masih ada. Tidak dapat digabung dengan promo lain.
        </motion.p>

      </div>
    </section>
  );
}
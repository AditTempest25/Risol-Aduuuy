"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🥇",
    title: "Bahan Premium",
    desc: "Dipilih ketat setiap pagi, nggak pake bahan sembarangan",
    color: "from-yellow-400 to-orange-400",
    shadow: "shadow-yellow-200",
    stat: "100%",
    statLabel: "fresh ingredients",
  },
  {
    icon: "🔥",
    title: "Fresh Every Day",
    desc: "Dibuat tiap hari, nggak ada sisa kemarin — dijamin",
    color: "from-orange-400 to-red-500",
    shadow: "shadow-orange-200",
    stat: "7×",
    statLabel: "seminggu produksi",
  },
  {
    icon: "💸",
    title: "Harga Ramah",
    desc: "Mulai 4K aja, bisa kenyang & happy tanpa boros",
    color: "from-green-400 to-emerald-500",
    shadow: "shadow-green-200",
    stat: "4K",
    statLabel: "harga mulai dari",
  },
  {
    icon: "🤤",
    title: "Bikin Nagih",
    desc: "Satu gigit langsung kangen lagi — terbukti 1000+ pelanggan",
    color: "from-pink-400 to-rose-500",
    shadow: "shadow-pink-200",
    stat: "1K+",
    statLabel: "pelanggan setia",
  },
];

export default function WhyUs() {
  return (
    <section
      id="tentang"
      className="py-24 scroll-mt-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #fff7ed 0%, #fff 50%, #fef2f2 100%)" }}
    >
      {/* decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: "#fb923c" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-15"
        style={{ background: "#f43f5e" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Kenapa Kami?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Bukan Risol{" "}
            <span className="text-red-600 relative inline-block">
              Biasa
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 120 8" fill="none">
                <path d="M2 5 Q30 1 60 5 Q90 9 118 4" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-sm mx-auto text-base">
            Empat alasan kenapa pelanggan kami selalu balik lagi 🤝
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 48 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative bg-white rounded-3xl p-6 shadow-lg ${r.shadow} hover:shadow-xl transition-shadow duration-300 flex flex-col gap-3 border border-orange-50 overflow-hidden`}
            >
              {/* gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${r.color} rounded-t-3xl`} />

              {/* icon bubble */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.color} flex items-center justify-center text-2xl shadow-md`}>
                {r.icon}
              </div>

              <h3 className="font-extrabold text-gray-900 text-lg leading-snug">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{r.desc}</p>

              {/* stat chip */}
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className={`text-2xl font-extrabold bg-gradient-to-r ${r.color} bg-clip-text text-transparent`}>
                  {r.stat}
                </span>
                <span className="text-gray-400 text-xs">{r.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-wrap justify-center gap-4 text-sm text-gray-500"
        >
          {["✅ Halal & Higienis", "📦 Bisa Custom Order", "🚀 Respon < 5 Menit"].map((badge) => (
            <span key={badge} className="bg-white border border-orange-100 shadow-sm px-4 py-2 rounded-full font-medium">
              {badge}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
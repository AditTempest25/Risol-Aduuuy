"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type MenuItem = {
  name: string;
  price: string;
  image: string;
  desc: string;
  best?: boolean;
  spicy?: boolean;
  tag?: string;
};

const menus: MenuItem[] = [
  {
    name: "Smoke Beef Mayo",
    price: "4K",
    image: "/images/menu1.png",
    desc: "Daging smoky, mayo creamy, lumer di mulut",
    best: true,
    tag: "Best Seller 🔥",
  },
  {
    name: "Ragout Ayam Sayur",
    price: "4K",
    image: "/images/menu2.png",
    desc: "Isian ragout klasik, sayur segar, gurih sempurna",
  },
  {
    name: "Smoked Bolognese",
    price: "4K",
    image: "/images/menu3.png",
    desc: "Saus bolognese asap dengan rasa Italia yang kaya",
  },
  {
    name: "Ayam Suwir Pedas",
    price: "4K",
    image: "/images/menu4.png",
    desc: "Ayam suwir berbumbu cabai, bikin ketagihan!",
    spicy: true,
    tag: "Pedas 🌶️",
  },
  {
    name: "Choco Cheese",
    price: "4K",
    image: "/images/menu5.png",
    desc: "Coklat leleh berpadu keju asin yang kontras",
    tag: "Favorit 💛",
  },
  {
    name: "Matcha Cheese",
    price: "4K",
    image: "/images/menu6.png",
    desc: "Matcha Jepang dengan keju premium, unik banget",
    tag: "New ✨",
  },
];

/* ─── tilt-on-hover card ─── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [8, -8]);
  const rotateY = useTransform(x, [-60, 60], [-8, 8]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── single card ─── */
function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [hovered, setHovered] = useState(false);

  const waUrl = `https://wa.me/6287788394435?text=${encodeURIComponent(
    `Halo saya mau order ${item.name}`
  )}`;

  const tagColor = item.best
    ? "bg-red-600 text-white"
    : item.spicy
    ? "bg-orange-500 text-white"
    : item.tag?.startsWith("New")
    ? "bg-emerald-500 text-white"
    : "bg-amber-400 text-amber-900";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 56 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
    >
      <TiltCard>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-orange-200 hover:shadow-2xl transition-shadow duration-300 border border-orange-100 h-full"
        >
          {/* ── image block ── */}
          <div className="relative overflow-hidden bg-orange-50" style={{ height: 210 }}>
            {/* diagonal stripe bg */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #fed7aa 0px, #fed7aa 2px, transparent 2px, transparent 18px)",
              }}
            />

            <motion.div
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>

            {/* tag badge */}
            {item.tag && (
              <span
                className={`absolute top-3 left-3 text-xs font-extrabold px-3 py-1 rounded-full shadow-md ${tagColor}`}
              >
                {item.tag}
              </span>
            )}

            {/* price pill — overlaps image/card border */}
            <div className="absolute -bottom-4 right-4 bg-red-600 text-white font-extrabold text-xl px-4 py-1.5 rounded-full shadow-lg z-10 leading-none">
              {item.price}
            </div>
          </div>

          {/* ── text block ── */}
          <div className="flex flex-col flex-1 px-5 pt-7 pb-5 gap-1">
            <h3 className="text-gray-900 font-extrabold text-lg leading-tight">{item.name}</h3>
            <p className="text-gray-500 text-sm leading-snug flex-1">{item.desc}</p>

            {/* CTA row */}
            <motion.div
              animate={{ gap: hovered ? "10px" : "6px" }}
              className="flex items-center mt-4"
              style={{ gap: 6 }}
            >
              <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                💬 Order via WA
              </span>
              <motion.span
                animate={{ x: hovered ? 4 : 0 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-green-500 text-sm font-bold"
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </a>
      </TiltCard>
    </motion.div>
  );
}

/* ─── section ─── */
export default function Menu() {
  return (
    <section
      id="menu"
      className="py-24 scroll-mt-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #fff7ed 0%, #ffffff 60%, #fff7ed 100%)",
      }}
    >
      {/* large faint circle decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "#fdba74" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: "#fca5a5" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          {/* eyebrow */}
          <span className="inline-block bg-red-100 text-red-600 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Menu Kami
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Pilih{" "}
            <span className="relative inline-block text-red-600">
              Favoritmu
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 180 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5 Q45 1 90 5 Q135 9 178 4"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            
          </h2>

          <p className="mt-4 text-gray-500 text-base max-w-sm mx-auto">
            Semua isian lumer, kulit renyah. Klik kartu untuk order langsung via WhatsApp 
          </p>

          {/* live indicator */}
          <div className="inline-flex items-center gap-2 mt-5 bg-green-50 border border-green-200 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Buka & Fast Respon Sekarang
          </div>
        </motion.div>

        {/* ── GRID ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-7"
        >
          {menus.map((item, i) => (
            <MenuCard key={i} item={item} index={i} />
          ))}
        </motion.div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Mau pesan banyak? Hubungi langsung yuk!</p>
          <a
            href="https://wa.me/6287788394435?text=Halo saya mau order risol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-extrabold px-8 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-red-300 hover:shadow-xl transition duration-300 text-base"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.25a.75.75 0 00.924.924l5.42-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.356l-.354-.212-3.668.992.993-3.638-.228-.372A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            Chat WhatsApp Sekarang
          </a>
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const menuItems = [
  "Smoke Beef Mayo",
  "Ragout Ayam Sayur",
  "Smoked Bolognese",
  "Ayam Suwir Pedas",
  "Choco Cheese",
  "Matcha Cheese",
];

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Promo", href: "#promo" },
  { label: "Menu", href: "#menu" },
  { label: "Kenapa Kami", href: "#tentang" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #7c2d12 0%, #991b1b 60%, #7f1d1d 100%)" }}>

      {/* grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />
      {/* blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: "#f97316" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-15" style={{ background: "#dc2626" }} />

      {/* ── top CTA banner ── */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-extrabold text-lg">Siap order sekarang? 🚀</p>
            <p className="text-white/60 text-sm mt-0.5">Fast respon, fresh hari ini, mulai 4K aja.</p>
          </div>
          <a
            href="https://wa.me/6287788394435?text=Halo saya mau order risol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-white text-red-700 font-extrabold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300 text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.25a.75.75 0 00.924.924l5.42-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.356l-.354-.212-3.668.992.993-3.638-.228-.372A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            Chat WA Sekarang
          </a>
        </div>
      </div>

      {/* ── main grid ── */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">

        {/* BRAND */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            {/* <span className="text-2xl">🥟</span> */}
            <h2 className="text-xl font-extrabold text-white leading-tight">
              Risol<br />
              <span className="text-orange-300">Aduuuy Cihuyy</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Jajanan viral dengan rasa gurih, renyah, dan bikin nagih. Dibuat fresh setiap hari.
          </p>

          {/* social */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://www.instagram.com/risol.aduyy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://wa.me/6287788394435"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/20 transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.25a.75.75 0 00.924.924l5.42-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.356l-.354-.212-3.668.992.993-3.638-.228-.372A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* NAV LINKS */}
        <div>
          <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-4 opacity-60">Navigasi</h3>
          <ul className="space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/70 hover:text-white text-sm font-medium transition flex items-center gap-2 group"
                >
                  <span className="w-4 h-px bg-white/30 group-hover:w-6 group-hover:bg-orange-300 transition-all duration-300" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* MENU LIST */}
        <div>
          <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-4 opacity-60">Menu</h3>
          <ul className="space-y-2.5">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`https://wa.me/6287788394435?text=${encodeURIComponent(`Halo saya mau order ${item}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-orange-300 text-sm font-medium transition flex items-center gap-2 group"
                >
                  <span className="w-4 h-px bg-white/30 group-hover:w-6 group-hover:bg-orange-300 transition-all duration-300" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-4 opacity-60">Kontak</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">📍</span>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-0.5">Lokasi</p>
                <p className="text-white/80 text-sm leading-snug">Universitas BSI<br />Kampus Kramat 98</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">📲</span>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-0.5">WhatsApp</p>
                <a
                  href="https://wa.me/6287788394435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-orange-300 text-sm font-medium transition"
                >
                  0877-8839-4435
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">📸</span>
              <div>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-0.5">Instagram</p>
                <a
                  href="https://www.instagram.com/risol.aduyy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-orange-300 text-sm font-medium transition"
                >
                  @risol.aduyy
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* ── bottom bar ── */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <span>© 2026 Risol Aduuuy Cihuyy • All Rights Reserved</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Buka setiap hari</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
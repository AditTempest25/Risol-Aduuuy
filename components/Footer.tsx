export default function Footer() {
  return (
    <footer className="bg-red-600 text-white border-t-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold">
            Risol Aduuuy Cihuyy
          </h2>
          <p className="mt-3 text-sm text-orange-100">
            Jajanan viral dengan rasa gurih, renyah, dan bikin nagih.
          </p>
        </div>

        {/* MENU LINK */}
        <div>
          <h3 className="font-bold text-lg mb-3">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>Smoke Beef Mayo</li>
            <li>Ragout Ayam</li>
            <li>Ayam Suwir Pedas</li>
            <li>Choco Cheese</li>
            <li>Smoked Bolognese</li>
            <li>Matcha</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold text-lg mb-3">Kontak</h3>

          <p className="text-sm">📍 Lokasi: Universitas BSI Kampus Kramat 98</p>

          <a
            href="https://wa.me/6287788394435"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-sm hover:underline"
          >
            📲 WhatsApp: 0877-8839-4435
          </a>

          <a
            href="https://www.instagram.com/risol.aduyy/?utm_source=ig_web_button_share_sheet"
            className="block mt-2 text-sm hover:underline"
          >
            📸 Instagram: @risol.aduyy
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="bg-red-700 text-center py-4 text-sm">
        © 2026 Risol Aduuuy Cihuyy • All Rights Reserved
      </div>
    </footer>
  );
}
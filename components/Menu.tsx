"use client";

import { motion } from "framer-motion";

type MenuItem = {
  name: string;
  price: string;
  image: string;
  best?: boolean;
  spicy?: boolean;
};

const menus: MenuItem[] = [
  {
    name: "Smoke Beef Mayo",
    price: "4K",
    image: "/images/menu1.png",
    best: true,
  },
  {
    name: "Ragout Ayam Sayur",
    price: "4K",
    image: "/images/menu2.png",
  },
  {
    name: "Smoked Bolognese",
    price: "4K",
    image: "/images/menu3.png",
  },
  {
    name: "Ayam Suwir Pedas",
    price: "4K",
    image: "/images/menu4.png",
    spicy: true,
  },
  {
    name: "Choco Cheese",
    price: "4K",
    image: "/images/menu5.png",
  },
  {
    name: "Matcha Cheese",
    price: "4K",
    image: "/images/menu6.png",
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-b from-orange-100 to-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-red-600">
          Menu Favorit 🔥
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Pesan Sekarang (Fast Respon) ⚡
        </p>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {menus.map((item, index) => (
            <motion.a
              key={index}
              href={`https://wa.me/6287788394435?text=${encodeURIComponent(
                `Halo saya mau order ${item.name}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl hover:-translate-y-2 active:scale-95 hover:shadow-orange-200 transition duration-300 border cursor-pointer"
            >

              {/* BADGE */}
              {item.best && (
                <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  Best Seller 🔥
                </span>
              )}

              {item.spicy && (
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  Pedas 🌶️
                </span>
              )}

              {/* IMAGE */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-44 object-cover mb-4 transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* NAME */}
              <h3 className="text-lg font-bold text-gray-800">
                {item.name}
              </h3>

              {/* PRICE */}
              <p className="mt-2 text-red-600 font-extrabold text-2xl">
                {item.price}
              </p>

              {/* CTA TEXT */}
              <p className="text-sm text-gray-500 mt-1">
                Klik untuk order via WhatsApp
              </p>

            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Andi",
    text: "Isinya full banget, gak pelit 🔥",
  },
  {
    name: "Sari",
    text: "Renyah parah, nagih 😭",
  },
  {
    name: "Budi",
    text: "Harga 4K tapi rasa bintang 5!",
  },
];

export default function Testimoni() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-red-600">
          Kata Mereka 💬
        </h2>

        <p className="text-gray-600 mt-2">
          Udah banyak yang nyobain, sekarang giliran lo 🤤
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-orange-50 p-6 rounded-xl shadow"
            >
              <p className="text-gray-700 italic">
                “{item.text}”
              </p>

              <p className="mt-4 font-bold text-red-500">
                - {item.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
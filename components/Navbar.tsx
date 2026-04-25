"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", id: "home" },
  { name: "Menu", id: "menu" },
  { name: "Tentang", id: "tentang" },
  // { name: "Testimoni", id: "testimoni" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // DETECT SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL FUNCTION
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -100;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="font-extrabold text-red-600 text-lg">
          Risol Aduuuy
        </h1>

        {/* MENU */}
        <div className="hidden md:flex gap-6 font-medium">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`relative transition ${
                active === link.id
                  ? "text-red-600 font-bold"
                  : "text-gray-700 hover:text-red-500"
              }`}
            >
              {link.name}

              {/* UNDERLINE ANIMASI */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <a
          href="https://wa.me/6287788394435"
          className="hidden md:block bg-red-500 text-white px-5 py-2 rounded-full font-bold hover:scale-105 transition"
        >
          Order
        </a>

      </div>
    </div>
  );
}
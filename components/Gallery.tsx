export default function Gallery() {
  return (
    <section className="py-16 bg-white text-center scroll-mt-24">

      <h2 className="text-3xl font-bold text-red-600">
        Liat Sendiri Kenikmatannya
      </h2>

      <div className="grid md:grid-cols-6 gap-4 mt-10 max-w-6xl mx-auto px-4">

        <img src="/images/menu1.png" className="rounded-xl" />
        <img src="/images/menu2.png" className="rounded-xl" />
        <img src="/images/menu3.png" className="rounded-xl" />
        <img src="/images/menu4.png" className="rounded-xl" />
        <img src="/images/menu5.png" className="rounded-xl" />
        <img src="/images/menu6.png" className="rounded-xl" />

      </div>

    </section>
  );
}
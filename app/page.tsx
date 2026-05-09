import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import WhyUs from "@/components/WhyUs";
// import Gallery from "@/components/Gallery";
// import Testimoni from "@/components/Testimoni";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Promo from "@/components/Promo";

export default function Home() {
  return (
    <main>
      <div >              
        <Navbar />
        <Hero />
        <Promo />
        <Menu />
        <WhyUs />
        {/* <Gallery /> */}
        {/* <Testimoni /> */}
        <Footer />
        <MobileCTA />
      </div>
    </main>
  );
}
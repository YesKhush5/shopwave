import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Cards from "@/app/components/cards";
import Testimonials from "@/app/components/testimonials";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-scroll space-y-36">
        <Navbar />
        <Hero />
        <Cards />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

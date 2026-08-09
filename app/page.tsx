import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import WhyFixLocal from "@/components/sections/WhyFixLocal";
import Cases from "@/components/sections/Cases";
import Process from "@/components/sections/Process";
import Value from "@/components/sections/Value";
import Standards from "@/components/sections/Standards";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <WhyFixLocal />
      <Cases />
      <Process />
      <Value />
      <Standards />
      <Contact />
      <Footer />
    </main>
  );
}
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import WhyFixLocal from "@/components/sections/WhyFixLocal";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <WhyFixLocal />
      <Services />
    </main>
  );
}
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import WhyFixLocal from "@/components/sections/WhyFixLocal";
import Cases from "@/components/sections/Cases";
import Process from "@/components/sections/Process";
import Value from "@/components/sections/Value";

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <WhyFixLocal />
      <Cases />
      <Process />
      <Value />
    </main>
  );
}
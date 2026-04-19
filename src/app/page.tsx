import { Hero } from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import About from "@/components/About";
import { BentoGrid } from "@/components/BentoGrid";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <Navigation />
      <Hero />
      <WorkGrid />
      <Stats />
      <About />
      <BentoGrid />
      <TechStack />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

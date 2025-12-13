import { Hero } from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import { BentoGrid } from "@/components/BentoGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-background min-h-screen">
      <Hero />
      <WorkGrid />
      <BentoGrid />
      <Footer />
    </div>
  );
}

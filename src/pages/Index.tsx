import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import CuriosityTrust from "@/components/CuriosityTrust";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <Benefits />
      <CuriosityTrust />
      <FinalCTA />
    </div>
  );
};

export default Index;

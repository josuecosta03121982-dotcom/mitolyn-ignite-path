import { Sparkles, Zap, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import mitolynSingle from "@/assets/mitolyn-single.png";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Supports Mitochondrial Function",
      description: "Targets your cellular powerhouses for optimized energy production at the source"
    },
    {
      icon: Rocket,
      title: "Improves Energy Production",
      description: "Experience sustained vitality that lasts throughout your entire day"
    },
    {
      icon: Shield,
      title: "Scientifically Backed Ingredients",
      description: "Formulated with clinically researched compounds for maximum effectiveness"
    },
    {
      icon: Sparkles,
      title: "Fast Absorption & Powerful Effects",
      description: "Advanced delivery system ensures rapid uptake and noticeable results"
    }
  ];

  const handleCTAClick = () => {
    window.open("https://truebalancelife.store/mitolyn", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                How MITOLYN 
                <span className="text-mitolyn-yellow"> Transforms </span>
                Your Energy
              </h2>
              <p className="text-xl text-white/90">
                Discover the science-backed approach to cellular energy optimization
              </p>
            </div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-mitolyn-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleCTAClick}
              className="text-lg px-8 py-6 h-auto"
            >
              Go to the Official Page to Learn More About MITOLYN
            </Button>
          </div>

          {/* Product Image */}
          <div className="flex justify-center">
            <div className="relative cursor-pointer group" onClick={handleCTAClick}>
              <img 
                src={mitolynSingle} 
                alt="MITOLYN Single Bottle - Weight Loss Support Supplement - Click to order now" 
                className="w-full max-w-md object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-mitolyn-pink/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-mitolyn-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
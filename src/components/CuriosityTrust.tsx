import { Star, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const CuriosityTrust = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "People Switching to MITOLYN"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Customer Rating"
    },
    {
      icon: Award,
      number: "Clinical",
      label: "Grade Ingredients"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Report Better Energy"
    }
  ];

  const handleCTAClick = () => {
    window.open("https://truebalancelife.store/mitolyn", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why Are Thousands 
              <span className="text-mitolyn-purple"> Switching </span>
              to MITOLYN?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Behind MITOLYN's breakthrough formula lies cutting-edge mitochondrial science. 
              This isn't just another supplement—it's a precisely engineered solution that 
              targets your cellular energy production at its core.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-6 bg-card rounded-2xl shadow-card border border-border/50 hover:border-mitolyn-blue/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-mitolyn-purple">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Expert Formulation */}
          <div className="bg-gradient-section p-12 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Expert-Formulated. Clinically-Inspired. 
              <span className="text-mitolyn-yellow">Results-Driven.</span>
            </h3>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Created by leading nutritional scientists using the latest research in 
              mitochondrial optimization and cellular energy metabolism.
            </p>
            
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleCTAClick}
              className="text-lg px-10 py-6 h-auto mt-8"
            >
              Access the Official MITOLYN Store Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuriosityTrust;
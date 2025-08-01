import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  const handleCTAClick = () => {
    window.open("https://truebalancelife.store/mitolynofficial", "_blank");
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <Sparkles className="w-16 h-16 text-mitolyn-yellow animate-pulse" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Ready to Unlock Your 
              <span className="text-mitolyn-yellow"> Metabolic Power?</span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join thousands who've discovered the MITOLYN difference. 
              Your cellular energy transformation starts with one click.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleCTAClick}
              className="text-xl px-12 py-8 h-auto group"
            >
              Click to Visit the Official MITOLYN Store
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-white/80 space-y-2">
              <p className="text-sm">✅ Secure checkout on official store</p>
              <p className="text-sm">✅ Satisfaction guarantee included</p>
              <p className="text-sm">✅ Fast, discreet shipping</p>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <p className="text-white font-semibold text-lg">
              🔥 Limited Time: Don't miss your chance to experience MITOLYN
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
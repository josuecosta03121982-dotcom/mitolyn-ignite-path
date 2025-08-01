import { Button } from "@/components/ui/button";
import mitolynBottles from "@/assets/mitolyn-bottles.png";

const Hero = () => {
  const handleCTAClick = () => {
    window.open("https://truebalancelife.store/mitolyn", "_blank");
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Recharge Your Body from the 
                <span className="text-mitolyn-yellow"> Inside Out</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Discover the MITOLYN breakthrough that's turning heads in the wellness world
              </p>
            </div>
            
            <div className="space-y-6">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleCTAClick}
                className="text-lg px-8 py-6 h-auto"
              >
                Click to Visit the Official MITOLYN Store
              </Button>
              
              <p className="text-white/80 text-sm">
                ⚡ Scientifically backed mitochondrial support formula
              </p>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative cursor-pointer group" onClick={handleCTAClick}>
              <img 
                src={mitolynBottles} 
                alt="MITOLYN Weight Loss Support Supplement Bottles - Click to learn more" 
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-mitolyn-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
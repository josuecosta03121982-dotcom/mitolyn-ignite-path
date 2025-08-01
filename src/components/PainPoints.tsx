import { Battery, Clock, Zap, Heart } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: Battery,
      title: "Low Energy",
      description: "Struggling with chronic fatigue that leaves you drained throughout the day"
    },
    {
      icon: Clock,
      title: "Early Aging",
      description: "Feeling older than your years with declining vitality and recovery"
    },
    {
      icon: Zap,
      title: "Poor Cellular Performance",
      description: "Your body's energy factories aren't working at their peak potential"
    },
    {
      icon: Heart,
      title: "Lack of Daily Vitality",
      description: "Missing that spark and enthusiasm that makes life truly enjoyable"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Are You Tired of Feeling 
            <span className="text-mitolyn-pink"> Tired?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Millions struggle with these energy-draining challenges every single day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card border border-border/50 hover:border-mitolyn-pink/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
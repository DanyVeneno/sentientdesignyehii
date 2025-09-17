import { Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/AI_neural_network_visualization_14d78542.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Wash */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Neural Network Visualization" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Brain className="w-12 h-12 text-accent mr-4" />
          <Sparkles className="w-8 h-8 text-chart-3" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          <span className="bg-gradient-to-r from-accent to-chart-3 bg-clip-text text-transparent">
            Sentient Design
          </span>
          <br />
          <span className="text-white/90 text-3xl md:text-5xl">
            La Nueva Frontera de la Experiencia de Usuario
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Más allá de las interfaces estáticas: descubre cómo la inteligencia artificial 
          se convierte en un <span className="text-accent font-semibold">material de diseño fundamental</span> 
          para crear experiencias radicalmente nuevas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent/90 hover:bg-accent text-white font-semibold px-8 py-3 text-lg backdrop-blur-sm"
            onClick={() => scrollToSection('paradigma')}
            data-testid="button-explore"
          >
            Explorar el Paradigma
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg"
            onClick={() => scrollToSection('cualidades')}
            data-testid="button-learn-more"
          >
            Ver Cualidades
          </Button>
        </div>
      </div>
    </section>
  );
}
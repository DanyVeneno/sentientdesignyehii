import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ParadigmaSection from "@/components/ParadigmaSection";
import CualidadesSection from "@/components/CualidadesSection";
import PatronesSection from "@/components/PatronesSection";
import DisenoSection from "@/components/DisenoSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <ParadigmaSection />
        <CualidadesSection />
        <PatronesSection />
        <DisenoSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground mb-4">
            Basado en el artículo "Sentient Design: La Nueva Frontera de la Experiencia de Usuario"
          </p>
          <p className="text-sm text-muted-foreground">
            Desarrollado como una exploración interactiva de los conceptos fundamentales 
            del diseño inteligente y la IA como material de creación.
          </p>
        </div>
      </footer>
    </div>
  );
}
import { ArrowRight, Lightbulb, Cpu, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ParadigmaSection() {
  const cambios = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      de: "Ver IA como herramienta",
      hacia: "Verla como material de creación",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      de: "Interfaces estáticas",
      hacia: "Interfaces inteligentes y adaptables",
      color: "bg-chart-3/10 text-chart-3"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      de: "Eficiencia de procesos",
      hacia: "Experiencias transformadoras",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="paradigma" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 text-sm font-medium" variant="outline">
            El Cambio de Paradigma
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            La IA como Material de Diseño
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            El potencial más revolucionario de la IA no reside en la eficiencia de los procesos internos, 
            sino en la <span className="text-foreground font-semibold">creación de experiencias de usuario 
            radicalmente nuevas</span> y transformadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cambios.map((cambio, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 ${cambio.color}`}>
                  {cambio.icon}
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                    De:
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {cambio.de}
                  </p>
                  
                  <div className="flex items-center my-4">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                  
                  <div className="text-sm text-foreground font-medium uppercase tracking-wide">
                    Hacia:
                  </div>
                  <p className="text-lg font-semibold">
                    {cambio.hacia}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-l-primary">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Concepto Clave</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La IA tiene una <span className="font-mono bg-muted px-2 py-1 rounded text-foreground">"veta" propia</span>: 
              Al igual que un escultor debe entender la veta de la madera, los diseñadores deben 
              comprender la naturaleza probabilística y las tendencias inherentes de la IA. 
              Entender cómo "quiere" y "no quiere" ser utilizada es clave para trabajar 
              <span className="font-semibold text-foreground"> con ella y no en su contra</span>.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
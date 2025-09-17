import { useState } from "react";
import { Wand2, PenTool, Layers, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import pinochoImage from "@assets/generated_images/Pinocho_pattern_transformation_7681f97e.png";
import canvasImage from "@assets/generated_images/Intelligent_Canvas_interface_273016e5.png";
import bespokeImage from "@assets/generated_images/Bespoke_UI_generation_1f38c66d.png";

export default function PatronesSection() {
  const [selectedPatron, setSelectedPatron] = useState(0);

  const patrones = [
    {
      titulo: "Patrón Pinocho",
      subtitulo: "Dar Vida a las Ideas",
      descripcion: "Transforma una idea de baja fidelidad en una realidad funcional de alta fidelidad",
      detalle: "La IA actúa como un colaborador que toma un boceto o una instrucción y lo convierte en un prototipo vivo. Es una manifestación directa de la cualidad Colaborativa.",
      ejemplo: "Josh Clark dibujó un boceto simple en TL Draw. Con la función 'Make Real', la IA no solo generó el código para construir la interfaz visualmente, sino que infirió qué debía hacer la aplicación y cómo debía comportarse.",
      nota: "La generación de componentes que vemos aquí no está haciendo el verdadero trabajo de los diseñadores. El diseño estratégico reside en el qué y el porqué, no solo en el ensamblaje final.",
      icon: <Wand2 className="w-6 h-6" />,
      image: pinochoImage,
      color: "bg-accent/10 text-accent"
    },
    {
      titulo: "Lienzo Inteligente",
      subtitulo: "Intelligent Canvas",
      descripcion: "Una superficie de interacción que se transforma para convertirse en la herramienta exacta que necesitas",
      detalle: "Es la máxima expresión de una interfaz Radicalmente Adaptable. Se amolda a la tarea en lugar de imponer una estructura rígida.",
      ejemplo: "La función 'Math Notes' de la calculadora del iPad. Los usuarios pueden escribir ecuaciones a mano alzada, y la interfaz las interpreta como variables y funciones interactivas. La pantalla se convierte en una hoja de cálculo personalizada y desechable.",
      nota: "El lienzo se convierte en exactamente lo que necesitas en ese momento preciso, creado a la medida de la necesidad del momento.",
      icon: <PenTool className="w-6 h-6" />,
      image: canvasImage,
      color: "bg-chart-3/10 text-chart-3"
    },
    {
      titulo: "UI a Medida",
      subtitulo: "Bespoke UI",
      descripcion: "El sistema genera una interfaz de usuario completamente nueva en tiempo real para resolver una tarea específica",
      detalle: "Combina la cualidad de ser Consciente del Contexto con la Adaptabilidad Radical. No se limita a formatos preestablecidos.",
      ejemplo: "Google Gemini al pedirle ideas para una fiesta. En lugar de una lista de texto, Gemini abandona el formato de chat para generar una interfaz gráfica a medida que permite explorar temas y actividades de forma visual e interactiva.",
      nota: "Esta nueva UI ofrece una experiencia mucho más rica y adecuada para la tarea que el formato de conversación tradicional.",
      icon: <Layers className="w-6 h-6" />,
      image: bespokeImage,
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="patrones" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 text-sm font-medium" variant="outline">
            Patrones de Diseño en Acción
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            De lo Abstracto a lo Concreto
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Sentient Design cobra vida a través de patrones de experiencia que aprovechan 
            las cualidades de la IA como material. Estos son tres patrones clave que ilustran 
            cómo estas ideas se traducen en <span className="text-foreground font-semibold">
            interacciones funcionales y alucinantes</span>.
          </p>
        </div>

        {/* Navegación de Patrones */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {patrones.map((patron, index) => (
            <Button
              key={index}
              variant={selectedPatron === index ? "default" : "outline"}
              onClick={() => setSelectedPatron(index)}
              className="flex items-center space-x-2"
              data-testid={`patron-${index}`}
            >
              {patron.icon}
              <span>{patron.titulo}</span>
            </Button>
          ))}
        </div>

        {/* Contenido del Patrón Seleccionado */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden hover-elevate transition-all duration-300">
              <div className="aspect-video">
                <img 
                  src={patrones[selectedPatron].image} 
                  alt={patrones[selectedPatron].titulo}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Contenido */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${patrones[selectedPatron].color}`}>
              {patrones[selectedPatron].icon}
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-2">
                {patrones[selectedPatron].titulo}
              </h3>
              <p className="text-xl text-accent font-medium mb-4">
                {patrones[selectedPatron].subtitulo}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {patrones[selectedPatron].descripcion}
              </p>
            </div>

            <Card className="bg-primary/5 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-primary">Cómo Funciona</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {patrones[selectedPatron].detalle}
                </p>
                
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <h5 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                    Ejemplo Real
                  </h5>
                  <p className="text-foreground leading-relaxed mb-3">
                    {patrones[selectedPatron].ejemplo}
                  </p>
                  
                  <div className="flex items-start space-x-2 pt-3 border-t border-border/50">
                    <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground italic">
                      {patrones[selectedPatron].nota}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
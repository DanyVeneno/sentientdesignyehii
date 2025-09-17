import { useState } from "react";
import { Eye, Shuffle, Users, Mic, Target, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CualidadesSection() {
  const [selectedCualidad, setSelectedCualidad] = useState(0);

  const cualidades = [
    {
      id: 1,
      titulo: "Consciente del Contexto",
      descripcion: "La interfaz es capaz de discernir lo que el usuario intenta lograr",
      detalle: "No solo responde a clics directos, sino que comprende el contexto más amplio de la tarea y se adapta proactivamente para ayudar.",
      icon: <Eye className="w-6 h-6" />,
      color: "bg-accent/10 text-accent border-accent/20",
      ejemplo: "Una app de notas que detecta cuando estás escribiendo una lista y automáticamente sugiere formato de bullet points."
    },
    {
      id: 2,
      titulo: "Radicalmente Adaptable",
      descripcion: "El contenido y estructura cambian en tiempo real para el usuario",
      detalle: "No se limita a un diseño único, sino que se transforma para ofrecer la mejor experiencia posible en cada situación.",
      icon: <Shuffle className="w-6 h-6" />,
      color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
      ejemplo: "Un dashboard que reorganiza sus widgets automáticamente según las tareas más relevantes del día."
    },
    {
      id: 3,
      titulo: "Colaborativa",
      descripcion: "La interfaz se convierte en un colaborador activo",
      detalle: "El usuario y la IA pueden trabajar juntos directamente en el 'lienzo' de la aplicación para lograr un objetivo común.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-primary/10 text-primary border-primary/20",
      ejemplo: "Un editor de diseño donde puedes describir lo que quieres y la IA lo dibuja mientras tú lo refinas en tiempo real."
    },
    {
      id: 4,
      titulo: "Multimodal",
      descripcion: "Interacción natural a través de múltiples canales",
      detalle: "El usuario puede interactuar de la forma que le resulte más natural, pasando fluidamente entre texto, voz, imágenes y gestos.",
      icon: <Mic className="w-6 h-6" />,
      color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
      ejemplo: "Una app de productividad donde puedes agregar tareas hablando, dibujando o escribiendo, y todo se integra perfectamente."
    },
    {
      id: 5,
      titulo: "Diferencial",
      descripcion: "Sugiere y guía respetando la autonomía del usuario",
      detalle: "Como la IA opera con probabilidades, una interfaz Sentient ofrece posibilidades sin imponer decisiones.",
      icon: <Target className="w-6 h-6" />,
      color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
      ejemplo: "Un asistente de escritura que sugiere múltiples direcciones para tu historia sin forzar ninguna decisión."
    }
  ];

  return (
    <section id="cualidades" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 text-sm font-medium" variant="outline">
            Características Distintivas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Las 5 Cualidades de una Interfaz 
            <span className="bg-gradient-to-r from-accent to-chart-3 bg-clip-text text-transparent">
              "Sentient"
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Cuando la inteligencia artificial se utiliza como material de diseño, 
            las interfaces adquieren cualidades fundamentalmente nuevas y poderosas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Lista de Cualidades */}
          <div className="space-y-4">
            {cualidades.map((cualidad, index) => (
              <Card 
                key={cualidad.id}
                className={`cursor-pointer transition-all duration-300 hover-elevate ${
                  selectedCualidad === index 
                    ? 'ring-2 ring-accent/50 bg-accent/5' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => setSelectedCualidad(index)}
                data-testid={`cualidad-${cualidad.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${cualidad.color}`}>
                      {cualidad.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{cualidad.titulo}</h3>
                      <p className="text-muted-foreground">{cualidad.descripcion}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      selectedCualidad === index ? 'rotate-90 text-accent' : 'text-muted-foreground'
                    }`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detalle de la Cualidad Seleccionada */}
          <div className="lg:sticky lg:top-24">
            <Card className="bg-gradient-to-br from-accent/5 to-chart-3/5 border-l-4 border-l-accent">
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${cualidades[selectedCualidad].color}`}>
                  {cualidades[selectedCualidad].icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {cualidades[selectedCualidad].titulo}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {cualidades[selectedCualidad].detalle}
                </p>
                
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                    Ejemplo en Acción
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {cualidades[selectedCualidad].ejemplo}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
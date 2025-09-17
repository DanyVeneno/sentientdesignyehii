import { Compass, Users, FileText, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DisenoSection() {
  const transformaciones = [
    {
      antes: "Arquitecto de interfaces estáticas",
      despues: "Director Creativo de sistemas inteligentes",
      icon: <Compass className="w-6 h-6" />,
      color: "bg-primary/10 text-primary"
    },
    {
      antes: "Especificar un resultado único",
      despues: "Definir reglas y límites del sistema",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-accent/10 text-accent"
    },
    {
      antes: "Crear interfaces predecibles",
      despues: "Guiar comportamiento de IA",
      icon: <Users className="w-6 h-6" />,
      color: "bg-chart-3/10 text-chart-3"
    }
  ];

  return (
    <section id="diseno" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2 text-sm font-medium" variant="outline">
            Evolución del Rol
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            El Nuevo Rol del Diseñador
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            De <span className="text-foreground font-semibold">Arquitecto a Director Creativo</span>. 
            Cuando trabajas con un material inherentemente generativo y probabilístico, 
            tu trabajo ya no puede ser especificar un único resultado estático.
          </p>
        </div>

        {/* Transformaciones */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {transformaciones.map((transformacion, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300">
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 ${transformacion.color}`}>
                  {transformacion.icon}
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
                    Antes:
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {transformacion.antes}
                  </p>
                  
                  <div className="flex items-center my-4">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                  
                  <div className="text-sm text-foreground font-medium uppercase tracking-wide">
                    Ahora:
                  </div>
                  <p className="text-lg font-semibold">
                    {transformacion.despues}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nuevo Proceso */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-chart-3/20">
              <Lightbulb className="w-8 h-8 text-accent" />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-4">
                El Director Creativo para la IA
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Tu trabajo consiste en guiar el comportamiento del sistema, establecer 
                los parámetros de sus posibilidades y definir su "personalidad". 
                Te enfocas en crear el marco dentro del cual la IA y el usuario pueden colaborar.
              </p>
            </div>

            <Card className="bg-gradient-to-r from-accent/5 to-chart-3/5 border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-accent">Enfoque de Creatividad</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Enfocar tu creatividad no solo en el <strong className="text-foreground">"qué"</strong> diseñas, 
                  sino en el <strong className="text-foreground">"cómo"</strong> habilitas al sistema 
                  para que diseñe junto al usuario.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">El Prompt como Artefacto</h4>
                  <p className="text-muted-foreground">
                    En este nuevo proceso, el prompt se convierte en un artefacto de diseño central
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                    <h5 className="font-semibold mb-2 text-sm text-primary">Documento de Diseño</h5>
                    <p className="text-sm text-muted-foreground">Define la intención del sistema</p>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                    <h5 className="font-semibold mb-2 text-sm text-accent">Documentación Técnica</h5>
                    <p className="text-sm text-muted-foreground">Guía el comportamiento del sistema</p>
                  </div>
                  
                  <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                    <h5 className="font-semibold mb-2 text-sm text-chart-3">Lenguaje de Programación</h5>
                    <p className="text-sm text-muted-foreground">En lenguaje natural y conversacional</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mensaje Final */}
        <Card className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              "Si nosotros no decidimos para qué es esta tecnología, ella lo decidirá por nosotros"
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              La tecnología se está moldeando en este preciso momento. Es una arcilla húmeda esperando forma. 
              Este es el momento de que los diseñadores se involucren activamente, inserten sus valores 
              en esta tecnología y ayuden a dirigirla en la dirección correcta.
            </p>
            <div className="mt-6">
              <Badge className="px-4 py-2 text-sm font-medium bg-accent/20 text-accent border-accent/30">
                El futuro no debería ser autodirigido. Ustedes son necesarios ahora más que nunca.
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dra. Letícia",
      description: "Fonoaudióloga - CRFa 1-2356",
      text: "O Método LinguagemAtiva revolucionou minha prática clínica. Os protocolos são claros e os resultados com as crianças são impressionantes!",
      rating: 5
    },
    {
      name: "Prof. Marina",
      description: "Coordenadora Pedagógica",
      text: "Implementamos as técnicas na escola e vimos melhora significativa na comunicação das crianças. Material indispensável para educadores!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-soft-blue">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            💬 Depoimentos
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que dizem os profissionais que{" "}
            <span className="text-primary">aplicam o Método LinguagemAtiva</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depoimentos de fonoaudiólogas e educadores que transformaram sua prática profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                    <blockquote className="text-lg text-foreground leading-relaxed italic pl-6">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.description}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-soft rounded-lg p-6 border border-border inline-block">
            <p className="text-muted-foreground text-sm">
              <strong>Quer ver seu depoimento aqui?</strong> Aplique as estratégias do eBook 
              e compartilhe seus resultados conosco!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
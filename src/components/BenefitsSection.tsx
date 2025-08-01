import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Clock, Heart, Brain, PlayCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <PlayCircle className="w-6 h-6" />,
      title: "Protocolos de intervenção estruturados",
      description: "Para crianças de 2 a 8 anos, baseados em evidências científicas"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Estratégias para TDAH e TEA",
      description: "Métodos específicos e eficazes para crianças neurodivergentes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Técnicas de aplicação profissional",
      description: "Para uso em consultórios, clínicas e ambientes educacionais"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Abordagem multidisciplinar",
      description: "Integração entre fonoaudiologia, psicologia e pedagogia"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Recursos respeitosos",
      description: "Que respeitam o tempo e o jeito único de cada criança"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Embasamento real",
      description: "Sem fórmulas mágicas, apenas conteúdo acessível e científico"
    }
  ];

  return (
    <section id="ebook-section" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-soft-blue text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            📘 Sobre o eBook
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Metodologia {" "}
            <span className="text-primary">LinguagemAtiva</span> para profissionais
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conteúdo técnico-científico apresentado de forma didática, com protocolos 
            práticos e estratégias validadas para aplicação profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-soft-green rounded-lg flex items-center justify-center text-accent">
                    {benefit.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <h3 className="font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-soft-orange rounded-xl p-8 border border-warning/20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🎯</span>
            <h3 className="text-xl font-bold text-foreground">
              Formação Profissional Especializada
            </h3>
          </div>
          <p className="text-muted-foreground text-lg">
            Conteúdo técnico-científico estruturado para aprimorar sua prática clínica e educacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
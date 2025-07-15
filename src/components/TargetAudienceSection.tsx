import { Card, CardContent } from "@/components/ui/card";
import { Users, Baby, GraduationCap, Heart } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pais e mães",
      description: "De crianças entre 2 e 8 anos que buscam estimular o desenvolvimento da comunicação"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Famílias com crianças neurodivergentes",
      description: "Com diagnóstico ou suspeita de TDAH e/ou TEA que precisam de estratégias específicas"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educadores e cuidadores",
      description: "Que querem ferramentas práticas e respeitosas para aplicar no dia a dia"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Quem busca resultados reais",
      description: "Sem precisar de mil cursos ou terapias caras, mas com métodos eficazes"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-soft-green text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            ❤️ Para Quem é Este eBook?
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Este material foi pensado{" "}
            <span className="text-primary">especialmente para você</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Se você se identifica com algum dos perfis abaixo, este eBook vai transformar 
            a forma como você se comunica com as crianças.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 bg-card group hover:border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-soft-blue rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {audience.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-soft rounded-xl p-8 border border-border text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            ⚡ Sem Certificado, Mas Com Muito Valor
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Este não é um curso, nem uma formação com certificado. É um{" "}
            <strong>guia direto ao ponto</strong>, feito para quem precisa de{" "}
            <strong>resultados reais, hoje</strong>, no tempo que tem.
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 bg-soft-orange px-4 py-2 rounded-full text-sm font-medium">
            📲 Material enviado imediatamente no seu e-mail
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
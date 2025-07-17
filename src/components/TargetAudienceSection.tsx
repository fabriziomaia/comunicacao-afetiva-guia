import { Card, CardContent } from "@/components/ui/card";
import { Users, Baby, GraduationCap, Heart } from "lucide-react";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fonoaudiólogas em formação",
      description: "Estudantes e recém-formadas que buscam metodologia prática para desenvolvimento da linguagem"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Especialistas em neurodivergência",
      description: "Profissionais que atendem crianças com TDAH e/ou TEA e precisam de protocolos específicos"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Professores e coordenadores",
      description: "Educadores que querem implementar técnicas de estimulação da linguagem em sala de aula"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Profissionais em consultórios",
      description: "Que buscam metodologia validada e estruturada para aprimorar seus atendimentos"
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
            Metodologia {" "}
            <span className="text-primary">LinguagemAtiva</span> para profissionais
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Se você atua ou pretende atuar na área, este eBook vai transformar 
            sua prática profissional com crianças.
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
            🎓 Material de Apoio Profissional
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Este é um{" "}
            <strong>eBook técnico-científico</strong> para complementar sua formação e{" "}
            <strong>aprimorar sua prática clínica</strong> com metodologia validada.
          </p>
          
          <div className="mt-6 inline-flex items-center gap-2 bg-soft-orange px-4 py-2 rounded-full text-sm font-medium">
            📲 Material profissional enviado imediatamente
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
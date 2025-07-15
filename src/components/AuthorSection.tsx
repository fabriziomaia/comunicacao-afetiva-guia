import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Heart, Star } from "lucide-react";

const AuthorSection = () => {
  return (
    <section className="py-20 bg-soft-blue">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            🧑‍⚕️ Sobre a Autora
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Criado por uma{" "}
            <span className="text-primary">especialista reconhecida</span>
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto border-border shadow-xl bg-card">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Author Image Placeholder */}
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="w-48 h-48 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                    <div className="text-center">
                      <GraduationCap className="w-16 h-16 mx-auto mb-2" />
                      <div className="text-sm font-medium">Fonoaudióloga</div>
                      <div className="text-xs opacity-90">Especialista</div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-2 -right-2">
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Especialista
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Dra. Ana Clara Fonseca
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fonoaudióloga especialista em desenvolvimento infantil, com <strong>15 anos de atuação</strong> 
                    clínica e acadêmica, criadora do Método ComunicAção.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-soft-green rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-foreground">Experiência</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      +500 profissionais capacitados
                    </p>
                  </div>

                  <div className="bg-soft-orange rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Heart className="w-5 h-5 text-warning" />
                      <span className="font-semibold text-foreground">Especialização</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      TDAH, TEA e desenvolvimento infantil
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-soft rounded-lg p-6 border border-border">
                  <p className="text-foreground leading-relaxed">
                    <strong>Criadora do Método ComunicAção</strong>, já capacitou mais de 500 profissionais 
                    em todo o Brasil, revolucionando a <em>prática clínica</em> e <em>educacional</em> 
                    no desenvolvimento da linguagem infantil.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Desenvolvimento Infantil</Badge>
                  <Badge variant="secondary">TDAH</Badge>
                  <Badge variant="secondary">TEA</Badge>
                  <Badge variant="secondary">Linguagem</Badge>
                  <Badge variant="secondary">Comunicação Afetiva</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AuthorSection;
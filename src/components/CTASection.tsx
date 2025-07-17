import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Shield, Mail } from "lucide-react";

const CTASection = () => {
  const handlePurchase = () => {
    // Aqui você pode integrar com seu sistema de pagamento
    console.log("Redirecionando para pagamento...");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-soft-green text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            🛒 Chamada para Ação
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Domine o Método{" "}
            <span className="text-primary">LinguagemAtiva hoje mesmo</span>
          </h2>
        </div>

        <Card className="border-primary/20 shadow-2xl bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-soft opacity-50"></div>
          
          <CardContent className="p-8 md:p-12 relative">
            <div className="text-center space-y-8">
              {/* Price and Value Proposition */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Badge variant="default" className="bg-accent text-accent-foreground">
                    <BookOpen className="w-4 h-4 mr-1" />
                    eBook Completo
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    <Shield className="w-4 h-4 mr-1" />
                    Acesso Vitalício
                  </Badge>
                </div>

                <div className="bg-soft-orange rounded-xl p-6 border border-warning/20 mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Investimento único de</div>
                  <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                    R$ <span className="text-primary">[XX]</span>
                  </div>
                  <div className="text-lg text-muted-foreground">
                    Acesso vitalício • Aplique no seu tempo
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Garanta agora seu eBook profissional e transforme sua prática clínica 
                  e educacional com metodologia validada e protocolos estruturados.
                </p>
              </div>

              {/* Main CTA Button */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  variant="cta"
                  onClick={handlePurchase}
                  className="text-xl px-12 py-8 w-full md:w-auto"
                >
                  <BookOpen className="w-6 h-6" />
                  QUERO DOMINAR O MÉTODO LINGUAGEMATIVA!
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  Material enviado imediatamente por email
                </div>
              </div>

              {/* Additional Benefits */}
              <div className="grid md:grid-cols-3 gap-4 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-soft-blue rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-sm">Acesso Imediato</div>
                    <div className="text-xs text-muted-foreground">Receba agora por email</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-soft-green rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-sm">Acesso Vitalício</div>
                    <div className="text-xs text-muted-foreground">Para sempre seu</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-soft-orange rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-warning" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-sm">Conteúdo Completo</div>
                    <div className="text-xs text-muted-foreground">Tudo em um só lugar</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full text-sm text-muted-foreground">
            ✨ Transforme a comunicação da sua família hoje mesmo
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
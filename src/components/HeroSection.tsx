import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-speech-therapy.jpg";
import { Heart, BookOpen } from "lucide-react";

const HeroSection = () => {
  const scrollToEbook = () => {
    const ebookSection = document.getElementById('ebook-section');
    ebookSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-accent">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Desenvolvido por Especialista
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Desperte o{" "}
                <span className="text-primary">Potencial da Comunicação</span>{" "}
                do Seu Filho
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Um método simples, afetivo e validado por especialistas para estimular
                a linguagem de crianças neurotípicas e neurodivergentes
              </p>
            </div>

            <div className="bg-soft-orange rounded-lg p-6 border border-warning/20">
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Seu filho tem dificuldades para se expressar?
              </h2>
              <p className="text-muted-foreground">
                Este guia é para você que quer estimular a linguagem{" "}
                <strong>sem pressão</strong>, com leveza e{" "}
                <strong>resultados reais</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="cta"
                onClick={scrollToEbook}
                className="text-lg px-8 py-6"
              >
                <BookOpen className="w-5 h-5" />
                Quero Acessar o eBook Agora
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToEbook}
                className="text-lg px-8 py-6"
              >
                Saiba Mais
              </Button>
            </div>

            <div className="text-sm text-muted-foreground text-center lg:text-left">
              ✨ Material enviado imediatamente por email após o pagamento
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Fonoaudióloga trabalhando com crianças"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Método Validado ✅
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <span className="text-primary">📚</span> eBook Completo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
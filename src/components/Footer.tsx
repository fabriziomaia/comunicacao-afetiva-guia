import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">eBook Comunicação</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Desenvolvendo conexões verdadeiras através da comunicação afetiva 
              entre pais e filhos.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="w-4 h-4" />
                <span>contato@exemplo.com</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informações</h3>
            <div className="space-y-2 text-background/80">
              <p>Material educativo sem certificação</p>
              <p>Conteúdo baseado em evidências científicas</p>
              <p>Desenvolvido por profissional especializada</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 eBook Comunicação. Todos os direitos reservados. 
            Feito com <Heart className="w-4 h-4 inline text-primary" /> para transformar vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
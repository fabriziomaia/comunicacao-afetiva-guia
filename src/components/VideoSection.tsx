import { PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

const VideoSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Conheça o Método{" "}
            <span className="text-primary">LinguagemAtiva</span>{" "}
            em Vídeo
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja como o método pode transformar sua prática profissional e 
            potencializar o desenvolvimento da linguagem infantil.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10"></div>
          <div 
            className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
            onClick={() => setVideoOpen(true)}
          >
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              <div className="bg-primary/90 rounded-full p-5 shadow-lg">
                <PlayCircle className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 z-20">
            <Button 
              variant="accent"
              onClick={() => setVideoOpen(true)}
              className="shadow-lg"
            >
              Assistir apresentação
            </Button>
          </div>
          {/* Placeholder image for video thumbnail */}
          <div className="bg-card h-full w-full flex items-center justify-center">
            <img 
              src="https://placehold.co/1280x720/e2e8f0/475569?text=Vídeo+do+Método+LinguagemAtiva"
              alt="Thumbnail do vídeo sobre o método LinguagemAtiva"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
            <div className="aspect-video w-full">
              {/* Replace this with your actual video embed code */}
              <div className="w-full h-full flex items-center justify-center bg-muted p-8 text-center">
                <p className="text-muted-foreground">
                  Aqui você incluiria um iframe de YouTube, Vimeo ou outro serviço de hospedagem de vídeo.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VideoSection;
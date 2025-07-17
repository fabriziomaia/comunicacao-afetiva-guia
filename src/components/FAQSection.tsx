import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "É adequado para fonoaudiólogas recém-formadas?",
      answer: "Sim! O Método LinguagemAtiva foi especialmente desenvolvido para complementar a formação acadêmica com protocolos práticos e estratégias validadas para aplicação clínica imediata."
    },
    {
      question: "Professores podem aplicar as técnicas em sala de aula?",
      answer: "Absolutamente! O método inclui adaptações específicas para ambiente educacional, com estratégias para implementação coletiva e individual no contexto escolar."
    },
    {
      question: "O material oferece certificado profissional?",
      answer: "Este é um eBook técnico-científico para estudo e aplicação prática. Para certificação profissional, oferecemos cursos presenciais e online complementares."
    },
    {
      question: "Como recebo o material após a compra?",
      answer: "O eBook é enviado automaticamente para seu email logo após a confirmação do pagamento. Você terá acesso vitalício ao material e poderá baixar quantas vezes quiser."
    },
    {
      question: "Posso usar com crianças neurotípicas e atípicas?",
      answer: "Sim! O Método LinguagemAtiva é validado para crianças típicas e neurodivergentes (TDAH, TEA), com protocolos específicos para cada perfil e necessidade."
    },
    {
      question: "O método tem respaldo científico?",
      answer: "Sim! Todas as estratégias são baseadas em evidências científicas atuais, com referências bibliográficas e estudos de caso incluídos no material."
    }
  ];

  return (
    <section className="py-20 bg-soft-blue">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            ❓ Perguntas Frequentes
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tire suas{" "}
            <span className="text-primary">dúvidas sobre o eBook</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aqui estão as respostas para as principais questões sobre o material e sua aplicação.
          </p>
        </div>

        <Card className="border-border shadow-lg bg-card">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 data-[state=open]:bg-soft-green/50"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <div className="bg-gradient-soft rounded-lg p-6 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground">
              Entre em contato conosco através do email{" "}
              <strong>contato@exemplo.com</strong> e responderemos o mais rápido possível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
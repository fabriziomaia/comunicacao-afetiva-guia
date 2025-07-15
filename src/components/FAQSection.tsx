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
      question: "É só para quem tem filho com TDAH ou TEA?",
      answer: "Não! O material foi pensado para todas as crianças — apenas contém orientações extras específicas para esses perfis. As estratégias são eficazes para qualquer criança entre 2 e 8 anos."
    },
    {
      question: "Preciso de conhecimento prévio em fonoaudiologia?",
      answer: "De jeito nenhum. Tudo é explicado de forma simples, humana e prática. O material foi desenvolvido especificamente para pais, mães e cuidadores, sem necessidade de conhecimento técnico."
    },
    {
      question: "O eBook oferece certificado?",
      answer: "Não. Este é um eBook informativo e educativo, feito para aplicar no dia a dia. O foco está nos resultados práticos na comunicação com seu filho, não em certificações."
    },
    {
      question: "Como recebo o material após a compra?",
      answer: "O eBook é enviado automaticamente para seu email logo após a confirmação do pagamento. Você terá acesso vitalício ao material e poderá baixar quantas vezes quiser."
    },
    {
      question: "As estratégias funcionam para todas as idades?",
      answer: "O material é específico para crianças de 2 a 8 anos. As atividades e estratégias são adaptadas para diferentes fases do desenvolvimento dentro dessa faixa etária."
    },
    {
      question: "Posso aplicar as orientações mesmo sem ser profissional da área?",
      answer: "Sim! Todo o conteúdo foi criado pensando em pais, mães e cuidadores. As orientações são claras, seguras e podem ser aplicadas por qualquer pessoa que convive com a criança."
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
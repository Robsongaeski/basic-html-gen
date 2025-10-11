import { MessageSquare, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { handleWhatsAppClick } from '@/lib/fbPixel';
const faqData = [{
  category: 'Geral',
  questions: [{
    question: 'Qual o pedido mínimo?',
    answer: 'Trabalhamos a partir de 1 peça conforme o produto escolhido. Oferecemos condições especiais para grandes volumes.'
  }, {
    question: 'Quanto tempo leva para produzir?',
    answer: 'O prazo padrão é de 7 a 15 dias úteis, dependendo do tipo de produto e quantidade. Para urgências, consulte nossa produção expressa.'
  }, {
    question: 'Vocês fazem a arte/design?',
    answer: 'Sim! Temos equipe de design especializada. Criamos artes exclusivas ou adaptamos materiais que você já possui.'
  }, {
    question: 'Atendem todo o Brasil?',
    answer: 'Sim, enviamos para todo o território nacional. Os fretes são calculados por CEP e modalidade de entrega.'
  }]
}, {
  category: 'Produtos & Qualidade',
  questions: [{
    question: 'Que tipos de tecido vocês utilizam?',
    answer: '100% algodão, misto (algodão/poliéster), dry-fit UV50+, malha PV, piquet, brim e outros tecidos especiais conforme necessidade do projeto.'
  }, {
    question: 'As estampas são duráveis?',
    answer: 'Sim! Utilizamos técnicas como silk screen, Sublimação, DTF e bordado com materiais de alta qualidade que garantem durabilidade mesmo após muitas lavagens.'
  }, {
    question: 'Vocês fazem prova de peça?',
    answer: 'Para pedidos acima de 50 peças ou uniformes corporativos, produzimos uma peça piloto para aprovação antes da produção completa.'
  }, {
    question: 'Qual a garantia dos produtos?',
    answer: 'Garantimos a qualidade de confecção e estampas. Em caso de defeitos de fabricação, realizamos a reposição sem custos adicionais.'
  }]
}, {
  category: 'Pedidos & Pagamento',
  questions: [{
    question: 'Como faço um pedido?',
    answer: 'Entre em contato pelo WhatsApp ou venha até nossa sede, conte sobre seu projeto e receba uma cotação personalizada. Após aprovação, iniciamos a produção.'
  }, {
    question: 'Quais formas de pagamento aceitam?',
    answer: 'PIX, cartão de crédito, débito e transferência bancária. Para empresas, oferecemos condições especiais de pagamento.'
  }, {
    question: 'Posso cancelar ou alterar meu pedido?',
    answer: 'Alterações são possíveis até o início da produção. Após iniciada, mudanças podem gerar custos adicionais.'
  }, {
    question: 'Emitem nota fiscal?',
    answer: 'Sim, todos os pedidos são acompanhados de nota fiscal. Para empresas, oferecemos condições especiais de faturamento.'
  }]
}];
export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const toggleItem = (itemId: string) => {
    setOpenItems(prev => prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]);
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-950">
            Perguntas Frequentes
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-950">
            Tire suas dúvidas sobre nossos serviços, processos e produtos. 
            Caso não encontre o que procura, entre em contato conosco!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => <div key={category.category} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                const itemId = `${categoryIndex}-${questionIndex}`;
                const isOpen = openItems.includes(itemId);
                return <div key={itemId} className="card-service">
                        <button onClick={() => toggleItem(itemId)} className="w-full flex items-center justify-between text-left">
                          <h3 className="font-semibold text-foreground pr-4">
                            {item.question}
                          </h3>
                          {isOpen ? <Minus className="w-5 h-5 text-primary flex-shrink-0" /> : <Plus className="w-5 h-5 text-primary flex-shrink-0" />}
                        </button>
                        
                        {isOpen && <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>}
                      </div>;
              })}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-responsive text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Não encontrou sua dúvida?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para esclarecer qualquer questão sobre 
            nossos produtos e serviços. Fale conosco pelo WhatsApp!
          </p>
          
          <Button asChild className="cta-whatsapp">
            <a 
              href="https://wa.me/554626041806" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 mx-auto w-fit"
              onClick={() => handleWhatsAppClick('CTA Final FAQ')}
            >
              <MessageSquare size={20} />
              Tirar Dúvidas no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>;
}
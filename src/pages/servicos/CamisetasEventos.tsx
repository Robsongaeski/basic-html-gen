import { useMemo } from 'react';
import { MessageSquare, Calendar, Users, Timer, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProcessStep from '@/components/sections/ProcessStep';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import { getRandomPortfolioByCategory } from '@/lib/portfolioData';
import eventosImage from '@/assets/camisetas-eventos.jpg';
import briefingImage from '@/assets/process-briefing.jpg';
import designImage from '@/assets/process-design.jpg';
import productionImage from '@/assets/process-production.jpg';
import deliveryImage from '@/assets/process-delivery.jpg';

const benefits = ['Fortalece identidade do evento', 'Cria memórias duradouras', 'Marketing efetivo e visual', 'Engagement dos participantes', 'Qualidade para lembranças', 'Prazos de urgência'];
const specifications = {
  eventos: ['Festivais', 'Conferências', 'Congressos', 'Shows', 'Campanhas', 'Formaturas'],
  tecidos: ['100% Algodão', 'Misto Confort', 'Dry-Fit'],
  estampas: ['Silk Screen', 'DTF Digital', 'Bordado'],
  formatos: ['Babylook', 'Tradicional', 'Tank Top', 'Oversize']
};
const processSteps = [{
  step: 1,
  title: 'Briefing do Evento',
  description: 'Conversamos sobre suas necessidades, quantidade, prazo e especificações do projeto.',
  icon: MessageSquare,
  image: briefingImage
}, {
  step: 2,
  title: 'Design Criativo',
  description: 'Criamos arte impactante que representa a essência do evento.',
  icon: Calendar,
  image: designImage
}, {
  step: 3,
  title: 'Produção Express',
  description: 'Produzimos com agilidade respeitando prazos apertados.',
  icon: Timer,
  image: productionImage
}, {
  step: 4,
  title: 'Entrega Pontual',
  description: 'Evento garantido com camisetas que farão a diferença.',
  icon: CheckCircle,
  image: deliveryImage
}];
const faq = [{
  question: 'Conseguem entregar com prazo apertado para eventos?',
  answer: 'Sim! Temos produção expressa para eventos. Consulte prazos a partir de 5 dias úteis para urgências.'
}, {
  question: 'Qual quantidade mínima para camisetas de evento?',
  answer: 'A partir de 1 peça. Para grandes eventos, oferecemos condições especiais e descontos progressivos.'
}, {
  question: 'Vocês criam o design da camiseta do evento?',
  answer: 'Claro! Nossa equipe cria designs exclusivos que capturam a essência e energia do seu evento.'
}, {
  question: 'É possível fazer camisetas em várias cores para o mesmo evento?',
  answer: 'Sim! Podemos produzir diferentes cores para identificar setores, categorias ou simplesmente variedade.'
}, {
  question: 'Como garantem a qualidade para lembranças duradouras?',
  answer: 'Usamos apenas materiais premium e técnicas que garantem durabilidade, afinal a camiseta é uma lembrança do evento.'
}, {
  question: 'Atendem eventos de todos os portes?',
  answer: 'Sim! Desde pequenos encontros até grandes festivais e conferências. Adequamos nossa produção ao seu projeto.'
}];
export default function CamisetasEventos() {
  const portfolioExamples = useMemo(() => getRandomPortfolioByCategory('eventos', 3), []);
  
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={eventosImage} alt="Camisetas para Eventos Gatha" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative container-responsive">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Camisetas para Eventos
            </h1>
            
            <p className="text-xl text-gray-200 mb-6 leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Torne seu evento único com camisetas personalizadas que marcam presença, 
              fortalecem sua marca e criam memórias duradouras para todos os participantes.
            </p>
            
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 max-w-2xl">
              {benefits.map(benefit => <li key={benefit} className="flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>)}
            </ul>
            
            <Button asChild className="cta-whatsapp text-lg px-8 py-4">
              <a 
                href="https://wa.me/554626041806" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3"
                onClick={() => handleWhatsAppClick('Hero Camisetas Eventos')}
              >
                <MessageSquare size={20} />
                Marcar Meu Evento
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Soluções para Eventos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(specifications).map(([category, items]) => <div key={category} className="card-service">
                <h3 className="font-semibold text-lg text-foreground mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map(item => <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-secondary">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Eventos que Atendemos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Confira alguns eventos que já personalizamos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioExamples.map((example) => (
              <div key={example.id} className="card-service group overflow-hidden">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {example.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {example.description}
                </p>
                <Button asChild className="cta-whatsapp w-full">
                  <a 
                    href={`https://wa.me/554626041806?text=Olá! Gostaria de solicitar um orçamento para ${example.title}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                    onClick={() => handleWhatsAppClick(`Portfolio ${example.title}`)}
                  >
                    <MessageSquare size={16} />
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Processo para Eventos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agilidade e criatividade para fazer seu evento ser inesquecível
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map(step => <ProcessStep key={step.step} {...step} />)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Dúvidas sobre Eventos
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => <div key={index} className="card-service">
                <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                  <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-7">
                  {item.answer}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-950">
            Vamos tornar seu evento inesquecível?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-950">
            Cada evento merece camisetas especiais que criem conexão e memórias. 
            Vamos desenvolver a identidade perfeita para sua ocasião especial.
          </p>
          
          <Button asChild className="cta-whatsapp text-lg px-8 py-4">
            <a 
              href="https://wa.me/554626041806" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 mx-auto w-fit"
              onClick={() => handleWhatsAppClick('CTA Final Camisetas Eventos')}
            >
              <MessageSquare size={20} />
              Solicitar Orçamento Gratuito
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </section>
    </div>;
}
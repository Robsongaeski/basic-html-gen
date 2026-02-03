import { useMemo } from 'react';
import { MessageSquare, Layers, Palette, Timer, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProcessStep from '@/components/sections/ProcessStep';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import { getRandomPortfolioByCategory } from '@/lib/portfolioData';
import SEOHead from '@/components/seo/SEOHead';
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import camisetasImage from '@/assets/camisetas-personalizadas.jpg';
import briefingImage from '@/assets/process-briefing.jpg';
import designImage from '@/assets/process-design.jpg';
import productionImage from '@/assets/process-production.jpg';
import deliveryImage from '@/assets/process-delivery.jpg';

const benefits = [
  'Interior flanelado para conforto',
  'Com capuz ou sem capuz',
  'Personalização completa',
  'Tecidos de alta qualidade',
  'Ideal para todas as estações',
  'Durabilidade garantida'
];

const specifications = {
  tecidos: ['Moletom Flanelado', 'Algodão/Poliéster', 'Fleece', 'Moletom Peluciado'],
  modelos: ['Com Capuz', 'Sem Capuz (Gola Careca)', 'Zíper Frontal', 'Bolso Canguru'],
  personalizacao: ['Silk Screen', 'DTF (Filme)', 'Bordado', 'Sublimação', 'Full Print'],
  tamanhos: ['PP', 'P', 'M', 'G', 'GG', 'XGG', 'Tamanhos especiais']
};

const processSteps = [
  {
    step: 1,
    title: 'Briefing',
    description: 'Conversamos sobre suas necessidades, quantidade, prazo e especificações do projeto.',
    icon: MessageSquare,
    image: briefingImage
  },
  {
    step: 2,
    title: 'Arte',
    description: 'Criamos ou adaptamos sua arte para a melhor aplicação no moletom.',
    icon: Palette,
    image: designImage
  },
  {
    step: 3,
    title: 'Produção',
    description: 'Confeccionamos com tecidos flanelados de alta qualidade e acabamento perfeito.',
    icon: Layers,
    image: productionImage
  },
  {
    step: 4,
    title: 'Entrega',
    description: 'Entregamos no prazo combinado com qualidade garantida.',
    icon: CheckCircle,
    image: deliveryImage
  }
];

const faq = [
  {
    question: 'Qual o pedido mínimo para moletons?',
    answer: 'Trabalhamos a partir de 10 peças. Entre em contato para consultar condições especiais para pedidos maiores.'
  },
  {
    question: 'Quanto tempo leva para produzir?',
    answer: 'O prazo padrão é de 15 a 20 dias úteis após aprovação da arte e confirmação do pedido.'
  },
  {
    question: 'Os moletons são realmente flanelados por dentro?',
    answer: 'Sim! Utilizamos tecidos com interior flanelado (peluciado) que proporcionam conforto térmico e maciez.'
  },
  {
    question: 'Posso escolher entre com capuz e sem capuz?',
    answer: 'Sim! Oferecemos modelos com capuz e sem capuz (gola careca). Você escolhe o modelo ideal para seu projeto.'
  },
  {
    question: 'Que tipos de personalização vocês fazem em moletons?',
    answer: 'Trabalhamos com silk screen, DTF, bordado, sublimação e full print. Escolhemos a melhor técnica para cada projeto.'
  },
  {
    question: 'Os moletons encolhem na lavagem?',
    answer: 'Nossos moletons passam por pré-encolhimento industrial, minimizando encolhimento. Recomendamos seguir as instruções de lavagem.'
  }
];

export default function Moletons() {
  const portfolioExamples = useMemo(() => getRandomPortfolioByCategory(['corporativo', 'personalizado'], 3), []);
  
  return (
    <>
      <SEOHead 
        title="Moletons Personalizados"
        description="Moletons personalizados com interior flanelado, com ou sem capuz. Silk screen, DTF, bordado e sublimação. Produção própria em Pato Branco - PR."
        url="/servicos/moletons"
      />
      <ServiceSchema 
        name="Moletons Personalizados"
        description="Moletons com interior flanelado, disponíveis com capuz ou sem. Conforto e qualidade para todas as estações."
        category="Confecção"
      />
      <BreadcrumbSchema items={[
        { name: 'Início', url: '/' },
        { name: 'Serviços', url: '/servicos' },
        { name: 'Moletons', url: '/servicos/moletons' }
      ]} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="moletons-heading">
          <div className="absolute inset-0">
            <img 
              src={camisetasImage} 
              alt="Moletons Personalizados com interior flanelado" 
              loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative container-responsive">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Moletons Personalizados
            </h1>
            
            <p className="text-xl text-gray-200 mb-6 leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Moletons com interior flanelado, disponíveis com capuz ou sem capuz. 
              Conforto, qualidade e personalização completa para todas as estações.
            </p>
            
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 max-w-2xl">
              {benefits.map(benefit => (
                <li key={benefit} className="flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild className="cta-whatsapp text-lg px-8 py-4">
              <a 
                href="https://wa.me/554626041806" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3"
                onClick={() => handleWhatsAppClick('Hero Moletons')}
              >
                <MessageSquare size={20} />
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Especificações Técnicas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(specifications).map(([category, items]) => (
              <div key={category} className="card-service">
                <h3 className="font-semibold text-lg text-foreground mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-secondary">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Exemplos de Moletons
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Confira alguns moletons que já personalizamos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioExamples.map((example) => (
              <div key={example.id} className="card-service group overflow-hidden">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img 
                    src={example.image} 
                    alt={example.title}
                    loading="lazy"
                    decoding="async"
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
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nosso processo simples e eficiente para seus moletons personalizados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map(step => (
              <ProcessStep key={step.step} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="card-service">
                <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                  <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-7">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-950">
            Vamos criar seus moletons personalizados?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-950">
            Entre em contato conosco e receba sua cotação personalizada. 
            Estamos prontos para dar vida às suas ideias com qualidade garantida.
          </p>
          
          <Button asChild className="cta-whatsapp text-lg px-8 py-4">
            <a 
              href="https://wa.me/554626041806" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 mx-auto w-fit"
              onClick={() => handleWhatsAppClick('CTA Final Moletons')}
            >
              <MessageSquare size={20} />
              Solicitar Orçamento Gratuito
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
}

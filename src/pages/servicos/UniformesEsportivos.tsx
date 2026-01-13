import { useMemo } from 'react';
import { MessageSquare, Users, Trophy, Timer, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProcessStep from '@/components/sections/ProcessStep';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import { getRandomPortfolioByCategory } from '@/lib/portfolioData';
import esportivosImage from '@/assets/uniformes-esportivos.jpg';
import briefingImage from '@/assets/process-briefing.jpg';
import designImage from '@/assets/process-design.jpg';
import productionImage from '@/assets/process-production.jpg';
import deliveryImage from '@/assets/process-delivery.jpg';

const benefits = ['Tecidos de alta performance', 'Design moderno e profissional', 'Numeração personalizada', 'Cores vibrantes e duráveis', 'Conforto e mobilidade', 'Qualidade atlética'];
const specifications = {
  modalidades: ['Futebol', 'Vôlei', 'Basquete', 'Handebol', 'Futsal', 'Corrida'],
  tecidos: ['Dry-Fit', 'Poliéster Athletic', 'Malha Esportiva', 'Tactel'],
  personalizacao: ['Nome do jogador', 'Número', 'Logo do time', 'Patrocinadores'],
  beneficios: ['Tratamento UV 50+', 'Tratamento antiodor', 'Secagem rápida', 'Alta durabilidade'],
  tamanhos: ['Infantil (4-16)', 'Adulto (PP-GGG)', 'Tamanhos especiais']
};
const processSteps = [{
  step: 1,
  title: 'Briefing Esportivo',
  description: 'Conversamos sobre suas necessidades, quantidade, prazo e especificações do projeto.',
  icon: MessageSquare,
  image: briefingImage
}, {
  step: 2,
  title: 'Design',
  description: 'Criamos layout profissional com identidade visual do time.',
  icon: Trophy,
  image: designImage
}, {
  step: 3,
  title: 'Produção',
  description: 'Confeccionamos com tecidos esportivos e controle de qualidade.',
  icon: Users,
  image: productionImage
}, {
  step: 4,
  title: 'Entrega',
  description: 'Uniformes prontos para entrar em campo com total confiança.',
  icon: CheckCircle,
  image: deliveryImage
}];
const faq = [{
  question: 'Qual o pedido mínimo para uniformes esportivos?',
  answer: 'Trabalhamos a partir de 5 peças. Arte sem custo para pedidos acima de 10 peças.'
}, {
  question: 'Quanto tempo leva para produzir os uniformes?',
  answer: 'O prazo padrão é de 7 a 15 dias úteis após aprovação do design e confirmação do pedido.'
}, {
  question: 'Os tecidos são adequados para alta performance?',
  answer: 'Sim! Utilizamos tecidos esportivos com tratamento UV 50+ e antiodor, além de propriedades como respirabilidade, elasticidade e secagem rápida.'
}, {
  question: 'Posso personalizar nome e número de cada jogador?',
  answer: 'Claro! Fazemos numeração e nomeação individual sem custo adicional a partir de 14 peças.'
}, {
  question: 'Vocês fazem uniformes para qual esporte?',
  answer: 'Atendemos todas as modalidades: futebol, vôlei, basquete, handebol, futsal, corrida e outros esportes.'
}, {
  question: 'As cores resistem às lavagens?',
  answer: 'Absolutamente! Nossas estampas e tecidos são tratados para suportar lavagens frequentes sem desbotar.'
}];
export default function UniformesEsportivos() {
  const portfolioExamples = useMemo(() => getRandomPortfolioByCategory('esportivo', 3), []);
  
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={esportivosImage} alt="Uniformes Esportivos Gatha" loading="eager" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative container-responsive">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Uniformes Esportivos
            </h1>
            
            <p className="text-xl text-gray-200 mb-6 leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Uniformes profissionais para equipes esportivas com design moderno, 
              tecidos de alta performance e personalização completa para cada atleta.
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
                onClick={() => handleWhatsAppClick('Hero Uniformes Esportivos')}
              >
                <MessageSquare size={20} />
                Equipar Meu Time
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Especializações Esportivas
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
              Times que Vestimos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja alguns uniformes esportivos que já criamos
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
              Processo de Criação
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Do briefing à entrega, cuidamos de cada detalhe para seu time brilhar
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
            Dúvidas Sobre Uniformes Esportivos
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
            Pronto para equipar seu time?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-950">
            Entre em campo com uniformes profissionais que inspiram confiança e performance. 
            Vamos criar a identidade visual perfeita para sua equipe.
          </p>
          
          <Button asChild className="cta-whatsapp text-lg px-8 py-4">
            <a 
              href="https://wa.me/554626041806" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 mx-auto w-fit"
              onClick={() => handleWhatsAppClick('CTA Final Uniformes Esportivos')}
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
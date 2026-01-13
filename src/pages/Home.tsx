import { Link } from 'react-router-dom';
import { Shirt, Users, Building2, Calendar, MessageSquare, Clock, Target, Award, Palette, CheckCircle, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/sections/ServiceCard';
import ProcessStep from '@/components/sections/ProcessStep';
import TestimonialCard from '@/components/sections/TestimonialCard';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import { getRandomTestimonials } from '@/lib/testimonialsData';
import { useMemo } from 'react';
import heroImage from '@/assets/hero-confeccao.jpg';
import camisetasImage from '@/assets/camisetas-personalizadas.jpg';
import esportivosImage from '@/assets/uniformes-esportivos.jpg';
import empresariaisImage from '@/assets/uniformes-empresariais.jpg';
import eventosImage from '@/assets/camisetas-eventos.jpg';
import briefingImage from '@/assets/process-briefing.jpg';
import designImage from '@/assets/process-design.jpg';
import productionImage from '@/assets/process-production.jpg';
import deliveryImage from '@/assets/process-delivery.jpg';
const services = [{
  title: 'Camisetas Personalizadas',
  description: 'Personalize suas camisetas com estampas exclusivas, alta qualidade e durabilidade garantida.',
  icon: Shirt,
  href: '/servicos/camisetas-personalizadas',
  imageUrl: camisetasImage
}, {
  title: 'Uniformes Esportivos',
  description: 'Uniformes profissionais para equipes esportivas com design moderno e tecidos de alta performance.',
  icon: Users,
  href: '/servicos/uniformes-esportivos',
  imageUrl: esportivosImage
}, {
  title: 'Uniformes Empresariais',
  description: 'Vista sua equipe com elegância e profissionalismo. Uniformes corporativos sob medida.',
  icon: Building2,
  href: '/servicos/uniformes-empresariais',
  imageUrl: empresariaisImage
}, {
  title: 'Camisetas para Eventos',
  description: 'Torne seu evento único com camisetas personalizadas que marcam presença e fortalecem sua marca.',
  icon: Calendar,
  href: '/servicos/camisetas-para-eventos',
  imageUrl: eventosImage
}];
const processSteps = [{
  step: 1,
  title: 'Briefing',
  description: 'Conversamos sobre suas necessidades, quantidade, prazo e especificações do projeto.',
  icon: MessageSquare,
  image: briefingImage
}, {
  step: 2,
  title: 'Design & Arte',
  description: 'Criamos ou adaptamos o design conforme sua identidade visual e especificações.',
  icon: Palette,
  image: designImage
}, {
  step: 3,
  title: 'Produção',
  description: 'Produzimos com controle de qualidade rigoroso em nossa fábrica própria.',
  icon: Award,
  image: productionImage
}, {
  step: 4,
  title: 'Entrega',
  description: 'Entregamos no prazo combinado com qualidade garantida e acompanhamento.',
  icon: CheckCircle,
  image: deliveryImage
}];
const differentials = [{
  title: 'Produção Própria',
  description: 'Fábrica própria com controle total da qualidade e prazos.',
  icon: Award
}, {
  title: 'Prazos Rápidos',
  description: 'Entregamos seus pedidos com agilidade sem comprometer a qualidade.',
  icon: Clock
}, {
  title: 'Personalização Total',
  description: 'Adaptamos cada peça às suas necessidades específicas.',
  icon: Palette
}, {
  title: 'Controle de Qualidade',
  description: 'Inspeção rigorosa em todas as etapas de produção.',
  icon: CheckCircle
}, {
  title: 'Atendimento Consultivo',
  description: 'Ajudamos você a escolher a melhor solução para seu projeto.',
  icon: Target
}, {
  title: 'Variedade de Tecidos',
  description: 'Amplo catálogo de tecidos e acabamentos especiais.',
  icon: Shirt
}];
export default function Home() {
  // Seleciona 3 depoimentos aleatórios a cada render
  const randomTestimonials = useMemo(() => getRandomTestimonials(3), []);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Gatha Confecções - Fábrica Moderna" loading="eager" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative container-responsive">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent font-medium text-sm drop-shadow-lg">Produção Própria</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Uniformes e peças personalizadas com{' '}
              <span className="text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">qualidade</span>,{' '}
              <span className="text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">agilidade</span> e{' '}
              <span className="text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">carinho</span> de fábrica
            </h1>
            
            <p className="text-xl text-white mb-8 leading-relaxed max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Especializados em confecção de uniformes e peças personalizadas com produção própria 
              em Pato Branco - PR. Qualidade garantida e prazos que você pode confiar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="cta-whatsapp text-lg px-8 py-4">
                <a href="https://wa.me/554626041806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3" onClick={() => handleWhatsAppClick('Hero Home')}>
                  <MessageSquare size={20} />
                  Falar no WhatsApp
                </a>
              </Button>
              
              <Button asChild variant="outline" className="btn-hero text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/portfolio" className="flex items-center gap-3">
                  <Eye size={20} />
                  Ver Portfólio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que fazemos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Especializados em confecção de alta qualidade com foco em uniformes e peças personalizadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(service => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section-padding bg-secondary">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos na confecção de uniformes e peças personalizadas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map(differential => <div key={differential.title} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <differential.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{differential.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>)}
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
              Nosso processo simples e eficiente para entregar exatamente o que você precisa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map(step => <ProcessStep key={step.step} {...step} />)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Depoimentos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que nossos clientes falam sobre nosso trabalho
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {randomTestimonials.map((testimonial, index) => <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />)}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-4xl mb-6 font-bold text-gray-950">
            Pronto para criar seu projeto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-zinc-950">
            Entre em contato conosco pelo WhatsApp e receba sua cotação personalizada. 
            Estamos prontos para atender seu projeto com a qualidade que você merece.
          </p>
          
          <Button asChild className="cta-whatsapp text-lg px-8 py-4">
            <a href="https://wa.me/554626041806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mx-auto w-fit" onClick={() => handleWhatsAppClick('CTA Final Home')}>
              <MessageSquare size={20} />
              Solicitar Orçamento
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </section>
    </div>;
}
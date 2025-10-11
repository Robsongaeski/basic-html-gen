import { Shirt, Users, Building2, Calendar, Eye, MessageCircle, ArrowRight, Wind, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/sections/ServiceCard';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import TestimonialCard from '@/components/sections/TestimonialCard';
import camisetasImage from '@/assets/camisetas-personalizadas.jpg';
import esportivosImage from '@/assets/uniformes-esportivos.jpg';
import empresariaisImage from '@/assets/uniformes-empresariais.jpg';
import eventosImage from '@/assets/camisetas-eventos.jpg';
import { getRandomPortfolioByCategory } from '@/lib/portfolioData';
import { useMemo } from 'react';
const services = [{
  title: 'Camisetas Personalizadas',
  description: 'Personalize suas camisetas com estampas exclusivas, alta qualidade e durabilidade garantida. Ideal para promoções, brinde e uso pessoal.',
  icon: Shirt,
  href: '/servicos/camisetas-personalizadas',
  imageUrl: camisetasImage
}, {
  title: 'Uniformes Esportivos',
  description: 'Uniformes profissionais para equipes esportivas com design moderno, tecidos de alta performance e personalização completa.',
  icon: Users,
  href: '/servicos/uniformes-esportivos',
  imageUrl: esportivosImage
}, {
  title: 'Uniformes Empresariais',
  description: 'Vista sua equipe com elegância e profissionalismo. Uniformes corporativos sob medida que fortalecem a identidade da empresa.',
  icon: Building2,
  href: '/servicos/uniformes-empresariais',
  imageUrl: empresariaisImage
}, {
  title: 'Camisetas para Eventos',
  description: 'Torne seu evento único com camisetas personalizadas que marcam presença, fortalecem sua marca e criam memórias duradouras.',
  icon: Calendar,
  href: '/servicos/camisetas-para-eventos',
  imageUrl: eventosImage
}, {
  title: 'Jaquetas Corta Vento',
  description: 'Jaquetas corta vento totalmente personalizadas em full print ou com estampas localizadas. Proteção e estilo para sua equipe.',
  icon: Wind,
  href: '/servicos/jaquetas-corta-vento',
  imageUrl: empresariaisImage
}, {
  title: 'Moletons',
  description: 'Moletons com interior flanelado, disponíveis com capuz ou sem. Conforto e qualidade para todas as estações.',
  icon: Layers,
  href: '/servicos/moletons',
  imageUrl: camisetasImage
}];

const categoryColors: Record<string, string> = {
  'esportivo': 'bg-green-100 text-green-800',
  'corporativo': 'bg-blue-100 text-blue-800',
  'eventos': 'bg-purple-100 text-purple-800',
  'personalizado': 'bg-orange-100 text-orange-800'
};

const testimonials = [
  {
    name: 'Geane Barboza',
    company: 'Cliente',
    content: 'Gente, pra você que está procurando uma empresa de confiança pra fazer uniformes, eu super recomendo a Gatha Confecções!',
    rating: 5
  },
  {
    name: 'RH Usiplast',
    company: 'Usiplast',
    content: 'Ficamos muito satisfeitos com o atendimento e a qualidade dos produtos. O cuidado, a pontualidade e o carinho no trabalho fazem toda a diferença. Recomendo de olhos fechados!',
    rating: 5
  },
  {
    name: 'Administrativo APAC',
    company: 'APAC - PB',
    content: 'Ótimo produto, os tamanhos estava conforme o pedido, vendedora muito atenciosa com o atendimento, prestativa. Agradeço a atenção e agilidade.',
    rating: 5
  },
  {
    name: 'Gemio Mf2',
    company: 'Cliente',
    content: 'Melhor atendimento produto perfeito valor maravilhoso fiz esse moletom para trabalhar de segurança ficou top',
    rating: 5
  },
  {
    name: 'Fran Dias',
    company: 'Fotografias Afetivas',
    content: 'Uniformes de alta qualidade, e Exelente acabamento, super Recomendo.',
    rating: 5
  },
  {
    name: 'Pamela',
    company: 'Cliente',
    content: 'Adoramos as camisetas DFT qualidade muito boa do tecido, atendimento e agilidade pra entregar as peças foram ótimas, super recomendo.',
    rating: 5
  },
  {
    name: 'Claudia Natalina de Oliveira',
    company: 'Cliente',
    content: 'Empresa muito focada para atender bem o cliente, produtos maravilhosos com excelente qualidade, sempre adquiro camisetas e moletons e super recomendo.',
    rating: 5
  },
  {
    name: 'Emely Roman',
    company: 'Cliente',
    content: 'Qualidade impecável, ótimo atendimento. E preciso ressaltar a agilidade! Ao entrar em contato com eles, prontamente se dispuseram a me atender e entregar as camisetas na data prevista. Amamos as camisetas!!!',
    rating: 5
  },
  {
    name: 'Laerti Risso',
    company: 'Cliente',
    content: 'Empresa com excelência em confecções. Produtos de primeira linha, durabilidade impar e atendimento diferenciado! A camiseta personalisada que pedi ficou ótima! Recomendo...',
    rating: 5
  }
];
export default function Servicos() {
  const portfolioHighlights = useMemo(() => {
    return getRandomPortfolioByCategory(['esportivo', 'corporativo', 'eventos', 'personalizado'], 6);
  }, []);

  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-600">
            Nossos Serviços
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-950">
            Oferecemos soluções completas em confecção com produção própria, 
            garantindo qualidade superior e prazos confiáveis para todos os tipos de projetos.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(service => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trabalhos Realizados
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvemos com qualidade e dedicação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioHighlights.map(item => <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div className="card-service cursor-pointer group">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img src={item.image} alt={item.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${categoryColors[item.category]}`}>
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl">
                  <div className="space-y-4">
                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg" />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
                        <span className={`px-3 py-1 text-sm rounded-full ${categoryColors[item.category]}`}>
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="pt-4">
                        <Button asChild className="cta-whatsapp w-full">
                          <a 
                            href="https://wa.me/554626041806" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center gap-2"
                            onClick={() => handleWhatsAppClick(`Servicos - ${item.title}`)}
                          >
                            <MessageCircle size={18} />
                            Quero algo assim no WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>)}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio" className="inline-flex items-center gap-2">
                Ver todos os trabalhos
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Veja os depoimentos de quem já confiou na nossa qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-responsive text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e conte mais sobre seu projeto. 
            Temos capacidade para desenvolver soluções personalizadas.
          </p>
          
          <Button asChild className="cta-whatsapp">
            <a 
              href="https://wa.me/554626041806" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3"
              onClick={() => handleWhatsAppClick('CTA Final Servicos')}
            >
              Conversar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>;
}
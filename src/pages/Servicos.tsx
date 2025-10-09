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
import portfolioTimeAguia from '@/assets/portfolio-time-aguia.jpg';
import portfolioFestival from '@/assets/portfolio-festival-musica.jpg';
import portfolioTech from '@/assets/portfolio-empresa-tech.jpg';
import portfolioLoja from '@/assets/portfolio-camisetas-loja.jpg';
import portfolioBasquete from '@/assets/portfolio-basquete-feminino.jpg';
import portfolioFarmacia from '@/assets/portfolio-farmacia.jpg';
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

const portfolioHighlights = [{
  id: 1,
  title: 'Uniformes Time Águia FC',
  category: 'Esportivo',
  image: portfolioTimeAguia,
  description: 'Uniformes completos para time de futebol com design moderno e tecidos de alta performance.'
}, {
  id: 2,
  title: 'Camisetas Festival Música',
  category: 'Eventos',
  image: portfolioFestival,
  description: 'Camisetas personalizadas para festival de música com 5 mil unidades produzidas.'
}, {
  id: 3,
  title: 'Uniformes Empresa Tech',
  category: 'Corporativo',
  image: portfolioTech,
  description: 'Uniformes corporativos elegantes para empresa de tecnologia com 200 colaboradores.'
}, {
  id: 4,
  title: 'Camisetas Personalizadas Loja',
  category: 'Personalizado',
  image: portfolioLoja,
  description: 'Linha de camisetas personalizadas para revenda em loja de roupas.'
}, {
  id: 5,
  title: 'Uniformes Basquete Feminino',
  category: 'Esportivo',
  image: portfolioBasquete,
  description: 'Uniformes para equipe feminina de basquete com design exclusivo.'
}, {
  id: 6,
  title: 'Uniformes Rede Farmácias',
  category: 'Corporativo',
  image: portfolioFarmacia,
  description: 'Uniformes padronizados para rede de farmácias com 50 lojas.'
}];

const categoryColors = {
  'Esportivo': 'bg-green-100 text-green-800',
  'Corporativo': 'bg-blue-100 text-blue-800',
  'Eventos': 'bg-purple-100 text-purple-800',
  'Personalizado': 'bg-orange-100 text-orange-800'
};

const testimonials = [
  {
    name: 'Carlos Eduardo Silva',
    company: 'Águia FC',
    content: 'A qualidade dos uniformes superou nossas expectativas! O tecido é excelente e as cores ficaram perfeitas. Toda a equipe adorou!',
    rating: 5
  },
  {
    name: 'Mariana Santos',
    company: 'Festival de Música Verão Pop',
    content: 'Produzimos 5 mil camisetas para o festival e a entrega foi pontual. A impressão ficou impecável e não desbotou depois das lavagens.',
    rating: 5
  },
  {
    name: 'Roberto Almeida',
    company: 'TechSolutions Ltda',
    content: 'Uniformes corporativos de altíssima qualidade. O atendimento foi personalizado e o resultado final ficou elegante e profissional.',
    rating: 5
  },
  {
    name: 'Juliana Rodrigues',
    company: 'Loja Estilo Urbano',
    content: 'Trabalho com confecção há anos e posso dizer: a Gatha é referência em qualidade. As peças têm acabamento perfeito!',
    rating: 5
  },
  {
    name: 'Fernando Costa',
    company: 'Basquete Feminino Estrelas',
    content: 'Os uniformes ficaram incríveis! Design moderno, tecido respirável e ótimo caimento. A equipe se sentiu muito mais profissional.',
    rating: 5
  },
  {
    name: 'Ana Paula Martins',
    company: 'Farmácias Saúde Total',
    content: 'Uniformizamos todas as 50 lojas da nossa rede. Processo muito profissional, do atendimento à entrega. Recomendo!',
    rating: 5
  },
  {
    name: 'Lucas Fernandes',
    company: 'Banda Rock na Veia',
    content: 'Nossas camisetas de banda ficaram sensacionais! A qualidade da estampa é excelente e venderam muito bem nos shows.',
    rating: 5
  },
  {
    name: 'Patrícia Oliveira',
    company: 'Conferência Tech Brasil',
    content: 'Entregaram 2 mil camisetas em tempo recorde sem perder a qualidade. Todos os participantes elogiaram o material!',
    rating: 5
  }
];
export default function Servicos() {
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
                        <span className={`px-2 py-1 text-xs rounded-full ${categoryColors[item.category as keyof typeof categoryColors]}`}>
                          {item.category}
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
                        <span className={`px-3 py-1 text-sm rounded-full ${categoryColors[item.category as keyof typeof categoryColors]}`}>
                          {item.category}
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
import { useState } from 'react';
import { Eye, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import TestimonialCard from '@/components/sections/TestimonialCard';
import portfolioTimeAguia from '@/assets/portfolio-time-aguia.jpg';
import portfolioFestival from '@/assets/portfolio-festival-musica.jpg';
import portfolioTech from '@/assets/portfolio-empresa-tech.jpg';
import portfolioLoja from '@/assets/portfolio-camisetas-loja.jpg';
import portfolioBasquete from '@/assets/portfolio-basquete-feminino.jpg';
import portfolioFarmacia from '@/assets/portfolio-farmacia.jpg';
import portfolioCamisetaReligiosa from '@/assets/portfolio-camiseta-religiosa.jpg';
import portfolioPolimed from '@/assets/portfolio-polimed-30anos.jpg';
import portfolioPoloAsiaClub from '@/assets/portfolio-polo-asia-club.jpg';
import portfolioJaquetaMatech from '@/assets/portfolio-jaqueta-matech.jpg';
import portfolioJaquetaProCampo from '@/assets/portfolio-jaqueta-procampo.jpg';
import portfolioBrizola from '@/assets/portfolio-brizola-pinturas.jpg';
import portfolioFlyDonuts from '@/assets/portfolio-fly-donuts.jpg';
import portfolioPilates from '@/assets/portfolio-pilates-personalizado.jpg';
import portfolioUsiplast from '@/assets/portfolio-usiplast-23anos.jpg';
import portfolioPantanal from '@/assets/portfolio-pantanal-summit.jpg';
import portfolioGranjaChalana from '@/assets/portfolio-granja-chalana.jpg';
import portfolioSeveroTransportes from '@/assets/portfolio-severo-transportes.jpg';
import portfolioStaffDJ from '@/assets/portfolio-staff-dj-casagrande.jpg';
import portfolioCatequista from '@/assets/portfolio-catequista.jpg';
import portfolioOutubroRosa from '@/assets/portfolio-outubro-rosa.jpg';
import portfolioFDTransportes from '@/assets/portfolio-fd-transportes.jpg';
import portfolioPoloCarBox from '@/assets/portfolio-polo-carbox.jpg';
import portfolioAthena from '@/assets/portfolio-athena.jpg';
import portfolioVoluntarios from '@/assets/portfolio-voluntarios.jpg';
import portfolioTransMedeiros from '@/assets/portfolio-trans-medeiros.jpg';

// Portfolio items with real work examples
const portfolioItems = [{
  id: 1,
  title: 'Uniformes Time Águia FC',
  category: 'esportivo',
  image: portfolioTimeAguia,
  description: 'Uniformes completos para time de futebol com design moderno e tecidos de alta performance.'
}, {
  id: 2,
  title: 'Camisetas Festival Música',
  category: 'eventos',
  image: portfolioFestival,
  description: 'Camisetas personalizadas para festival de música com 5 mil unidades produzidas.'
}, {
  id: 3,
  title: 'Uniformes Empresa Tech',
  category: 'corporativo',
  image: portfolioTech,
  description: 'Uniformes corporativos elegantes para empresa de tecnologia com 200 colaboradores.'
}, {
  id: 4,
  title: 'Camisetas Personalizadas Loja',
  category: 'personalizado',
  image: portfolioLoja,
  description: 'Linha de camisetas personalizadas para revenda em loja de roupas.'
}, {
  id: 5,
  title: 'Uniformes Basquete Feminino',
  category: 'esportivo',
  image: portfolioBasquete,
  description: 'Uniformes para equipe feminina de basquete com design exclusivo.'
}, {
  id: 6,
  title: 'Camisetas Conferência Tech',
  category: 'eventos',
  image: portfolioFestival,
  description: 'Camisetas para conferência de tecnologia com estampa especial.'
}, {
  id: 7,
  title: 'Uniformes Rede Farmácias',
  category: 'corporativo',
  image: portfolioFarmacia,
  description: 'Uniformes padronizados para rede de farmácias com 50 lojas.'
}, {
  id: 8,
  title: 'Camisetas Banda Rock',
  category: 'personalizado',
  image: portfolioLoja,
  description: 'Camisetas de banda com estampa criativa para venda em shows.'
}, {
  id: 9,
  title: 'Camisetas Grupo Religioso',
  category: 'eventos',
  image: portfolioCamisetaReligiosa,
  description: 'Camisetas personalizadas para grupo religioso com estampa sublimática de alta qualidade.'
}, {
  id: 10,
  title: 'Camisetas Polimed 30 Anos',
  category: 'corporativo',
  image: portfolioPolimed,
  description: 'Camisetas comemorativas para celebração de 30 anos da empresa Polimed.'
}, {
  id: 11,
  title: 'Camisa Polo Asia Club',
  category: 'corporativo',
  image: portfolioPoloAsiaClub,
  description: 'Uniformes polo elegantes para empresa com bordados personalizados.'
}, {
  id: 12,
  title: 'Jaqueta Corta-Vento Matech',
  category: 'corporativo',
  image: portfolioJaquetaMatech,
  description: 'Jaquetas corta-vento com sublimação total para empresa de tecnologia.'
}, {
  id: 13,
  title: 'Jaqueta Pro Campo',
  category: 'corporativo',
  image: portfolioJaquetaProCampo,
  description: 'Jaquetas corta-vento para empresa do agronegócio com design exclusivo.'
}, {
  id: 14,
  title: 'Uniformes Brizola Pinturas',
  category: 'corporativo',
  image: portfolioBrizola,
  description: 'Uniformes profissionais para empresa de pinturas com malha respirável.'
}, {
  id: 15,
  title: 'Camisetas Fly Donuts & Pizza',
  category: 'corporativo',
  image: portfolioFlyDonuts,
  description: 'Uniformes clean e modernos para restaurante com logo bordado.'
}, {
  id: 16,
  title: 'Camisetas Pilates Personalizadas',
  category: 'personalizado',
  image: portfolioPilates,
  description: 'Camisetas personalizadas para estúdio de pilates com sublimação total.'
}, {
  id: 17,
  title: 'Camisetas Usiplast 23 Anos',
  category: 'corporativo',
  image: portfolioUsiplast,
  description: 'Camisetas comemorativas para celebração de 23 anos da empresa.'
}, {
  id: 18,
  title: 'Camisetas Pantanal Summit 2025',
  category: 'eventos',
  image: portfolioPantanal,
  description: 'Camisetas para evento corporativo com design exclusivo e tecnologia dry-fit.'
}, {
  id: 19,
  title: 'Camisetas Granja Chalana',
  category: 'corporativo',
  image: portfolioGranjaChalana,
  description: 'Uniformes para empresa do agronegócio com estampa sublimática em alta definição.'
}, {
  id: 20,
  title: 'Camisetas Severo Transportes',
  category: 'corporativo',
  image: portfolioSeveroTransportes,
  description: 'Uniformes para empresa de transportes com design criativo e sublimação total.'
}, {
  id: 21,
  title: 'Camisetas Staff DJ Casagrande',
  category: 'eventos',
  image: portfolioStaffDJ,
  description: 'Uniformes de equipe para eventos com design clean e profissional.'
}, {
  id: 22,
  title: 'Camisetas Catequista',
  category: 'eventos',
  image: portfolioCatequista,
  description: 'Camisetas para grupo religioso com estampas vibrantes e coloridas.'
}, {
  id: 23,
  title: 'Camisetas Outubro Rosa',
  category: 'eventos',
  image: portfolioOutubroRosa,
  description: 'Camisetas para campanha social com estampa delicada e significativa.'
}, {
  id: 24,
  title: 'Camisetas FD Transportes',
  category: 'corporativo',
  image: portfolioFDTransportes,
  description: 'Uniformes corporativos para empresa de transportes e turismo.'
}, {
  id: 25,
  title: 'Polo Car Box',
  category: 'corporativo',
  image: portfolioPoloCarBox,
  description: 'Uniformes polo elegantes para empresa automotiva com bordado premium.'
}, {
  id: 26,
  title: 'Camisetas Athena',
  category: 'personalizado',
  image: portfolioAthena,
  description: 'Camisetas personalizadas com design artístico e detalhes em dourado.'
}, {
  id: 27,
  title: 'Camisetas Voluntários',
  category: 'eventos',
  image: portfolioVoluntarios,
  description: 'Uniformes para grupo de voluntários com design inspirador e motivacional.'
}, {
  id: 28,
  title: 'Camisetas Trans Medeiros',
  category: 'corporativo',
  image: portfolioTransMedeiros,
  description: 'Uniformes para empresa de transportes com design arrojado e moderno.'
}];
const categories = [{
  id: 'todos',
  name: 'Todos'
}, {
  id: 'esportivo',
  name: 'Esportivo'
}, {
  id: 'corporativo',
  name: 'Corporativo'
}, {
  id: 'eventos',
  name: 'Eventos'
}, {
  id: 'personalizado',
  name: 'Personalizado'
}];
const categoryColors = {
  esportivo: 'bg-green-100 text-green-800',
  corporativo: 'bg-blue-100 text-blue-800',
  eventos: 'bg-purple-100 text-purple-800',
  personalizado: 'bg-orange-100 text-orange-800'
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
export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const filteredItems = portfolioItems.filter(item => selectedCategory === 'todos' || item.category === selectedCategory);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-950">
            Nosso Portfólio
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-950">
            Conheça alguns dos projetos que desenvolvemos com carinho e qualidade. 
            Cada peça conta uma história única de parceria e excelência.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-primary/10'}`}>
                {category.name}
              </button>)}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => <Dialog key={item.id}>
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
                          {categories.find(c => c.id === item.category)?.name}
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
                          {categories.find(c => c.id === item.category)?.name}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="pt-4">
                        <Button asChild className="cta-whatsapp w-full">
                          <a 
                            href={`https://wa.me/554626041806?text=${encodeURIComponent(`Olá, tenho interesse em fazer algo assim: ${item.title}`)}`}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center gap-2"
                            onClick={() => handleWhatsAppClick(`Portfolio - ${item.title}`)}
                          >
                            <MessageCircle size={18} />
                            Quero Algo Assim
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>)}
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
            Gostou do nosso trabalho?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos criar algo incrível juntos. 
            Cada projeto é único e desenvolvido com atenção aos detalhes.
          </p>
          
          <Button asChild className="cta-whatsapp">
            <a 
              href="https://wa.me/554626041806" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 mx-auto w-fit"
              onClick={() => handleWhatsAppClick('CTA Final Portfolio')}
            >
              <MessageCircle size={20} />
              Iniciar Meu Projeto
            </a>
          </Button>
        </div>
      </section>
    </div>;
}
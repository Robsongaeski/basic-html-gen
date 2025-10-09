import { MessageSquare, Award, Users, Heart, Clock, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import heroImage from '@/assets/hero-confeccao.jpg';
import teamEquipe from '@/assets/team-equipe.jpg';
import teamFabrica from '@/assets/team-fabrica.jpg';
import teamValores from '@/assets/team-valores.jpg';
const values = [{
  title: 'Qualidade',
  description: 'Comprometimento com excelência em cada peça produzida, desde a escolha do tecido até o acabamento final.',
  icon: Award
}, {
  title: 'Personalização',
  description: 'Adaptamos cada projeto às necessidades específicas do cliente, criando soluções únicas e exclusivas.',
  icon: Target
}, {
  title: 'Prazo',
  description: 'Cumprimos os prazos estabelecidos com rigor, garantindo que seu projeto seja entregue no tempo certo.',
  icon: Clock
}, {
  title: 'Parceria',
  description: 'Construímos relacionamentos duradouros, acompanhando nossos clientes em cada etapa do processo.',
  icon: Heart
}];
const team = [{
  name: 'Nossa Equipe',
  role: 'Produção e Qualidade',
  image: teamEquipe
}, {
  name: 'Nossa Fábrica',
  role: 'Estrutura Moderna',
  image: teamFabrica
}, {
  name: 'Nossos Valores',
  role: 'Comprometimento Total',
  image: teamValores
}];
export default function QuemSomos() {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Sobre a Gatha Confecções" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative container-responsive">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Quem Somos
            </h1>
            
            <p className="text-xl text-white mb-8 leading-relaxed max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              A Gatha Confecções nasceu da paixão por criar peças únicas com qualidade superior. 
              Somos uma empresa familiar que cresceu mantendo o carinho artesanal em cada produção.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Fundada em Pato Branco - PR, a Gatha Confecções começou como um sonho familiar de 
                criar uniformes e peças personalizadas com a qualidade e atenção aos detalhes que 
                apenas uma produção própria pode oferecer.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Com o passar dos anos, crescemos mantendo nossos valores fundamentais: qualidade 
                superior, atendimento personalizado e prazos confiáveis. Nossa fábrica própria nos 
                permite ter controle total sobre cada etapa da produção, garantindo que cada cliente 
                receba exatamente o que espera.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoje, atendemos desde pequenas empresas locais até grandes eventos e equipes esportivas, 
                sempre com o mesmo comprometimento com a excelência que nos trouxe até aqui. 
                Nossa missão é transformar ideias em realidade através de peças que contam histórias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="section-padding bg-secondary">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Os pilares que guiam nossa forma de trabalhar e nos relacionar com nossos clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => <div key={value.title} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossa Estrutura
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça a estrutura que nos permite entregar qualidade superior
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(member => <div key={member.name} className="card-service text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Produção Própria */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-950">
              Produção Própria
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-zinc-950">
              Nossa fábrica própria em Pato Branco - PR nos permite ter controle total sobre 
              qualidade, prazos e personalização. Cada peça passa por rigoroso controle de qualidade 
              antes de chegar às suas mãos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <p className="text-zinc-950">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-zinc-950">Produção Própria</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <p className="text-zinc-950">Projetos Entregues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-secondary">
        <div className="container-responsive text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar a materializar suas ideias 
            com a qualidade e carinho que só a Gatha Confecções oferece.
          </p>
          
          <Button asChild className="cta-whatsapp">
            <a 
              href="https://wa.me/554626041806" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 mx-auto w-fit"
              onClick={() => handleWhatsAppClick('CTA Final QuemSomos')}
            >
              <MessageSquare size={20} />
              Conversar Conosco
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </section>
    </div>;
}
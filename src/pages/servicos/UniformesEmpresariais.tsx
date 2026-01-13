import { useMemo } from 'react';
import { MessageSquare, Building2, Users, Timer, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProcessStep from '@/components/sections/ProcessStep';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import { getRandomPortfolioByCategory } from '@/lib/portfolioData';
import empresariaisImage from '@/assets/uniformes-empresariais.jpg';
import briefingImage from '@/assets/process-briefing.jpg';
import designImage from '@/assets/process-design.jpg';
import productionImage from '@/assets/process-production.jpg';
import deliveryImage from '@/assets/process-delivery.jpg';

export default function UniformesEmpresariais() {
  const portfolioExamples = useMemo(() => getRandomPortfolioByCategory('corporativo', 3), []);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={empresariaisImage} alt="Uniformes Empresariais Gatha" loading="eager" fetchPriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative container-responsive">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Uniformes Empresariais
            </h1>
            
            <p className="text-xl text-gray-200 mb-6 leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Vista sua equipe com elegância e profissionalismo. Uniformes corporativos sob medida 
              que fortalecem a identidade da empresa e transmitem confiança aos clientes.
            </p>
            
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 max-w-2xl">
              <li className="flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <CheckCircle size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm">Fortalece identidade corporativa</span>
              </li>
              <li className="flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <CheckCircle size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm">Tecidos de qualidade superior</span>
              </li>
              <li className="flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <CheckCircle size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm">Modelagens profissionais</span>
              </li>
              <li className="flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <CheckCircle size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm">Bordado ou estampa de logo</span>
              </li>
              <li className="flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <CheckCircle size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm">Padronização da equipe</span>
              </li>
              <li className="flex items-center gap-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                <CheckCircle size={16} className="text-accent flex-shrink-0" />
                <span className="text-sm">Durabilidade garantida</span>
              </li>
            </ul>
            
            <Button asChild className="cta-whatsapp text-lg px-8 py-4">
              <a 
                href="https://wa.me/554626041806" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3"
                onClick={() => handleWhatsAppClick('Hero Uniformes Empresariais')}
              >
                <MessageSquare size={20} />
                Vestir Minha Equipe
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Soluções Corporativas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-service">
              <h3 className="font-semibold text-lg text-foreground mb-4">Peças</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Camisas Polo</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Camisetas</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Aventais</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Jalecos</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Jaquetas</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Corta vento</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Calças</span>
                </li>
              </ul>
            </div>
            
            <div className="card-service">
              <h3 className="font-semibold text-lg text-foreground mb-4">Tecidos</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Piquet</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Oxford</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Microfibra</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Algodão Premium</span>
                </li>
              </ul>
            </div>
            
            <div className="card-service">
              <h3 className="font-semibold text-lg text-foreground mb-4">Personalização</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Logo bordado</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Nome do funcionário</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Cargo/função</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Silk premium</span>
                </li>
              </ul>
            </div>
            
            <div className="card-service">
              <h3 className="font-semibold text-lg text-foreground mb-4">Tamanhos</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">PP ao GGG</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Plus Size</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Modelagens especiais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-secondary">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empresas que Confiam
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exemplos de uniformes que produzimos para diversas empresas
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
              Processo Corporativo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvimento profissional desde o conceito até a entrega final
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <ProcessStep 
              step={1}
              title="Briefing Corporativo"
              description="Conversamos sobre suas necessidades, quantidade, prazo e especificações do projeto."
              icon={MessageSquare}
              image={briefingImage}
            />
            <ProcessStep 
              step={2}
              title="Desenvolvimento"
              description="Criamos protótipo com cores e aplicações da marca."
              icon={Building2}
              image={designImage}
            />
            <ProcessStep 
              step={3}
              title="Produção"
              description="Confeccionamos com foco na padronização e qualidade."
              icon={Users}
              image={productionImage}
            />
            <ProcessStep 
              step={4}
              title="Entrega"
              description="Sua equipe vestida com elegância e profissionalismo."
              icon={CheckCircle}
              image={deliveryImage}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Dúvidas Corporativas
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card-service">
              <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Qual o pedido mínimo para uniformes empresariais?
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">
                Trabalhamos a partir de 1 peça. Para empresas, oferecemos condições especiais para grandes volumes.
              </p>
            </div>
            
            <div className="card-service">
              <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Vocês fazem prova de peça antes da produção?
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">
                Sim! Produzimos uma peça piloto para aprovação antes de iniciar a produção completa.
              </p>
            </div>
            
            <div className="card-service">
              <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Como funciona a aplicação do logo da empresa?
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">
                Fazemos bordado de alta qualidade ou silk premium, dependendo do tecido e resultado desejado.
              </p>
            </div>
            
            <div className="card-service">
              <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Qual o prazo de entrega para uniformes corporativos?
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">
                Entre 7 a 20 dias úteis após aprovação do piloto, dependendo da quantidade e complexidade.
              </p>
            </div>
            
            <div className="card-service">
              <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Vocês atendem empresas de todos os segmentos?
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">
                Sim! Atendemos desde pequenas empresas até grandes corporações, adaptando-nos a cada segmento.
              </p>
            </div>
            
            <div className="card-service">
              <h3 className="font-semibold text-foreground mb-3 flex items-start gap-2">
                <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                É possível fazer reposições futuras com as mesmas especificações?
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">
                Claro! Mantemos ficha técnica de todos os projetos para facilitar reposições futuras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-950">
            Pronto para profissionalizar sua equipe?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-950">
            Uniforme corporativo de qualidade é investimento na imagem da empresa. 
            Vamos criar a identidade visual perfeita para seu negócio.
          </p>
          
          <Button asChild className="cta-whatsapp text-lg px-8 py-4">
            <a 
              href="https://wa.me/554626041806" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 mx-auto w-fit"
              onClick={() => handleWhatsAppClick('CTA Final Uniformes Empresariais')}
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
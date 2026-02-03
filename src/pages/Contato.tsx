import { MessageSquare, Clock, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import GoogleMap from '@/components/ui/google-map';
import SEOHead from '@/components/seo/SEOHead';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export default function Contato() {
  return (
    <>
      <SEOHead 
        title="Contato"
        description="Entre em contato com a Gatha Confecções. Estamos em Pato Branco - PR. WhatsApp: (46) 2604-1806. Horário: Segunda a Sexta, 8h às 17:30h."
        url="/contato"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: 'Início', url: '/' },
        { name: 'Contato', url: '/contato' }
      ]} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-hero text-white" aria-labelledby="contact-heading">
          <div className="container-responsive text-center">
            <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6 text-gray-950">
              Entre em Contato
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-950">
              Estamos prontos para atender você e transformar suas ideias em realidade. 
              Fale conosco pelo WhatsApp e receba atendimento personalizado!
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding bg-background" aria-label="Formas de contato">
          <div className="container-responsive">
            {/* WhatsApp Highlight */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-8 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <MessageSquare className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Faça uma Visita ou chame no WhatsApp</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">Chame nossa equipe pelo WhatsApp ou venha nos visitar.</p>
                
                <Button asChild className="cta-whatsapp text-lg px-8 py-4">
                  <a href="https://wa.me/554626041806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mx-auto w-fit" onClick={() => handleWhatsAppClick('Hero Contato')}>
                    <MessageSquare size={20} />
                    Iniciar Conversa
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Horários */}
              <article className="card-service text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Horários de Atendimento
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Segunda a Sexta</p>
                  <p className="font-medium">8h às 17:30h</p>
                </div>
              </article>

              {/* Localização */}
              <article className="card-service text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Nossa Localização
                </h3>
                <address className="text-muted-foreground not-italic">
                  <p>Rua Pio XII 420 - Centro</p>
                  <p>Pato Branco - PR</p>
                  <p>Brasil</p>
                </address>
              </article>

              {/* Redes Sociais */}
              <article className="card-service text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Redes Sociais
                </h3>
                <div className="space-y-2">
                  <a href="https://instagram.com/gathaconfeccao" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={16} aria-hidden="true" />
                    @gathaconfeccao
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-secondary" aria-labelledby="map-heading">
          <div className="container-responsive">
            <div className="max-w-4xl mx-auto">
              <h2 id="map-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Nossa Localização</h2>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="mb-6">
                  <GoogleMap address="Rua Pio XII 420, Centro, Pato Branco, PR, Brasil" className="shadow-md" />
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-xl text-foreground mb-2">
                    Pato Branco - Paraná
                  </h3>
                  <address className="text-muted-foreground mb-4 not-italic">
                    Rua Pio XII 420 - Centro - Pato Branco - PR
                  </address>
                  <p className="text-muted-foreground mb-6">
                    Localizada no sudoeste do Paraná, nossa fábrica atende toda a região e 
                    realiza entregas para todo o Brasil através dos Correios e transportadoras.
                  </p>
                  
                  <Button asChild variant="outline">
                    <a href="https://wa.me/554626041806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mx-auto w-fit" onClick={() => handleWhatsAppClick('Mapa - Como Chegar')}>
                      <MessageSquare size={16} />
                      Como Chegar
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-hero text-white" aria-labelledby="final-cta-heading">
          <div className="container-responsive text-center">
            <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-950">
              Vamos começar seu projeto?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-950">
              Entre em contato agora mesmo e receba atendimento personalizado. 
              Estamos ansiosos para conhecer suas ideias e transformá-las em realidade.
            </p>
            
            <Button asChild className="cta-whatsapp text-lg px-8 py-4">
              <a href="https://wa.me/554626041806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mx-auto w-fit" onClick={() => handleWhatsAppClick('CTA Final Contato')}>
                <MessageSquare size={20} />
                Começar Agora
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

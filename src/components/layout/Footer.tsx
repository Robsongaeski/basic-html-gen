import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, MapPin, Clock, Phone } from 'lucide-react';
const footerLinks = {
  servicos: [{
    name: 'Camisetas Personalizadas',
    href: '/servicos/camisetas-personalizadas'
  }, {
    name: 'Uniformes Esportivos',
    href: '/servicos/uniformes-esportivos'
  }, {
    name: 'Uniformes Empresariais',
    href: '/servicos/uniformes-empresariais'
  }, {
    name: 'Camisetas para Eventos',
    href: '/servicos/camisetas-para-eventos'
  }],
  empresa: [{
    name: 'Quem Somos',
    href: '/quem-somos'
  }, {
    name: 'Portfólio',
    href: '/portfolio'
  }, {
    name: 'FAQ',
    href: '/faq'
  }, {
    name: 'Contato',
    href: '/contato'
  }],
  legal: [{
    name: 'Política de Privacidade',
    href: '/politica-de-privacidade'
  }, {
    name: 'Termos de Uso',
    href: '/termos-de-uso'
  }]
};
export default function Footer() {
  return <footer className="bg-secondary border-t border-border">
      <div className="container-responsive">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre a Gatha */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-hero text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold">
                G
              </div>
              <span className="font-bold text-lg">Gatha Confecções</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Uniformes e peças personalizadas com qualidade, agilidade e carinho de fábrica.
              Produção própria em Pato Branco - PR.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/554626041806" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors">
                <MessageCircle size={18} />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
              <a href="https://instagram.com/gathaconfeccao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={18} />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Produtos</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Rua Pio XII 420
Pato Branco - PR</p>
                  <p>Brasil</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Seg - Sex: 8h às 17:30h</p>
                  
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>(46) 3025-2480</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gatha Confecções. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map(link => <Link key={link.name} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.name}
              </Link>)}
          </div>
        </div>
      </div>
    </footer>;
}
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gathaLogo from '@/assets/gatha-logo.png';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Portfólio', href: '/portfolio' },
  { name: 'Quem Somos', href: '/quem-somos' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border backdrop-blur-md bg-background/95">
      <nav className="container-responsive flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={gathaLogo} 
            alt="Gatha Confecções" 
            className="h-14 w-auto md:h-16"
          />
          <span className="font-bold text-xl md:text-2xl text-foreground">Gatha Confecções</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* WhatsApp CTA Desktop */}
        <div className="hidden md:block">
          <Button asChild className="cta-whatsapp">
            <a
              href="https://wa.me/554626041806"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="cta-whatsapp w-full">
                <a
                  href="https://wa.me/554626041806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
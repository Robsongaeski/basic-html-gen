import { MessageCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { handleWhatsAppClick } from '@/lib/fbPixel';

export default function WhatsAppFloat() {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <a
      href="https://wa.me/554626041806"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 cta-whatsapp flex items-center justify-center w-14 h-14 rounded-full shadow-lg animate-pulse"
      aria-label="Falar no WhatsApp"
      onClick={() => handleWhatsAppClick('WhatsApp Float Button')}
    >
      <MessageCircle size={24} />
    </a>
  );
}
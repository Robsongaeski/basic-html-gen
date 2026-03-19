import { MessageCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <a
      href={getWhatsAppLink(WHATSAPP_MESSAGES.GENERIC)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: '#25D366', color: '#ffffff' }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20BA5A'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
      aria-label="Falar no WhatsApp"
      onClick={() => handleWhatsAppClick('WhatsApp Float Button')}
    >
      <MessageCircle size={24} />
    </a>
  );
}
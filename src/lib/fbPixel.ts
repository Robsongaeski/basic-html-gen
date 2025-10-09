// Facebook Pixel tracking utility

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const trackLeadEvent = (eventName?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: eventName || 'WhatsApp Contact',
      source: 'website'
    });
  }
};

export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

export const handleWhatsAppClick = (source: string) => {
  trackLeadEvent(`WhatsApp Click - ${source}`);
};

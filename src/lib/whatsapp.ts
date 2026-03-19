export const WHATSAPP_PHONE = '554626041806';

export const getWhatsAppLink = (message?: string) => {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE}`;
  if (!message) return baseUrl;
  
  const encodedText = encodeURIComponent(message);
  return `${baseUrl}?text=${encodedText}`;
};

export const WHATSAPP_MESSAGES = {
  GENERIC: 'Olá! Estou no site e tenho uma dúvida. Pode me ajudar?',
  QUOTE: 'Olá! Estou no site e gostaria de solicitar um orçamento personalizado. Como procedemos?',
  PORTFOLIO: 'Olá! Vi seu portfólio no site e gostaria de conversar sobre um projeto.',
  CONTACT: 'Olá! Estou entrando em contato através da página de contato do site.',
  SERVICE: (serviceName: string) => `Olá! Estou no site e gostaria de saber mais sobre ${serviceName}.`,
};

export interface Testimonial {
  name: string;
  company: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Geane Barboza',
    company: 'Cliente',
    content: 'Gente, pra você que está procurando uma empresa de confiança pra fazer uniformes, eu super recomendo a Gatha Confecções!'
  },
  {
    name: 'RH Usiplast',
    company: 'Usiplast',
    content: 'Ficamos muito satisfeitos com o atendimento e a qualidade dos produtos. O cuidado, a pontualidade e o carinho no trabalho fazem toda a diferença. Recomendo de olhos fechados!'
  },
  {
    name: 'Administrativo APAC',
    company: 'APAC - PB',
    content: 'Ótimo produto, os tamanhos estava conforme o pedido, vendedora muito atenciosa com o atendimento, prestativa. Agradeço a atenção e agilidade.'
  },
  {
    name: 'Gemio Mf2',
    company: 'Cliente',
    content: 'Melhor atendimento produto perfeito valor maravilhoso fiz esse moletom para trabalhar de segurança ficou top'
  },
  {
    name: 'Fran Dias',
    company: 'Fotografias Afetivas',
    content: 'Uniformes de alta qualidade, e Exelente acabamento, super Recomendo.'
  },
  {
    name: 'Pamela',
    company: 'DFT',
    content: 'Adoramos as camisetas DFT qualidade muito boa do tecido, atendimento e agilidade pra entregar as peças foram ótimas, super recomendo.'
  },
  {
    name: 'Claudia Natalina de Oliveira',
    company: 'Clau Natalyna',
    content: 'Empresa muito focada para atender bem o cliente, produtos maravilhosos com excelente qualidade, sempre adquiro camisetas e moletons e super recomendo.'
  },
  {
    name: 'Emely Roman',
    company: 'Cliente',
    content: 'Qualidade impecável, ótimo atendimento. E preciso ressaltar a agilidade! Ao entrar em contato com eles, prontamente se dispuseram a me atender e entregar as camisetas na data prevista. Amamos as camisetas!!!'
  },
  {
    name: 'Laerti Risso',
    company: 'Cliente',
    content: 'Empresa com excelência em confecções. Produtos de primeira linha, durabilidade impar e atendimento diferenciado! A camiseta personalisada que pedi ficou ótima! Recomendo...'
  }
];

/**
 * Retorna depoimentos aleatórios
 * @param count - Número de depoimentos a retornar (padrão: 3)
 * @returns Array de depoimentos randomizados
 */
export function getRandomTestimonials(count: number = 3): Testimonial[] {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, testimonials.length));
}

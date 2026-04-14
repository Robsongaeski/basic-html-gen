import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/sections/TestimonialCard';
import SEOHead from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import { portfolioProducts } from '@/lib/portfolioData';
import { getWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'esportivo', name: 'Esportivo' },
  { id: 'corporativo', name: 'Corporativo' },
  { id: 'eventos', name: 'Eventos' },
  { id: 'terceirao', name: 'Terceirão' },
  { id: 'personalizado', name: 'Personalizado' },
] as const;

const categoryColors: Record<string, string> = {
  esportivo: 'bg-green-100 text-green-800',
  corporativo: 'bg-blue-100 text-blue-800',
  eventos: 'bg-violet-100 text-violet-800',
  terceirao: 'bg-pink-100 text-pink-800',
  personalizado: 'bg-orange-100 text-orange-800',
};

const testimonials = [
  {
    name: 'Geane Barboza',
    company: 'Cliente',
    content: 'Se você está procurando uma empresa de confiança para fazer uniformes, eu recomendo muito a Gatha Confecções.',
    rating: 5,
  },
  {
    name: 'RH Usiplast',
    company: 'Usiplast',
    content: 'Ficamos muito satisfeitos com o atendimento e com a qualidade dos produtos. O cuidado, a pontualidade e o carinho no trabalho fazem toda a diferença.',
    rating: 5,
  },
  {
    name: 'Emely Roman',
    company: 'Cliente',
    content: 'Qualidade impecável e muita agilidade. Fomos atendidos com rapidez e as camisetas chegaram na data prevista.',
    rating: 5,
  },
];

function shuffleArray<T>(array: T[]) {
  const shuffled = [...array];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const shuffledPortfolio = useMemo(() => shuffleArray(portfolioProducts), []);
  const filteredItems = shuffledPortfolio.filter(
    (item) => selectedCategory === 'todos' || item.category === selectedCategory,
  );

  return (
    <>
      <SEOHead
        title="Portfólio"
        description="Veja o portfólio da Gatha Confecções com produtos personalizados, páginas individuais dos modelos e atendimento direto pelo WhatsApp."
        url="/portfolio"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Início', url: '/' },
          { name: 'Portfólio', url: '/portfolio' },
        ]}
      />

      <div className="min-h-screen bg-background">
        <section className="section-padding bg-[linear-gradient(135deg,rgba(8,47,73,1),rgba(29,78,216,0.92))] text-white">
          <div className="container-responsive text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">Portfólio Gatha</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              Modelos reais para inspirar seu próximo pedido
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              Explore os produtos da Gatha com página própria, imagem ampliada, descrição detalhada e acesso rápido ao WhatsApp para transformar uma referência em orçamento.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-responsive">
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-6 py-2 font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={item.slug}
                  className="overflow-hidden rounded-[30px] border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Link to={`/portfolio/${item.slug}`} className="block">
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>

                  <div className="space-y-4 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${categoryColors[item.category]}`}>
                        {item.categoryLabel}
                      </span>
                      <Link
                        to={`/portfolio/${item.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        Ver detalhes
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline">
                        <Link to={`/portfolio/${item.slug}`}>Abrir página do produto</Link>
                      </Button>
                      <Button asChild className="cta-whatsapp">
                        <a
                          href={getWhatsAppLink(item.ctaMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                          onClick={() => handleWhatsAppClick(`Portfolio Card - ${item.title}`)}
                        >
                          <MessageCircle size={17} />
                          Quero algo assim
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/35">
          <div className="container-responsive">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Quem compra com a Gatha recomenda</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Atendimento próximo, qualidade de impressão e acabamento que fazem o cliente voltar.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-responsive">
            <div className="rounded-[32px] bg-[linear-gradient(135deg,rgba(15,23,42,1),rgba(30,41,59,0.96))] px-6 py-10 text-center text-white shadow-[var(--shadow-card)] md:px-10">
              <h2 className="text-3xl font-bold md:text-4xl">Tem um modelo em mente?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/75">
                Envie sua referência no WhatsApp e vamos adaptar o produto ideal para sua marca, equipe, evento ou turma.
              </p>
              <Button asChild className="cta-whatsapp mt-8">
                <a
                  href={getWhatsAppLink(WHATSAPP_MESSAGES.PORTFOLIO)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  onClick={() => handleWhatsAppClick('CTA Final Portfolio')}
                >
                  <MessageCircle size={18} />
                  Falar com a equipe agora
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

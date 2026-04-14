import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Expand, MessageCircle, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/seo/SEOHead';
import { BreadcrumbSchema, ProductSchema } from '@/components/seo/StructuredData';
import { handleWhatsAppClick } from '@/lib/fbPixel';
import { getRelatedPortfolioProducts, getPortfolioProductBySlug } from '@/lib/portfolioData';
import { getWhatsAppLink } from '@/lib/whatsapp';
import NotFound from './NotFound';

const categoryColors: Record<string, string> = {
  esportivo: 'bg-green-100 text-green-800',
  corporativo: 'bg-blue-100 text-blue-800',
  eventos: 'bg-violet-100 text-violet-800',
  terceirao: 'bg-pink-100 text-pink-800',
  personalizado: 'bg-orange-100 text-orange-800',
};

const sellingPoints = [
  {
    title: 'Produção própria',
    description: 'Mais controle de qualidade, acabamento e prazo em cada pedido.',
    icon: ShieldCheck,
  },
  {
    title: 'Visual que valoriza',
    description: 'Peças desenvolvidas para destacar a identidade da sua marca.',
    icon: Sparkles,
  },
  {
    title: 'Atendimento ágil',
    description: 'Você fala direto com nossa equipe no WhatsApp para alinhar detalhes e receber seu orçamento com rapidez.',
    icon: Truck,
  },
];

export default function PortfolioProduto() {
  const { slug } = useParams();
  const product = slug ? getPortfolioProductBySlug(slug) : undefined;
  const [zoomStyle, setZoomStyle] = useState({ backgroundPosition: '50% 50%' });

  if (!product) {
    return <NotFound />;
  }

  const relatedProducts = getRelatedPortfolioProducts(product, 3);
  const productUrl = `/portfolio/${product.slug}`;

  const updateZoom = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setZoomStyle({ backgroundPosition: `${x}% ${y}%` });
  };

  return (
    <>
      <SEOHead
        title={product.seoTitle}
        description={product.seoDescription}
        image={product.image}
        url={productUrl}
        type="product"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Portfólio', url: '/portfolio' },
          { name: product.title, url: productUrl },
        ]}
      />
      <ProductSchema
        name={product.title}
        description={product.seoDescription}
        image={product.image}
        url={productUrl}
        category={product.categoryLabel}
        keywords={product.keywords}
      />

      <div className="min-h-screen bg-background">
        <section className="border-b border-border bg-slate-950 text-white">
          <div className="container-responsive py-12 md:py-16">
            <Link
              to="/portfolio"
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Voltar para o portfólio
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="space-y-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${categoryColors[product.category]}`}
                >
                  {product.categoryLabel}
                </span>
                <div>
                  <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{product.title}</h1>
                  <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/80">{product.headline}</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Orçamento rápido</p>
                <p className="mt-3 text-base leading-relaxed text-white/80">
                  Gostou deste modelo? A equipe da Gatha pode adaptar cores, estampas, logos, nomes e acabamentos para o seu projeto.
                </p>

                <div className="mt-6 space-y-3">
                  <Button asChild className="cta-whatsapp w-full">
                    <a
                      href={getWhatsAppLink(product.ctaMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                      onClick={() => handleWhatsAppClick(`Produto - ${product.title} - Hero CTA`)}
                    >
                      <MessageCircle size={18} />
                      Pedir esse modelo no WhatsApp
                    </a>
                  </Button>

                  <Button asChild variant="outline" className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    <a href="#relacionados">Ver modelos relacionados</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-responsive">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="group relative overflow-hidden rounded-[28px] border border-border bg-secondary/40 shadow-[var(--shadow-card)]"
                        onMouseMove={updateZoom}
                      >
                        <img
                          src={product.image}
                          alt={`${product.title} da Gatha Confecções`}
                          className="h-full min-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white">
                          <Expand size={16} />
                          Ampliar imagem
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl border-none bg-black/95 p-3">
                      <img
                        src={product.image}
                        alt={`${product.title} ampliado`}
                        className="max-h-[85vh] w-full rounded-2xl object-contain"
                      />
                    </DialogContent>
                  </Dialog>

                  <div
                    className="hidden overflow-hidden rounded-[28px] border border-border bg-center shadow-[var(--shadow-card)] lg:block"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundPosition: zoomStyle.backgroundPosition,
                      backgroundSize: '220%',
                      minHeight: '100%',
                    }}
                    aria-label={`Zoom do produto ${product.title}`}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {sellingPoints.map((point) => {
                    const Icon = point.icon;

                    return (
                      <div key={point.title} className="rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                        <Icon className="mb-4 text-primary" size={24} />
                        <h2 className="font-semibold text-foreground">{point.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <h2 className="text-2xl font-bold text-foreground">Descrição do produto</h2>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">{product.longDescription}</p>

                  <div className="mt-6 grid gap-3">
                    {product.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 rounded-2xl bg-secondary/60 px-4 py-3">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                        <span className="text-sm leading-6 text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-border bg-card p-6">
                    <h2 className="text-lg font-semibold text-foreground">Por que este modelo chama atenção</h2>
                    <div className="mt-4 space-y-3">
                      {product.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-orange-500" size={17} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-card p-6">
                    <h2 className="text-lg font-semibold text-foreground">Ideal para</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.idealFor.map((item) => (
                        <span key={item} className="rounded-full bg-secondary px-3 py-2 text-sm text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(11,36,74,1),rgba(28,100,242,0.92))] p-7 text-white shadow-[var(--shadow-card)]">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Chamada para ação</p>
                  <h2 className="mt-3 text-2xl font-bold">Quer um produto nesse estilo com a identidade da sua marca?</h2>
                  <p className="mt-3 max-w-xl text-white/80">
                    Fale com a Gatha no WhatsApp para definir cores, quantidades, estampas, logos e todos os detalhes do acabamento.
                  </p>
                  <Button asChild className="cta-whatsapp mt-6">
                    <a
                      href={getWhatsAppLink(product.ctaMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                      onClick={() => handleWhatsAppClick(`Produto - ${product.title} - Middle CTA`)}
                    >
                      <MessageCircle size={18} />
                      Solicitar orçamento agora
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="relacionados" className="section-padding bg-secondary/35">
          <div className="container-responsive">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Modelos relacionados</p>
                <h2 className="mt-2 text-3xl font-bold text-foreground">Outros produtos que podem combinar com o seu projeto</h2>
              </div>
              <Button asChild variant="outline">
                <Link to="/portfolio">Explorar todo o portfólio</Link>
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((item) => (
                <article key={item.slug} className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[var(--shadow-card)]">
                  <Link to={`/portfolio/${item.slug}`} className="block">
                    <img src={item.image} alt={item.title} className="h-72 w-full object-cover" loading="lazy" decoding="async" />
                  </Link>
                  <div className="space-y-4 p-6">
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${categoryColors[item.category]}`}>
                      {item.categoryLabel}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button asChild variant="outline">
                        <Link to={`/portfolio/${item.slug}`}>Ver detalhes</Link>
                      </Button>
                      <Button asChild className="cta-whatsapp">
                        <a
                          href={getWhatsAppLink(item.ctaMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                          onClick={() => handleWhatsAppClick(`Relacionado - ${item.title}`)}
                        >
                          <MessageCircle size={17} />
                          Pedir no WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

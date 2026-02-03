

# Plano de Otimização de Performance, SEO e Discoverability por IAs

Este plano vai transformar o site da Gatha Confecções em um site rápido, otimizado para buscadores e fácil de ser encontrado por inteligências artificiais.

---

## 1. SEO e Estrutura para Buscadores

### 1.1 Dados Estruturados (Schema.org)
Adicionar marcação JSON-LD para que Google, Bing e IAs entendam melhor o negócio:

- **LocalBusiness**: Informações da empresa (nome, endereço, telefone, horários)
- **Organization**: Marca, logo, redes sociais
- **Product/Service**: Cada tipo de serviço oferecido
- **BreadcrumbList**: Navegação estruturada em cada página
- **FAQPage**: Perguntas frequentes com marcação especial

### 1.2 Meta Tags Dinâmicas por Página
Criar componente que atualiza automaticamente:
- Title único para cada página
- Meta description específica
- Open Graph tags dinâmicas
- Canonical URLs corretas

### 1.3 Sitemap XML e Robots.txt Aprimorado
- Criar `sitemap.xml` com todas as páginas e prioridades
- Melhorar `robots.txt` com referência ao sitemap

---

## 2. Performance e Velocidade

### 2.1 Otimização de Imagens
- Implementar carregamento progressivo com blur placeholder
- Adicionar dimensões explícitas (width/height) para evitar layout shift
- Usar `srcset` para imagens responsivas
- Preconnect para recursos externos

### 2.2 Otimização de Carregamento
- Implementar `preload` para imagens críticas (hero)
- Adicionar `preconnect` para domínios externos (Facebook, Google Fonts)
- Lazy loading aprimorado com Intersection Observer

### 2.3 Redução de JavaScript Inicial
- Implementar code splitting por rotas (React.lazy)
- Suspense boundaries para carregamento progressivo
- Carregar componentes pesados sob demanda

---

## 3. Acessibilidade e Discoverability por IAs

### 3.1 Marcação Semântica
- Usar tags HTML5 corretas (article, section, nav, aside, main)
- Headings hierárquicos (h1, h2, h3) bem estruturados
- Atributos ARIA onde necessário
- Alt text descritivo em todas as imagens

### 3.2 Conteúdo para Buscas por IA
- Adicionar textos alternativos ricos
- Estruturar conteúdo de forma que IAs possam extrair informações
- Adicionar microdados em elementos chave

---

## 4. Core Web Vitals

### 4.1 LCP (Largest Contentful Paint)
- Preload da imagem hero
- Otimizar renderização do conteúdo principal

### 4.2 CLS (Cumulative Layout Shift)
- Definir dimensões fixas para imagens
- Reservar espaço para elementos dinâmicos
- Skeleton loading para cards

### 4.3 FID (First Input Delay)
- Diferir scripts não essenciais
- Otimizar event handlers

---

## Arquivos a Serem Criados/Modificados

| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `src/components/seo/SEOHead.tsx` | Criar | Componente para meta tags dinâmicas |
| `src/components/seo/StructuredData.tsx` | Criar | JSON-LD para dados estruturados |
| `public/sitemap.xml` | Criar | Mapa do site para buscadores |
| `public/robots.txt` | Modificar | Adicionar referência ao sitemap |
| `index.html` | Modificar | Preconnect, preload, meta tags base |
| `src/App.tsx` | Modificar | Code splitting com React.lazy |
| `src/pages/Home.tsx` | Modificar | SEO e estrutura semântica |
| `src/pages/QuemSomos.tsx` | Modificar | SEO e dados estruturados |
| `src/pages/Contato.tsx` | Modificar | LocalBusiness schema |
| `src/pages/FAQ.tsx` | Modificar | FAQPage schema |
| `src/components/ui/optimized-image.tsx` | Modificar | Blur placeholder e dimensões |
| Todas as páginas de serviços | Modificar | Product schema e SEO |

---

## Detalhes Técnicos

### Componente SEOHead
```text
- Usa react-helmet-async para gerenciar <head>
- Recebe props: title, description, image, url
- Gera Open Graph, Twitter Cards e canonical automaticamente
- Atualiza dinamicamente em cada navegação
```

### Dados Estruturados JSON-LD
```text
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gatha Confecções",
  "address": {...},
  "telephone": "(46) 2604-1806",
  "openingHours": "Mo-Fr 08:00-17:30",
  "priceRange": "$$",
  "image": "...",
  "sameAs": ["instagram", "whatsapp"]
}
```

### Code Splitting
```text
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
// Envolver em Suspense com fallback de loading
```

### Sitemap XML
```text
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="...">
  <url>
    <loc>https://gatha.com.br/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <!-- Todas as páginas com prioridades -->
</urlset>
```

---

## Benefícios Esperados

- **Google PageSpeed**: Melhoria de 20-40 pontos
- **SEO**: Melhor posicionamento nas buscas
- **IAs (ChatGPT, Gemini, etc)**: Dados estruturados facilitam extração de informações
- **Experiência do Usuário**: Carregamento mais rápido e suave
- **Core Web Vitals**: Métricas verdes para todos os indicadores


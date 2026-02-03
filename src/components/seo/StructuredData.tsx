import { Helmet } from 'react-helmet-async';

// Base company info
const companyInfo = {
  name: 'Gatha Confecções',
  url: 'https://gatha.com.br',
  logo: 'https://gatha.com.br/og-image.jpg',
  telephone: '+55 46 2604-1806',
  email: 'contato@gatha.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Pio XII, 420',
    addressLocality: 'Pato Branco',
    addressRegion: 'PR',
    postalCode: '85501-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -26.2296,
    longitude: -52.6706,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30',
    },
  ],
  sameAs: [
    'https://instagram.com/gathaconfeccao',
    'https://wa.me/554626041806',
  ],
};

// LocalBusiness Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${companyInfo.url}/#organization`,
    name: companyInfo.name,
    url: companyInfo.url,
    logo: companyInfo.logo,
    image: companyInfo.logo,
    telephone: companyInfo.telephone,
    email: companyInfo.email,
    address: companyInfo.address,
    geo: companyInfo.geo,
    openingHoursSpecification: companyInfo.openingHoursSpecification,
    sameAs: companyInfo.sameAs,
    priceRange: '$$',
    description: 'Confecção especializada em uniformes esportivos, empresariais e camisetas personalizadas com produção própria em Pato Branco - PR.',
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Confecção',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Camisetas Personalizadas',
            description: 'Camisetas com estampas exclusivas em silk screen, sublimação e DTF.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Uniformes Esportivos',
            description: 'Uniformes profissionais para equipes esportivas com tecidos de alta performance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Uniformes Empresariais',
            description: 'Uniformes corporativos sob medida para empresas de todos os portes.',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${companyInfo.url}/#organization`,
    name: companyInfo.name,
    url: companyInfo.url,
    logo: {
      '@type': 'ImageObject',
      url: companyInfo.logo,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.telephone,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    sameAs: companyInfo.sameAs,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://gatha.com.br${item.url}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// Product/Service Schema
interface ServiceSchemaProps {
  name: string;
  description: string;
  image?: string;
  category?: string;
}

export function ServiceSchema({ name, description, image, category }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: companyInfo.name,
      url: companyInfo.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    ...(image && { image }),
    ...(category && { category }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// WebSite Schema for search
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: companyInfo.name,
    url: companyInfo.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${companyInfo.url}/portfolio?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

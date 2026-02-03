import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noIndex?: boolean;
}

const BASE_URL = 'https://gatha.com.br';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = 'Gatha Confecções';

export default function SEOHead({
  title,
  description = 'Gatha Confecções produz uniformes esportivos, empresariais e camisetas personalizadas com qualidade e agilidade. Produção própria em Pato Branco - PR.',
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = 'website',
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title 
    ? `${title} | ${SITE_NAME}` 
    : `${SITE_NAME} - Uniformes e Peças Personalizadas | Pato Branco - PR`;

  const canonicalUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}

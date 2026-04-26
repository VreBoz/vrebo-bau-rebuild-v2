const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

const productionUrl = 'https://vrebo-bau.de';
const testUrl = 'https://testvrebo.de';
const siteUrl = trimTrailingSlash(import.meta.env.PUBLIC_SITE_URL ?? productionUrl);
const siteEnv = import.meta.env.PUBLIC_SITE_ENV ?? 'staging';
const explicitIndexable = import.meta.env.PUBLIC_INDEXABLE === 'true';

export const SITE = {
  name: 'Vrebo Bau',
  shortName: 'Vrebo',
  productionUrl,
  testUrl,
  url: siteUrl,
  env: siteEnv,
  isProduction: siteEnv === 'production',
  isIndexable: siteEnv === 'production' && explicitIndexable,
  language: 'de',
  locale: 'de_DE',
  defaultTitle: 'Vrebo Bau',
  titleTemplate: '%s | Vrebo Bau',
  defaultDescription:
    'Vrebo Bau begleitet Renovierung, Sanierung, Innenausbau und Badsanierung in Freilassing, Bad Reichenhall und dem Berchtesgadener Land.',
  description:
    'Regionales Bauunternehmen für Renovierung, Sanierung und Ausbau in Freilassing und Umgebung.',
  ogImage: '/images/hero/vrebo-standort-fahrzeug.webp',
  ogImageAlt: 'Vrebo Fahrzeug vor dem Standort in Freilassing',
  logo: '/images/brand/vrebo-wordmark.png',
  navigationCta: {
    label: 'Projekt anfragen',
    href: '/kontakt',
  },
  areaServed: [
    'Freilassing',
    'Bad Reichenhall',
    'Berchtesgadener Land',
    'Salzburg Umgebung',
    'Bayern',
  ],
  contact: {
    // TODO: Vor Launch echte Kontaktangaben aus final freigegebener Quelle ergänzen.
    email: '',
    phone: '',
    address: {
      streetAddress: '',
      postalCode: '',
      addressLocality: 'Freilassing',
      addressRegion: 'Bayern',
      addressCountry: 'DE',
    },
  },
  sameAs: [] as string[],
} as const;

export type SiteConfig = typeof SITE;

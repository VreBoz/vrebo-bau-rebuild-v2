export const SITE = {
  name: 'Vrebo Bau',
  shortName: 'Vrebo',
  url: 'https://vrebo-bau.de',
  language: 'de',
  locale: 'de_DE',
  defaultTitle: 'Vrebo Bau',
  defaultDescription: 'Vrebo Bau begleitet Renovierung, Sanierung und Ausbau in Freilassing und der umliegenden Region.',
  isIndexable: import.meta.env.PUBLIC_SITE_ENV === 'production',
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
} as const;

export type SiteConfig = typeof SITE;

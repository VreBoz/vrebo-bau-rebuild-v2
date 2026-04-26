export const mainNavigation = [
  {
    label: 'Startseite',
    href: '/',
  },
  {
    label: 'Leistungen',
    href: '/leistungen',
  },
  {
    label: 'Über uns',
    href: '/ueber-uns',
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
  },
] as const;

export const legalNavigation = [
  {
    label: 'Datenschutz',
    href: '/datenschutz',
  },
  {
    label: 'Impressum',
    href: '/impressum',
  },
] as const;

export const serviceNavigation = [
  {
    label: 'Renovierung und Neubau',
    navLabel: 'Renovierung & Neubau',
    slug: 'renovierung-neubau',
    href: '/leistungen/renovierung-neubau',
    optional: false,
  },
  {
    label: 'Energetische Sanierung',
    navLabel: 'Energetische Sanierung',
    slug: 'energetische-sanierung',
    href: '/leistungen/energetische-sanierung',
    optional: false,
  },
  {
    label: 'Badsanierung',
    navLabel: 'Badsanierung',
    slug: 'badsanierung',
    href: '/leistungen/badsanierung',
    optional: false,
  },
  {
    label: 'Trockenbau und Innenausbau',
    navLabel: 'Trockenbau',
    slug: 'trockenbau-innenausbau',
    href: '/leistungen/trockenbau-innenausbau',
    optional: false,
  },
  {
    label: 'Bodenverlegung',
    navLabel: 'Bodenverlegung',
    slug: 'bodenverlegung',
    href: '/leistungen/bodenverlegung',
    optional: false,
  },
  {
    label: 'Fenster und Türen',
    navLabel: 'Fenster & Türen',
    slug: 'fenster-tueren',
    href: '/leistungen/fenster-tueren',
    optional: false,
  },
  {
    label: 'Abdichtung und Feuchtigkeitsschutz',
    navLabel: 'Abdichtung',
    slug: 'abdichtung-feuchtigkeitsschutz',
    href: '/leistungen/abdichtung-feuchtigkeitsschutz',
    optional: false,
  },
  {
    label: 'Außenanlagen',
    navLabel: 'Außenanlagen',
    slug: 'aussenanlagen',
    href: '/leistungen/aussenanlagen',
    optional: false,
  },
  {
    label: 'Entrümpelung und Rückbau',
    navLabel: 'Entrümpelung & Rückbau',
    slug: 'entruempelung-rueckbau',
    href: '/leistungen/entruempelung-rueckbau',
    optional: false,
  },
  {
    label: 'Hausmeisterservice und Objektpflege',
    navLabel: 'Objektpflege',
    slug: 'hausmeisterservice-objektpflege',
    href: '/leistungen/hausmeisterservice-objektpflege',
    optional: false,
  },
] as const;

export type ServiceNavigationItem = (typeof serviceNavigation)[number];

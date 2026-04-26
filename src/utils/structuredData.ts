import { SITE } from '@/data/site';

type JsonLd = Record<string, unknown>;

type BreadcrumbItem = {
  name: string;
  path: string;
};

type WebPageInput = {
  title: string;
  description: string;
  path: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage';
};

type ServiceSchemaInput = {
  title: string;
  description: string;
  slug: string;
  areasServed: string[];
  schemaServiceType: string;
  heroImage?: {
    src: string;
    alt: string;
  };
};

const organizationId = `${SITE.url}/#organization`;
const websiteId = `${SITE.url}/#website`;
const localBusinessId = `${SITE.url}/#localbusiness`;

function compactObject<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (Array.isArray(entry)) return entry.length > 0;
      return entry !== undefined && entry !== null && entry !== '';
    }),
  ) as T;
}

export function absoluteUrl(path = '/'): string {
  return new URL(path, `${SITE.url}/`).toString();
}

export function organizationSchema(): JsonLd {
  return compactObject({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.ogImage),
    description: SITE.description,
    sameAs: SITE.sameAs,
  });
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.language,
    publisher: {
      '@id': organizationId,
    },
  };
}

export function localBusinessSchema(): JsonLd {
  const address = compactObject({
    '@type': 'PostalAddress',
    streetAddress: SITE.contact.address.streetAddress,
    postalCode: SITE.contact.address.postalCode,
    addressLocality: SITE.contact.address.addressLocality,
    addressRegion: SITE.contact.address.addressRegion,
    addressCountry: SITE.contact.address.addressCountry,
  });

  return compactObject({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': localBusinessId,
    name: SITE.name,
    url: SITE.url,
    image: absoluteUrl(SITE.ogImage),
    logo: absoluteUrl(SITE.logo),
    description: SITE.description,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    address,
    areaServed: SITE.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
  });
}

export function webPageSchema(input: WebPageInput): JsonLd {
  const url = absoluteUrl(input.path);

  return {
    '@context': 'https://schema.org',
    '@type': input.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    name: input.title,
    description: input.description,
    url,
    inLanguage: SITE.language,
    isPartOf: {
      '@id': websiteId,
    },
    publisher: {
      '@id': organizationId,
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service: ServiceSchemaInput): JsonLd {
  return compactObject({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(`/leistungen/${service.slug}`)}#service`,
    serviceType: service.schemaServiceType,
    name: service.title,
    description: service.description,
    url: absoluteUrl(`/leistungen/${service.slug}`),
    image: service.heroImage ? absoluteUrl(service.heroImage.src) : undefined,
    provider: {
      '@id': localBusinessId,
    },
    areaServed: service.areasServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
  });
}

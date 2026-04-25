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
};

export function absoluteUrl(path = '/'): string {
  return new URL(path, SITE.url).toString();
}

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    areaServed: SITE.areaServed,
  };
}

export function localBusinessSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: SITE.name,
    url: SITE.url,
    address: {
      '@type': 'PostalAddress',
      ...SITE.contact.address,
    },
    areaServed: SITE.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
  };
}

export function webPageSchema(input: WebPageInput): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': input.type ?? 'WebPage',
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.schemaServiceType,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: service.areasServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    url: absoluteUrl(`/leistungen/${service.slug}`),
  };
}

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absoluteUrl } from '@/utils/structuredData';

const staticRoutes = [
  '/',
  '/leistungen',
  '/ueber-uns',
  '/kontakt',
  '/datenschutz',
  '/impressum',
];

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = async () => {
  const services = await getCollection('services');
  const serviceRoutes = services.map((service) => `/leistungen/${service.data.slug}`);
  const routes = [...new Set([...staticRoutes, ...serviceRoutes])];

  const urls = routes
    .map((route) => {
      return [
        '  <url>',
        `    <loc>${escapeXml(absoluteUrl(route))}</loc>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

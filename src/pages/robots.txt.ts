import type { APIRoute } from 'astro';
import { SITE } from '@/data/site';
import { absoluteUrl } from '@/utils/structuredData';

export const GET: APIRoute = () => {
  const body = SITE.isIndexable
    ? [
        'User-agent: *',
        'Allow: /',
        `Sitemap: ${absoluteUrl('/sitemap.xml')}`,
        '',
      ].join('\n')
    : [
        'User-agent: *',
        'Disallow: /',
        `Sitemap: ${absoluteUrl('/sitemap.xml')}`,
        '',
      ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

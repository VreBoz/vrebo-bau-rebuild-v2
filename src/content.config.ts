import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const processStepSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    navLabel: z.string(),
    description: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    heroImage: imageSchema.optional(),
    gallery: z.array(imageSchema).default([]),
    tags: z.array(z.string()).default([]),
    intro: z.string(),
    servicesIncluded: z.array(z.string()).default([]),
    processSteps: z.array(processStepSchema).default([]),
    benefits: z.array(z.string()).default([]),
    relatedServices: z.array(z.string()).default([]),
    areasServed: z.array(z.string()).default([]),
    faq: z.array(faqSchema).default([]),
    schemaServiceType: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  services,
};

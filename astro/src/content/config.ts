import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string(),
    secondImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Sydney Chiropractor CBD'),
    featured: z.boolean().default(false),
  }),
});

const treatmentCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string(),
    secondImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Sydney Chiropractor CBD'),
  }),
});

const workshopCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    startTime: z.string(),
    heroImage: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Sydney Chiropractor CBD'),
  }),
});

export const collections = {
  'blog': blogCollection,
  'treatments': treatmentCollection,
  'workshops': workshopCollection,
}; 
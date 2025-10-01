import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    status: z.string(),
    id: z.number(),
    link: z.string(),
    excerpt: z.string(),
    thumbnail: z.string(),
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
    imageName: z.string().optional(),
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
    index: z.number(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Sydney Chiropractor CBD'),
  }),
});

export const collections = {
  'blog': blogCollection,
  'treatments': treatmentCollection,
  'workshops': workshopCollection,
}; 

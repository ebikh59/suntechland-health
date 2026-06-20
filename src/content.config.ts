import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      'hipaa-compliance',
      'hospital-attacks',
      'medical-device-security',
      'patient-data-breaches',
      'healthcare-threat-intel',
      'health-it-security',
    ]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('SunTechLand Staff'),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    source: z.string().optional(),
    severity: z.enum(['Critical', 'High', 'Medium', 'Low']).optional(),
  }),
});

export const collections = { posts };

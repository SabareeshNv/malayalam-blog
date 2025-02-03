import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const post = defineCollection({
    loader: glob({ base: './src/content/post', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        summary: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
        draft: z.boolean().default(false).optional(),
    }),
});

export const collections = { post };
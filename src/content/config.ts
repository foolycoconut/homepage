import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    href: z.string().optional(),
    featured: z.boolean().default(true),
  }),
});

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    href: z.string().optional(),
  }),
});

export const collections = { projects, writing };

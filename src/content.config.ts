import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const postsCollection = defineCollection({
  // Tells Astro v6 to find all markdown files inside src/content/posts/
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    category: z.string(),
    images: z.array(z.string()),
    amazonLink: z.string(),
    bullets: z.array(z.string()),
    isLatest: z.boolean().default(false),
    microReview: z.string().optional(),
    isMultiProduct: z.boolean().default(false),
    products: z
      .array(
        z.object({
          title: z.string(),
          image: z.string(),
          amazonLink: z.string(),
          bullets: z.array(z.string()),
          microReview: z.string().optional(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};

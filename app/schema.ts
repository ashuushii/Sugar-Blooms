import { z } from "zod";

// Define the business schema
export const businessSchema = z.object({
  name: z.string(),
  address: z.string(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
});

// Define the website schema
export const websiteSchema = z.object({
  url: z.string().url(),
  title: z.string(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
});
import z from "zod";

export const envSchema = z.object({
  POSTGRES_DATABASE: z.string().trim().min(1),
  POSTGRES_HOST: z.string().trim().min(1),
  POSTGRES_PASSWORD: z.string().trim().min(1),
  POSTGRES_PRISMA_URL: z.string().trim().min(1),
  POSTGRES_URL: z.string().trim().min(1),
  POSTGRES_URL_NON_POOLING: z.string().trim().min(1),
  NEXTAUTH_URL: z.string().trim().min(1),
  SECRET_KEY: z.string().trim().min(1),
  NEXTAUTH_SECRET: z.string().trim().min(1),
});

export const envServerSchema = envSchema.parse({
  POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
  POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
  POSTGRES_URL: process.env.POSTGRES_URL,
  POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  SECRET_KEY: process.env.SECRET_KEY,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
});

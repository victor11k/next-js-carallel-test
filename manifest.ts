import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fancy Next.js application for Carallel",
    short_name: "Fancy Next.js Mobile app",
    description:
      "Next.js application with Vercel Postgres, Prisma, Next-Auth integrations",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

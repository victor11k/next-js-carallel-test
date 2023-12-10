# Carallel Next.js application

Test assessment showcasing a Next.js application with mobile screen for Carallel application.

## Screencast

https://github.com/DanylKab/azure_ad_sso/assets/138477122/78333a83-c2a9-4e72-a17c-364934c67309

You can find deployed version at: <https://azure-ad-sso.vercel.app/>

## Get Started

1. Install dependencies: `yarn`.
2. Add the `.env` file and add variables. You can use `.env.example` as an example to use configured Vercel and Next-Auth settings or configure by itself: [vercel-docs](https://vercel.com/guides/nextjs-prisma-postgres), [next-auth](https://next-auth.js.org/getting-started/client)
3. Run `yarn dev` and visit <https://localhost:3000>.

## Linting

- `yarn lint` - checks for eslint, prettier, and TS errors

CI/CD pipeline automatically runs linter checks on push.

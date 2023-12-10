import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

//@configs
import { envServerSchema } from "@configs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "test@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(`${envServerSchema.NEXTAUTH_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await res.json();

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const accessToken = token.accessToken;

      return { ...token, accessToken, ...user };
    },

    async session({ session, token }) {
      session.user = token as {
        id: number;
        email: string;
        accessToken: string;
      };

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signIn",
  },
  useSecureCookies: false,
  debug: true,
};

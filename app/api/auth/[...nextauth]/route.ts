import NextAuth from "next-auth/next";

//@configs
import { authOptions } from "@configs";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

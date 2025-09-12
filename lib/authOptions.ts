import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: Record<string, string> | undefined) => {
        if (!credentials) return null;
        const { username, password } = credentials;
        if (
          username === process.env.NEXT_PUBLIC_GUIDE_USERNAME &&
          password === process.env.NEXT_PUBLIC_GUIDE_PASSWORD
        ) {
          return { id: "guide", name: "EFVGA Guide" } as any;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 365 * 10, // 10 years
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 365 * 10,
  },
  pages: {
    signIn: "/guides",
  },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret",
};

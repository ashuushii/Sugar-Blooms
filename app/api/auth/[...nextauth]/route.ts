import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

// This is temporary - in production these should be in environment variables
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "sugarbloomsadmin";

declare module "next-auth" {
  interface User {
    role?: string;
  }

  interface Session {
    user: User & {
      role?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // Simple credential check
        if (credentials.username === ADMIN_USERNAME && 
            credentials.password === ADMIN_PASSWORD) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@sugarbloooms.com",
            role: "admin"
          } as any;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

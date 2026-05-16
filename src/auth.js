import NextAuth from "next-auth";
import NeonAdapter from "@auth/neon-adapter";
import { Pool } from "@neondatabase/serverless";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  return {
    adapter: NeonAdapter(pool),
    providers: [
      Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
      }),
    ],
    session: {
      strategy: "database",
    },
    callbacks: {
      session: async ({ session, user }) => {
        if (session.user) {
          session.user.id = user.id;
        }
        return session;
      },
    },
  };
});

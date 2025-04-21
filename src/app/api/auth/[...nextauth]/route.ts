import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { User, Session } from "@/types/types"; 

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            email: credentials?.email,
            password: credentials?.password,
          });

          const { accessToken, user } = res.data.data;

          if (accessToken && user) {
            console.log(user.name)
            return {
              ...user,
              id: user._id,
              accessToken, 
            } as User;
          }
        
          
          return null;
        } catch (error) {
            if (axios.isAxiosError(error)) {
              console.error("Login error:", error.response?.data || error.message);
            } else if (error instanceof Error) {
              console.error("Login error:", error.message);
            } else {
              console.error("Unknown error:", error);
            }
            return null;
          }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login", // Custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Ensure that user is of type User
        const userData = user as User; // Type assertion
        token.accessToken = userData.accessToken;
        token.user = userData; // Cast user to User
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        // Ensure the token user is of type User
        session.accessToken = token.accessToken as string;
        session.user = token.user as User; // Cast token.user to User type
      }
      return session as Session; // Return the custom Session type
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // Use JWT for sessions
  },
});

export { handler as GET, handler as POST, };

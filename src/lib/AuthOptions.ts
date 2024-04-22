import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { jwtHelpers } from "@/helpers/jwtHelpers";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "doctors-portal-backend",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "Your email...." },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch("http://localhost:5000/api/v1/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-type": "application/json",
            },
          });

          const { data } = await res.json();
          const verifiedToken: any = jwtHelpers.verifyToken(
            data?.accessToken,
            process.env.JWT_SECRET!
          );
          console.log(verifiedToken, "verified Token Inside");

          return {
            ...data,
            ...verifiedToken,
          };
        } catch (error) {
          //   console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      //   console.log(token, "Auth Token");
      //   console.log(user, "Auth User");
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }) {
      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

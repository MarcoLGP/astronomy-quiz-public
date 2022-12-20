import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions: AuthOptions = {
    session: {
        strategy: "jwt"
    },
    secret: process.env.JWT_SECRET || "MISSING",
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "MISSING",
            clientSecret: process.env.GITHUB_SECRET || "MISSING",
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID || "MISSING",
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "MISSING"
          }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "MISSING",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "MISSING",
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
        })
    ],
};

export default NextAuth(authOptions);
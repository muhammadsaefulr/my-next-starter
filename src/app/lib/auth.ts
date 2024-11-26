import NextAuth, { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    debug: true,
    secret: process.env.NEXTAUTH_SECRET as string,
    callbacks: {
        async redirect({url, baseUrl}){
            return url.startsWith(baseUrl) ? url : baseUrl
        }
    }
} satisfies NextAuthConfig)

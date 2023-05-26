import NextAuth from "next-auth"
import prisma from "../../../lib/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GithubProvider from 'next-auth/providers/github'
import { NextAuthOptions } from "next-auth"
import { PrismaClient } from "@prisma/client"

//const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
    ],
    callbacks: {
        jwt({ token, account, user }) {
            if (account) {
            token.accessToken = account.access_token
            token.id = user?.id
            }
            return token
        },
        session({ session, token }) {
            // I skipped the line below coz it gave me a TypeError
            // session.accessToken = token.accessToken;
            session.user.id = token.id;

            return session;
        },
    },
    secret: process.env.SECRET,
    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV === "development"
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
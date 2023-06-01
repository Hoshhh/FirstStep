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
        async jwt({ token, account, user }) {
            const dbUser = await prisma.user.findFirst({
                where: {
                    id: token.id
                }
            })

            if (!dbUser) {
                token.id = user!.id
                return token
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                role: dbUser.role,
                email: dbUser.email,
                image: dbUser.image
            }

            /*
            if (account) {
            token.accessToken = account.access_token
            token.id = user?.id
            token.role = user.role
            }
            return token*/
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.role = token.role
                session.user.email = token.email
                session.user.image = token.image
            }

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
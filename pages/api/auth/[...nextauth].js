import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationParams: {},
      checks: ['none'],
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id
        const user = await prisma.user.findUnique({
          where: { id: token.id },
          select: { email: true, name: true, image: true, isActive: true },
        })
        session.user = {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          isActive: user.isActive,
        }
      }
      return session
    }
  }
}

export default NextAuth(authOptions)

export const getServerSession = async (req, res, next) => {
  return await NextAuth.getSession({ req });
}
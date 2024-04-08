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
          select: { isActive: true }, // 只选择 isActive 字段
        })
        session.user.isActive = user?.isActive || false // 将 isActive 附加到 session.user 对象上
      }
      return session
    }
  }
}

export default NextAuth(authOptions)

export const getServerSession = async (req, res, next) => {
  return await NextAuth.getSession({ req });
}
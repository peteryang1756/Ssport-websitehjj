import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

export const authOptions = {
  adapter: PrismaAdapter({ prisma }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.isActive = user.isActive;
      return session;
    }
  }
}

export default NextAuth(authOptions)

export const getServerSession = async (req, res, next) => {
  return await NextAuth.getServerSession(req, res)
}
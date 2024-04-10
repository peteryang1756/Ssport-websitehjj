import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import LineProvider from "next-auth/providers/line"
import DiscordProvider from "next-auth/providers/discord"

// 管理员邮箱地址列表
const adminEmails = ['ssangyongsports1@gmail.com', 'admin@example.com']

export const authOptions = {
  // 配置一个或多个认证提供者
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {},
      },
      checks: ['none'],
    }),
    LineProvider({
      clientId: process.env.Line_ID,
      clientSecret: process.env.Line_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.Discord_ID,
      clientSecret: process.env.Discord_SECRET,
    }),
  ],
  theme: {
    logo: "/logo.png", // 图片的绝对URL
  },
  callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  }
}

export default NextAuth(authOptions)
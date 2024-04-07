import { getSession } from "next-auth/react"
import prisma from ../../lib/prisma"

export default async function handle(req, res) {
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ message: "Not authenticated" })
  }

  if (req.method === "PUT") {
    const { newUsername } = req.body
    const user = await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        name: newUsername,
      },
    })
    res.status(200).json(user)
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
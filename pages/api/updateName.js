import { getSession } from 'next-auth/react'
import { prisma } from '../../lib/prisma'

export default async function handler(req, res) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized.' })
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (req.method === 'PUT') {
    const { newName } = req.body

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name: newName,
      },
    })

    return res.status(200).json(updatedUser)
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
// pages/api/updateName.js
import { getSession } from 'next-auth/react'
import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'PUT') {
    const { name } = req.body
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: { name },
    })
    res.status(200).json(updatedUser)
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
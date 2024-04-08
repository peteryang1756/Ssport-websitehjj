// pages/api/updateName.js
import { getServerSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'PATCH') {
    return res.status(405).end();
  }

  const session = await getServerSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { name } = req.body;
  const { email } = session.user;

  try {
    const user = await prisma.user.update({
      where: { email },
      data: { name },
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}
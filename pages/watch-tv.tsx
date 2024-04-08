import { getSession } from "next-auth/react"
import prisma from "../lib/prisma"

export default function ProtectedPage({ isActive }) {
  if (!isActive) {
    return <div>Access denied</div>
  }

  return <div>Welcome to the protected page!</div>
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    }
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { isActive: true },
  })

  return {
    props: {
      isActive: user.isActive,
    },
  }
}
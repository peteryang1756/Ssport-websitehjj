// pages/protected.js
import { useSession } from 'next-auth/react'

export default function ProtectedPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (!session || !session.user.isActive) {
    return <div>Access denied</div>
  }

  return <div>Welcome to the protected page!</div>
}
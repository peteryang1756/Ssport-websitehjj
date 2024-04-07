import { useState } from "react"
import { getSession } from "next-auth/react"

export default function Settings() {
  const [newUsername, setNewUsername] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("/api/updateUsername", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newUsername }),
    })
    // ...處理更新的回應
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        placeholder="New Username"
      />
      <button type="submit">Update Username</button>
    </form>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}
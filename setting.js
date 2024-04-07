// pages/setting.js
import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function SettingPage() {
  const { data: session } = useSession()
  const [name, setName] = useState(session?.user?.name || '')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/updateName', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
    const data = await res.json()
    if (res.ok) {
      console.log('名字更新成功:', data)
    } else {
      console.error('名字更新失敗:', data.error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名字:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">更新名字</button>
    </form>
  )
}
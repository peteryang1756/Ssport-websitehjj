import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function SettingPage() {
  const { data: session } = useSession()
  const [newName, setNewName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/updateName, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newName }),
    })

    if (response.ok) {
      // 更新成功,可以做一些额外的操作,如显示成功消息
      console.log('Name updated successfully')
    } else {
      // 处理错误
      console.error('Failed to update name')
    }
  }

  return (
    <div>
      <h1>设置页面</h1>
      {session && (
        <form onSubmit={handleSubmit}>
          <label>
            新名称:
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>
          <button type="submit">更新名称</button>
        </form>
      )}
    </div>
  )
}
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const SettingsPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [name, setName] = useState(session?.user.name || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUpdateName = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/updateName', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`用户名更新成功，新名称为：${data.name}`);
      } else {
        const error = await response.json();
        alert(`用户名更新失败：${error.message}`);
      }
    } catch (error) {
      alert('出现错误');
      console.error('更新用户名错误:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/deleteAccount', {
        method: 'DELETE',
      });

      if (response.ok) {
        signOut({ redirect: false });
        router.push('/');
      } else {
        const error = await response.json();
        alert(`删除账户失败：${error.message}`);
      }
    } catch (error) {
      alert('出现错误');
      console.error('删除账户错误:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>设置</h1>
      {session && (
        <>
          <div>
            <label>
              名称:
              <input type="text" value={name} onChange={handleNameChange} disabled={isLoading} />
            </label>
            <button onClick={handleUpdateName} disabled={isLoading}>
              {isLoading ? '更新中...' : '更新名称'}
            </button>
          </div>
          <button onClick={handleDeleteAccount} disabled={isLoading}>
            {isLoading ? '删除中...' : '删除账户'}
          </button>
        </>
      )}
    </div>
  );
};

export default SettingsPage;
'use client';
import { signIn, signOut, useSession } from "next-auth/react"
import React from 'react';
import { Button } from "flowbite-react";
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import Link from 'next/link'

export default function Login() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>; // or any other loading state you prefer
  }

  if (session && session.user) {
    return (
      <>
        <Dropdown
          inline
          label={<Avatar alt="User settings" img={`${session.user.image}`} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{session.user.name}</span>
            <span className="block truncate text-sm font-medium">{session.user.email}</span>
          </Dropdown.Header>
          <div>
            <Link href="/watch-tv">觀看TV</Link>
          </div>
          <div>
            <Link href="#">購物</Link>
          </div>
          <div>
            <Link href="/support">幫助</Link>
          </div>
          <Dropdown.Divider />
          <div>
            <Link
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              登出
            </Link>
          </div>
        </Dropdown>
      </>
    );
  }

  return (
    <>
      <button className="break-keep rounded-md px-5 py-1 font-bold">
        <Link
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          登入
        </Link>
      </button>
    </>
  );
}
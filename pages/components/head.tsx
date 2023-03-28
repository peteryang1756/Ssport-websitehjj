import { Navbar } from "flowbite-react";
import React from 'react'
import Link from 'next/link'

function head() {
  return (
   <Navbar
  fluid={true}
  rounded={true}
>
        <Navbar.Brand>
  <Link href="/" legacyBehavior>
        </Link>
      <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
   </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Link href="/c" legacyBehavior>
      <a>About Us</a>
    </Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export default head

"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/google.png';
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = () => {
  const { status } = useSession();
  return (
    <div className='px-5 py-2 flex justify-between items-center shadow-md'>
      <Link href="/">
        <Image src={Logo} width={85} height={85} alt='logo' />
      </Link>

      {status === 'authenticated' ? (
        <button onClick={() => signOut()} className='bg-gray-900 font-medium text-xs text-white px-3 py-2 rounded-lg'>SIGN OUT</button>
      ) : (
        <button onClick={() => signIn('google')} className='bg-gray-900 font-medium text-xs text-white px-3 py-2 rounded-lg'>SIGN IN</button>
      )}


    </div>
  )
}

export default Navbar
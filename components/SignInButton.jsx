"use client";

import Image from "next/image"
import googleLogo from '../public/google-logo.png';
import { signIn } from 'next-auth/react';

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn('google')}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3">
      <Image src={googleLogo} width={30} height={30} alt="Google" />
      <span className="bg-blue-500 text-white px-4 py-3">Sign In With Google</span>
    </button>
  )
}

export default SignInButton
"use client";

import { useSession } from "next-auth/react";
import SignInButton from "./SignInButton";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === 'authenticated') {
    return <>
      <div className="container lg:w-2/3 xl:w-2/4 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div className=" h-32 overflow-hidden" >
          <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <Image className="h-32 w-32 bg-white p-2 rounded-full" src={session?.user?.image} height={100} width={100} alt="..." />

        </div>
        <div className=" ">
          <div className="text-center px-14 py-5">
            <h2 className="text-gray-800 text-2xl font-bold">{session?.user?.name}</h2>
            <Link className="text-gray-400 text-sm mt-2 hover:text-blue-500" href={`mailto:${session?.user?.email}`} target="BLANK()">{session?.user?.email}</Link>
          </div>
        </div>
      </div>
    </>
  } else {
    return <SignInButton />
  }
}

export default UserInfo
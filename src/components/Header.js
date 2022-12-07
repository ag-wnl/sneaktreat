import Image from  "next/image";
import React from 'react'

import {MagnifyingGlassIcon, ShoppingBagIcon, UserCircleIcon, Bars3Icon, CheckCircleIcon} from "@heroicons/react/24/solid";

import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {

    const {data : session} = useSession();

    const router = useRouter();

    const items = useSelector(selectItems);
  return (
    <header>
        <div className="flex items-center bg-sneaktreat_white p-2 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                    onClick={() => router.push('/')}
                    src='https://i.imgur.com/Jm6uMeX.png'
                    width={200}
                    height={60}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>
            <div className="hidden sm:flex bg-purple-400  flex-grow cursor-pointer hover:bg-purple-300">
                <input className="p-2 w-6 flex-grow flex-shrink focus:outline-none" type="text" />
                <MagnifyingGlassIcon className='h-12 p-4' />

            </div>

            <div className="text-white flex items-center text-xs space-x-7 mx-6 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut} className="link">
                     <UserCircleIcon    className="h-7" />
                     <p className="font-bold md:text-sm">
                        {session ? `Hi ${session.user.name}` : "Sign In"}
                     </p>
                </div>

                <div className="link">
                    <p className="font-bold md:text-sm">Orders</p>
                </div>

                <div onClick={() => router.push('/checkout')} className="relative link flex items-center">

                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-purple-400 text-center rounded-full text-white font-bold">
                        {items.length}
                    </span>
                    <ShoppingBagIcon className="h-7" />
                    <p className="hidden md:inline font-bold md:text-sm mt-1">Cart</p>
                </div>
            </div>
        </div>

        <div className="flex items-center bg-purple-200  text-black text-sm space-x-10 p-1 pl-5">
            <p className="link flex items-center">  
                <Bars3Icon className="h-6 mr-1" />     
                Rare Drops
            </p>
            <p className="link">
                Custom Sneakers
            </p>
            <p className="link flex items-center">
                <CheckCircleIcon className="h-5 mr-1"/>
                Authenticity Check
            </p>

            <p className="link hidden md:inline-flex">
                Apparel
            </p>
            <p className="link hidden lg:inline-flex">
                Collectibles
            </p>
        </div>

    </header>
  )
}

export default Header;
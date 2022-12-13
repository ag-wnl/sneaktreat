import Image from  "next/image";
import React from 'react'

import {MagnifyingGlassIcon, ShoppingBagIcon, UserCircleIcon, Bars3Icon, CheckCircleIcon} from "@heroicons/react/24/solid";

import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useState } from 'react';
import axios from 'axios';
import Product from "./Product";


export async function getServerSideProps(context) {
    const products = await fetch("https://api.npoint.io/06c058f2d597ee5251d3").then(
      (res) => res.json()
    );

    return { props :{
      products,
      
    },
  };
}



function Header({ products }) {

    const {data : session} = useSession();

    const router = useRouter();

    const items = useSelector(selectItems);

  return (
    <header>
        {/* className="z-50 fixed top-0 w-full" */}
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
            <div className="hidden rounded sm:flex bg-purple-400  flex-grow cursor-pointer hover:bg-purple-300 mt-1 ml-2 h-10">
                <input 
                placeholder="Search for sneakers, brands, etc."
                className="rounded p-2 w-6 flex-grow flex-shrink bg-gray-50 focus:outline-none" type="text" 
                // onChange={(e) => setSearch(e.target.value)}
                />
                <MagnifyingGlassIcon

                className='h-12 p-4'
                />     

            </div>

            <div className="text-white flex items-center text-xs space-x-7 mx-6 whitespace-nowrap font-sans hover:text-gray-200">
                <div onClick={!session ? signIn : signOut} className="link">
                     <UserCircleIcon className="h-7 mx-auto" />
                     <p className="font-medium md:text-sm">
                        {session ? `${session.user.name}` : "Sign In"}
                     </p>
                </div>

                <div onClick={() => router.push("/orders")} className="link">
                    <p className="font-medium md:text-sm tracking-wide">Orders</p>
                </div>

                <div onClick={() => router.push('/checkout')} className="relative link flex items-center">

                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-purple-400 text-center rounded-full text-white font-medium">
                        {items.length}
                    </span>
                    <ShoppingBagIcon className="h-7" />
                    <p className="hidden md:inline font-medium md:text-sm mt-1">Cart</p>
                </div>
            </div>
        </div>

        <div className="flex items-center bg-purple-200  text-black text-sm space-x-10 p-1 pl-5">
            <p 
            onClick={() => router.push("/raredrops")}
            className="link flex items-center">  
                {/* <Bars3Icon className="h-6 mr-1" />      */}
                Rare Drops
            </p>
            <p 
            onClick={() => router.push("/customsneakers")}
            className="link">
                Custom Sneakers
            </p>
            <p className="link flex items-center">
                <CheckCircleIcon className="h-5 mr-1"/>
                Authenticity Check
            </p>

            <p 
            onClick={() => router.push("/apparel")}
            className="link hidden md:inline-flex">
                Apparel
            </p>
            <p 
            onClick={() => router.push("/collectibles")}
            className="link hidden lg:inline-flex">
                Collectibles
            </p>
        </div>

    </header>
  )
}

export default Header;
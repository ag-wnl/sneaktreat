import Image from  "next/image";
import React from 'react'

import {MagnifyingGlassIcon, ShoppingBagIcon, UserCircleIcon, Bars3Icon, CheckCircleIcon, BackwardIcon} from "@heroicons/react/24/solid";

import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useState } from 'react';
import axios from 'axios';
import Product from "./Product";
import Button from "./Button";
import Searchbar from "./Searchbar";


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

    let [open, setOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');

  return (
    <header>
        {/* for small screen like mobiles */}

        <div className="sticky w-full top-0 z-50 flex space-x-7 items-center bg-sneaktreat_white p-2 flex-grow py-2 md:hidden">

            {/* other items in header */}
            {/* <div className="hidden rounded sm:flex bg-purple-400  flex-grow cursor-pointer hover:bg-purple-300 mt-1 ml-2 h-10">
                <input 
                placeholder="Search for sneakers, brands, etc."
                className="rounded p-2 w-6 flex-grow flex-shrink bg-gray-50 focus:outline-none" type="text" 
                // onChange={(e) => setSearch(e.target.value)}
                />
                <MagnifyingGlassIcon

                className='h-12 p-4'
                />     

            </div> */}            

            <div onClick={()=>setOpen(!open)}>
                <Bars3Icon className="absolute h-7 text-white top-6 cursor-pointer" /> 
            </div>

            
            <div className={`rounded text-black flex-col items-center text-sm w-auto  font-sans overflow-y-auto space-y-7 bg-gradient-to-r from-white via-white to-gray-100 absolute p-5 z-10 transition-all duration-300 ease-in ${open ? 'left-[-28px] top-[69px]': 'left-[-190px] top-[69px]'} `}>
                <div onClick={!session ? signIn : () => router.push("/accountpage")} className="link">

                     <UserCircleIcon className="h-7 mb-1" />
                     <p className="font-medium md:text-xs">
                        {session ? `${session.user.name}` : "Sign In"}
                     </p>
                </div>

                <div onClick={() => router.push("/orders")} className="link">
                    <p className="font-medium md:text-sm tracking-wide ">Orders</p>
                </div>

            </div>

            {/* Sneaktreat Header Logo */}
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                    onClick={() => router.push('/')}
                    src='https://i.imgur.com/KFb774h.png'
                    width={220}
                    height={60}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>

            <div onClick={() => router.push('/checkout')} className="text-white relative link flex items-center hover:text-purple-200 duration-500">

                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-purple-400 text-center text-xs rounded-full text-white font-normal">
                    {items.length}
                </span>
                <ShoppingBagIcon className="h-7" />
                <p className="hidden md:inline font-medium md:text-sm mt-1">Cart</p>
            </div>

        </div>



        {/* for bigger screen <=large screen size (laptops and above) */}

        {/* className="z-50 fixed top-0 w-full" */}
        <div className="hidden md:flex items-center bg-sneaktreat_white p-3 flex-grow py-3 sticky top-0 z-50">
            <div className="mt-1 ml-5 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                    onClick={() => router.push('/')}
                    src='https://i.imgur.com/o9eESYL.png'
                    width={220}
                    height={60}
                    objectFit="contain"
                    className="cursor-pointer"
                />
            </div>

            {/* searchbar */}
            {/* <div className="hidden rounded sm:flex bg-purple-400  flex-grow cursor-pointer hover:bg-purple-300 mt-1 ml-2 h-10">
                <input 
                placeholder="Search for sneakers, brands, etc."
                className="rounded p-2 w-6 flex-grow flex-shrink bg-gray-50 focus:outline-none" type="text" 
                
                />
                

                {/* <Searchbar /> */}
                {/* <MagnifyingGlassIcon

                className='h-12 p-4'
                />      */}

            {/* </div> */}

            <div className="text-white flex items-center text-sm space-x-9 mx-auto whitespace-nowrap font-sans">
                

                <div onClick={() => router.push("/raredrops")} className="link">
                    <p className="font-normal md:text-lg tracking-wide hover:text-purple-200 duration-500">RARE DROPS</p>
                </div>

                <div onClick={() => router.push("/customsneakers")} className="link">
                    <p className="font-normal md:text-lg tracking-wide hover:text-purple-200 duration-500">CUSTOM SNEAKERS</p>
                </div>

                <div onClick={() => router.push("/apparel")} className="link">
                    <p className="font-normal md:text-lg tracking-wide hover:text-purple-200 duration-500">APPAREL</p>
                </div>

                <div onClick={() => router.push("/collectibles")} className="link">
                    <p className="font-normal md:text-lg tracking-wide hover:text-purple-200 duration-500">COLLECTIBLES</p>
                </div>

                <div onClick={!session ? signIn : () => router.push("/accountpage")} className="link hover:text-purple-200 duration-500">
                     {/* <UserCircleIcon className="h-7 mx-auto" /> */}
                     <p className="font-normal md:text-lg">
                        {/* {session ? `${session.user.name}` : "SIGN IN"} */}
                        {session ? "ACCOUNT" : "SIGN IN"}
                     </p>
                </div>

                <div onClick={() => router.push("/orders")} className="link">
                    <p className="font-normal md:text-lg tracking-wide hover:text-purple-200 duration-500">ORDERS</p>
                </div>

                <div onClick={() => router.push('/checkout')} className="relative link flex items-center hover:text-purple-200 duration-500">

                    <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-purple-400 text-center rounded-full text-white font-normal">
                        {items.length}
                    </span>
                    <ShoppingBagIcon className="h-7" />
                    <p className="hidden md:inline font-normal md:text-lg mt-0">CART</p>
                </div>

            </div>
        </div>

        <div className="flex space-x-10 p-1 pl-5 pr-5  overflow-x-auto items-center bg-purple-200  text-black text-sm">

            <div className="font-normal my-0 mx-auto">
                New Sneakers added to Raredrops, checkout the heat!
            </div>

            {/* <p 
            onClick={() => router.push("/raredrops")}
            className="link flex items-center">      
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
            className="link flex items-center">
                {/* link hidden sm:inline-flex */}
                {/* Apparel
            </p>
            <p 
            onClick={() => router.push("/collectibles")}
            className="link flex items-center">
                Collectibles
            </p> */}
        </div>

    </header>
  )
}

export default Header;
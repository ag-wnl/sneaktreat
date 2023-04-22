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

        <div className="sticky w-full top-0 z-50 flex space-x-7 items-center bg-sneaktreat_white p-2 flex-grow py-2 md:hidden ">

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

            
            <div className={`text-black flex-col items-center text-sm font-sans h-screen overflow-y-auto space-y-8 w-9/12 overscroll-contain bg-gradient-to-r from-white via-white to-purple-100 absolute p-5 z-10 transition-all duration-300 ease-in ${open ? 'left-[-28px] top-[69px]': 'left-[-720px] top-[69px]'} `}>
                <div onClick={!session ? signIn : () => router.push("/accountpage")} className="link mt-3">

                     <UserCircleIcon className="h-7 mb-1 ml-2" />
                     <p className="font-medium tracking-wide text-base md:text-xs">
                        {session ? `${session.user.name}` : "Sign In"}
                     </p>
                </div>

                <div onClick={() => router.push("/orders")} className="link">
                    <p className="font-medium text-base md:text-sm tracking-wide ">ORDERS</p>
                </div>

                <div onClick={() => router.push("/raredrops")} className="link">
                    <p className="font-medium text-base md:text-sm tracking-wide">
                        RARE DROPS</p>
                </div>

                <div onClick={() => router.push("/customsneakers")} className="link">
                    <p className="font-medium text-base md:text-sm tracking-wide">
                        CUSTOM SNEAKERS</p>
                </div>

                <div onClick={() => router.push("/apparel")} className="link">
                    <p className="font-medium text-base md:text-sm tracking-wide">APPAREL</p>
                </div>

                <div onClick={() => router.push("/collectibles")} className="link">
                    <p className="font-medium text-base mb-10 md:text-sm tracking-wide border-b-2 border-indigo-200 pb-5">COLLECTIBLES</p>
                </div>

                <div onClick={() => router.push("/collectibles")} className="link flex space-x-1">
                    <svg class="w-10 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                    <p className="font-normal text-xl mb-2 md:text-sm tracking-wide">Instagram</p>
                </div>

                <div onClick={() => router.push("/collectibles")} className="link flex space-x-1">
                    <svg class="w-10 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                    <p className="font-normal text-xl mb-10 md:text-sm tracking-wide">Facebook</p>
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
            <div className="mt-1 ml-10 flex items-center flex-grow sm:flex-grow-0">
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
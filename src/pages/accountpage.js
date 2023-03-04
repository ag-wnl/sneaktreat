import React from 'react'
import Header from '../components/Header'

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useState } from 'react';
import Footer from '../components/Footer';

function accountpage() {

    const {data : session} = useSession();

    const router = useRouter();

    const items = useSelector(selectItems);

    function getoutt(){
        router.push("/");
    }


  return (
    <div>
        <Header />

        <h1 className='tracking-widest ml-8 p-8 text-xl text-gray-800 font-md border-b pb-5'>YOUR ACCOUNT</h1>

        <div className='p-5 ml-4 text-gray-900'>

            <div className='p-2 text-gray-700 font-medium'>
            {session ? `Hi ${session.user.name}!` : "Sign In to use this page"}
            </div>

            <div className='p-2 text-gray-700'>
                View your previous orders and shipping details. 
            </div>
            <button 
            onClick={() => router.push("/orders")}
            className='link p-1 border bg-gray-100 hover:bg-gray-200'
            >
                View Your Orders
            </button>
        </div>

        <div className='p-5 ml-4 text-gray-900'>
            <div className='p-1 text-gray-700'>
                Sign out of this session or switch to a different account.
            </div>
            <button 
            onClick={() => {
                signOut();
            }}
            className='link p-1 border bg-gray-100 hover:bg-gray-200'
            >
                Sign Out
            </button>
        </div>
        
        <Footer />


    </div>
  )
}

export default accountpage
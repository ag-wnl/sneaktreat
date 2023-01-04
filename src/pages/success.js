import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'

function success() {
    const router = useRouter();
  return (
    <div className='bg-purple-100 h-screen'>
        <Header />
        <main className='max-w-screen-lg mx-auto'>
            <div className='flex flex-col bg-purple-100 items-center space-x-2 mb-5 border-b pb-4 border-purple-300 '>
                <h1 className='text-3xl p-5'>Your Order is Confirmed!</h1>
                
            </div>
            <button onClick={() => router.push('/orders')} className='button mt-7 ml-7 mx-auto'>Go to Orders</button>
        </main>
    </div>
  )
}

export default success
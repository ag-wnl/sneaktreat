import React from 'react'
import { useSelector } from 'react-redux'
import CartProducts from '../components/CartProducts';
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from "react-currency-formatter";    
import { useSession } from 'next-auth/react';

function Checkout() {

    const total = useSelector(selectTotal);
    const items = useSelector(selectItems);
    const {session} = useSession();     

  return (  
    <div className='bg-purple-100'>
        <Header />

        <main className='lg:flex max-w-screen-2xl mx-auto'>

            {/* left */}
            <div className='flex-grow m-5'>
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-5'>
                        {items.length === 0 ? 'No Sneaktreats in Your Cart' : 'Your Cart'}
                    </h1>

                    {items.map((item, i) => (
                        <CartProducts
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>




            {/* right subtotal */}

            <div className='flex flex-col bg-white p-8 shadow-md'>
                {items.length > 0 && (
                    <>
                        <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):
                        <span className='font-medium p-1'>
                            <Currency quantity= {total} />
                        </span>
                        </h2>

                        <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                            {!session ? 'Sign in to Proceed' : 'Checkout'}
                        </button>
                    </>
                )}
            </div>
        </main>

    </div>
  )
}

export default Checkout
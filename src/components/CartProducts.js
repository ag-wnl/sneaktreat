import React from 'react'
import Image from "next/image";
import Currency from "react-currency-formatter";

import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

function CartProducts({ 

    id,
    title,
    price,
    description,
    category,
    image,

 }) {

    const dispatch = useDispatch();
    const removeItemCart = () => {
        dispatch(removeFromBasket({id}))
    }

  return (
    <div className='grid grid-cols-5 p-2'>
        <Image src={image} height={200} width={200} objectFit='contain' />

        <div className='col-span-3 mx-7'>
            <p>{title}</p>
            
            <p className='text-xs mt-3 my-3 line-clamp-2'>{description}</p>

            <div className='font-medium'>
                <Currency quantity={price} />
            </div>

        </div>  

        <div className='flex flex-col space-y-8 my-auto justify-self-end'>  
            {/* <button className='button'>Add To cart</button> */}
            <button className='button' onClick={removeItemCart}>Remove From cart</button>
        </div>

    </div>
  )
}

export default CartProducts
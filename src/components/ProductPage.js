import React from 'react'
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { useRouter } from "next/router";
import Link from 'next/link'
import Product from './Product';



function ProductPage({ id, title, price, description, category, image}) {

  const dispatch = useDispatch();
  const router = useRouter();
  
  const addItemCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(addToBasket(product)) 
  };


  return (
    <div className='relative m-5 p-2 md:p-2'>
        {/* <p className='absolute top-2 right-2 text-xs'>{category}</p> */}
        
        <h1 
          className='my-3 w-screen mb-5 text-lg md:text-3xl'
        >{title}</h1>
        
        <div className=''>
          <Image className='mx-auto ml-5' src={image} height={200} width={200}/>
         
        </div>
        
        <p className='overflow-clip	text-xs mr-20 my-2 md:text-sm md:w-screen'>{description}</p>

        <div className='mb-5 mt-4'>
          <Currency quantity={price} />
        </div>

        <button onClick={addItemCart} className='mt-auto button'>Add to Cart</button>

        
    </div>
  );
}

export default ProductPage;
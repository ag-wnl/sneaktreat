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
    <div className='relative  md:p-2'>
        {/* <p className='absolute top-2 right-2 text-xs'>{category}</p> */}
        
        <h1 
          className='my-3 ml-4 mb-5 font-medium text-2xl md:text-3xl'
        >{title}</h1>
        
        <div className=''>
          <Image className='mx-auto ml-5' src={image} height={400} width={400}/>
         
        </div>
        
        <div className='mb-5 ml-4 mt-4 text-2xl'>
          <Currency quantity={price} />
        </div>

        <button onClick={addItemCart} className='mt-auto text-lg  ml-4 mb-3 button'>Add to Cart</button>

        <p className='overflow-clip	m-4 text-sm mr-20 my-2 md:text-md'>{description}</p>


        
    </div>
  );
}

export default ProductPage;
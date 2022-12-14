import React from 'react'
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

function Product({ id, title, price, description, category, image }) {

  const dispatch = useDispatch();

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
    <div className='relative flex flex-col m-5  z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs'>{category}</p>
        
        <Image className='mx-auto' src={image} height={200} width={200} objectFit='contain' />

        <h4 className='my-3'>{title}</h4>

        <p className='text-xs my-2 line-clamp-2'>{description}</p>

        <div className='mb-5'>
          <Currency quantity={price} />
        </div>

        <button onClick={addItemCart} className='mt-auto button'>Add to Cart</button>
    </div>
  );
}

export default Product;
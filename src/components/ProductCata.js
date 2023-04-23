import React from 'react'
import Product from './Product';
import { useRouter } from "next/router";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductCata({ products }) {

  const router = useRouter();

  return (
    <div className='grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto'>
        {products.slice(0,4).map(({id, title, price, description, category, image}) => (
          <Product 
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

        <div className='relative md:col-span-full mx-auto flex mb-4 space-x-10 overflow-x-auto cursor-pointer justify-start'>
          <img 
          onClick={() => router.push("/apparel")}
          src='https://i.imgur.com/cdGEaVT.png'/>
          <img
          onClick={() => router.push("/collectibles")} 
          src='https://i.imgur.com/UT5C4U1.png'/>

        </div>

        
        

        {products.slice(4,16).map(({id, title, price, description, category, image}) => (
          <Product 
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}

    </div>
  );
}

export default ProductCata;
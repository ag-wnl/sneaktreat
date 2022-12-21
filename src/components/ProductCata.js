import React from 'react'
import Product from './Product';
import { useRouter } from "next/router";

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

        <div className='relative md:col-span-full flex mb-4 space-x-10 ml-8 mr-8 overflow-x-auto cursor-pointer'>
          <img 
          onClick={() => router.push("/apparel")}
          src='https://i.imgur.com/cdGEaVT.png'/>
          <img
          onClick={() => router.push("/collectibles")} 
          src='https://i.imgur.com/UT5C4U1.png'/>

        </div>
      

        {/* <img className='md:col-span-full flex-col' src='https://cdn.shopify.com/s/files/1/0133/9195/3977/collections/Louis_Vuitton_Sneaker_Banner.jpg?v=1657820036' /> */}
        

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
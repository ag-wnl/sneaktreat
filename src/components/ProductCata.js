import React from 'react'
import Product from './Product';

function ProductCata({ products }) {
  return (
    <div className='grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto'>
        {products.slice(0,8).map(({id, title, price, description, category, image}) => (
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

        <img className='md:col-span-full' src='https://cdn.shopify.com/s/files/1/0133/9195/3977/collections/Louis_Vuitton_Sneaker_Banner.jpg?v=1657820036' />

        {products.slice(8,products.length).map(({id, title, price, description, category, image}) => (
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
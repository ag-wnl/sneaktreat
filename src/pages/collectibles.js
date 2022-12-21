import React from 'react'
import Header from '../components/Header'
import Product from '../components/Product';

export async function getServerSideProps(context) {
  const products = await fetch("https://api.npoint.io/06c058f2d597ee5251d3").then(
    (res) => res.json()
  );

  return { props :{
    products,
    
  },
};
}


function collectibles({ products }) {

  const filteredSneakCollectible = products.filter(product => product.category === "collectibles");

  return (
    <div>

        <Header />
        <div className="border-b pb-5">

            <h1 className='tracking-widest ml-8 p-8 text-xl text-gray-700'>COLLECTIBLES</h1>

            <h2 className='tracking-wider ml-14 mr-2 p-1 text-xs text-gray-800 mx-auto font-medium'>A collection is incomplete without items that you cherish, items which carry a story with them.</h2>
        </div>

        <div className='grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto'>
            {filteredSneakCollectible.map(({id, title, price, description, category, image}) => (
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

    </div>
  )
}

export default collectibles
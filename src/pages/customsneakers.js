import React from 'react'
import Footer from '../components/Footer';
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

function customsneakers({ products }) {

    const filteredSneakCustom = products.filter(product => product.category === "sneaker");

  return (
    <div>
        <Header />

        <div className='border-b pb-5'>

            <h1 className='tracking-widest ml-8 p-8 text-xl text-gray-700 '>EXCLUSIVE CUSTOM SNEAKERS</h1>

            <h2 className='tracking-wider ml-14 mr-2 p-1 text-xs text-gray-800 mx-auto font-medium border-b pb-5'>Custom crafted Sneakers by the talented who express themselves on a canvas called "Sneaker".</h2>

            <div className='grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto'>
            {filteredSneakCustom.map(({id, title, price, description, category, image}) => (
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

        <Footer />
    
    </div>
  )
}

export default customsneakers
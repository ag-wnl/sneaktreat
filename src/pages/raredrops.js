import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
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

function Raredrops({ products }) {

  const filteredSneak = products.filter(product => product.category === "Rare Drops");

  return (
    <div>
        <Header />
        <h1 className="tracking-widest ml-8 p-8 text-xl text-gray-700 border-b pb-5">SNEAKTREAT RARE DROPS</h1>

        <div className='grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto'>
            {filteredSneak.map(({id, title, price, description, category, image}) => (
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

        <Footer />

    </div>
  )
}

export default Raredrops;


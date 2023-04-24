import React from 'react'
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';

import { useRouter } from "next/router";

import { stringify } from 'postcss';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductCata from '../../../components/ProductCata';
import ProductExplore from '../../../components/ProductExplore';
import ProductPage from '../../../components/ProductPage';


export async function getServerSideProps(context) {
  const products = await fetch("https://api.npoint.io/7448dad05c71c966b960").then(
    (res) => res.json()
  );

  return { props :{
    products,
    
  },
};
}



const produkt = ({products}) => {

  const router = useRouter();
  const {category} = router.query;
  const {id} = router.query;
  const x = Number(`${id}`);
  const z = (`${category}`);
  // const y = z.toString();
  const filteredSneak = products.filter(product => product.id === x);
  const filteredSneakMore = products.filter(product => product.category === z && (product.id != x));
  

  return (
    <div>
      <Header />
      
      <div className='mx-auto'>
            {filteredSneak.map(({id, title, price, description, category, image}) => (
                <ProductPage
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

        <div>
          <h1 className="tracking-widest ml-4 p-8 text-xl text-gray-700 border-b pb-5">EXPLORE RELATED PRODUCTS</h1>
        </div>

        <div className='grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx-auto'>
          {filteredSneakMore.slice(0,6).map(({id, title, price, description, category, image}) => (
            <ProductExplore
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
};


export default produkt;

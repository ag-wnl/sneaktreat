import { getSession } from "next-auth/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCata from "../components/ProductCata";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>
          Sneaktreat  
        </title>
      </Head>

    <div>
      <Header />
    </div>

    
    <main className="max-w-screen-2xl mx-auto">
      
      <Banner />

      <h1 className="tracking-widest ml-8 p-8 text-xl text-gray-700">NEW ARRIVALS</h1>


      {/* main catalog */}
      <ProductCata products={products} />

      <Footer />
    </main>
    </div>
  );
}

export async function getServerSideProps() {
    const products = await fetch("https://api.npoint.io/06c058f2d597ee5251d3").then(
      (res) => res.json()
    );

    return { props :{
      products
    },
  };
}

import Head from "next/head";
import Banner from "../components/Banner";
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
    <Header />
    
    <main className="max-w-screen-2xl mx-auto">
      <Banner />


      {/* main catalog */}
      <ProductCata products={products} />
    </main>
    </div>
  );
}

export async function getServerSideProps(context) {
    const products = await fetch("https://api.npoint.io/06c058f2d597ee5251d3").then(
      (res) => res.json()
    );

    return { props :{
      products,
      
    },
  };
}

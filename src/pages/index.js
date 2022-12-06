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
    const products = await fetch("https://api.npoint.io/aba6b790defc7eca5836").then(
      (res) => res.json()
    );

    return { props :{
      products,
      
    },
  };
}

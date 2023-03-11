import React from 'react'
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';

import { useRouter } from "next/router";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const produkt = () => {
  return (
    <div>
      <Header />
      <h1>This is the individual product page which is in the making right now
        This will be out soon, Thank you for checking out the website and doing the bit of exploring which brought you here.
      </h1>
      <Footer />
    </div>
  )
};


export default produkt;
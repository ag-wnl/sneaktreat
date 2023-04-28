import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useState } from 'react';

function Banner() {

    const router = useRouter();

  return (
    <div className='relative'>
        
        <Carousel 
            autoPlay    
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            
        >
            <div onClick={() => router.push("/raredrops")} className="link">
                {/* loading='lazy'  */}
                {/* https://i.imgur.com/YGmk2qL.png */}

                
                <img src='https://i.imgur.com/ToYGZuf.png' alt='banner' />              
            </div>
            
            <div onClick={() => router.push("/apparel")} className="link">
                <img src='https://i.imgur.com/Fk7V2wP.jpg' alt='banner' />
            </div>
            
            <div onClick={() => router.push("/raredrops")} className="link">

                <img src='https://i.imgur.com/RStHaxQ.jpg' alt='banner' />

            </div>
           

        </Carousel>
    </div>
  )
}

export default Banner;
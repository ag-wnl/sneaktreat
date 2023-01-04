import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
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
            <div>
                <img loading='lazy' src='https://i.imgur.com/YGmk2qL.png' alt='banner' />
            
            </div>
                <img loading='lazy' src='https://i.imgur.com/Vev4Mpo.png' alt='banner' />
            
            <div>

                <img loading='lazy' src='https://i.imgur.com/AnkaPEf.png' alt='banner' />

            </div>
           

        </Carousel>
    </div>
  )
}

export default Banner;
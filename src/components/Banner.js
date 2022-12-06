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
                <img loading='lazy' src='https://plummour.com/wp-content/uploads/2021/12/Balenciaga-banner-2.jpg' alt='banner' />
            
            </div>
                <img loading='lazy' src='https://i.imgur.com/rRexoBr.png' alt='banner' />
            
            <div>

                <img loading='lazy' src='https://i.imgur.com/OzSnvze.png' alt='banner' />

            </div>
           

        </Carousel>
    </div>
  )
}

export default Banner;
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { Autoplay, EffectCreative } from 'swiper/modules';

import styled from 'styled-components';

const Wrapper = styled.section`

.container{
    width: 20rem;
img{
    width: 20rem;
    height: 20rem;
}
}
`

const CertificatesSlider = () => {
  return (
    <Wrapper>
    <div className='container'>
    <Swiper
        grabCursor={true}
        loop={true}
        effect={'creative'}
        autoplay={{
            delay: 500
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative , Autoplay]}
        className="mySwiper"
      >
         <SwiperSlide><img className='img' src='../imgs/logo.jpg' /></SwiperSlide>
         <SwiperSlide><img className='img' src='../imgs/logo.jpg' /></SwiperSlide>
         <SwiperSlide><img className='img' src='../imgs/logo.jpg' /></SwiperSlide>
         <SwiperSlide><img className='img' src='../imgs/logo.jpg' /></SwiperSlide>
         <SwiperSlide><img className='img' src='../imgs/logo.jpg' /></SwiperSlide>
         <SwiperSlide><img className='img' src='../imgs/logo.jpg' /></SwiperSlide>
         <SwiperSlide><img className='img' src='../imgs/logo.jpg' /></SwiperSlide>

     </Swiper>

    </div>
   </Wrapper> 
  )
}

export default CertificatesSlider
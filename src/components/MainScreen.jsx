import React from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


const Wrapper = styled.section`
.container{
    width: 100%;
    height: 70%;
.img{
    height: 30rem;
    width: 100%;
}
}
`

const MainScreen = () => {
  return (
    <Wrapper>
    <div className='container'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={false}
        autoplay={{
        delay: 500
       }}
         modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='img' src="https://travelplandubai.com/wp-content/uploads/2018/04/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img' src="../imgs/banner.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img' src="https://lh3.googleusercontent.com/pVJD_dPOHAqTsvKLP9_1WD81kxX1077ZkZS6AmqhRNuoxAbE9wAnl1OirEo64iKRoEkcXICUrLa4Pz7Cp6EE7sHvRFkxSMvVhXgbO2k=h450-rw" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img' src="https://propertiesingoa.co.in/wp-content/uploads/2023/08/goa-banner-1-1350x500.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </Wrapper>
  )
}

export default MainScreen
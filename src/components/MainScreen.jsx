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
    height: 35rem;
.img{
    height: 35rem;
    width: 100%;
    position: relative;
}
.box{
  position: absolute;
  top:40%;
  z-index: 999;
  left:50%;
  transform: translate(-50%,50%);
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
        delay: 1500
       }}
         modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='img' src="https://media.istockphoto.com/id/827901014/photo/dubai-marina-city-skyline-in-the-united-arab-emirates.jpg?s=612x612&w=0&k=20&c=IZNEwPuR2-oAdjDEiimLvvCrntxBqCkMvDXM0uDvnRk=" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img' src="https://images3.alphacoders.com/997/997855.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img' src="https://wallpapersmug.com/large/38d8ee/dubai-buildings-cityscape-night-8k.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img' src="https://cdn.wallpapersafari.com/66/3/R7JNsc.jpg" />
        </SwiperSlide>
      </Swiper>

      <div className='box'>
            <div>
                <img src='../imgs/search.png' />              
            </div> 
      </div>


      </div>
    </Wrapper>
  )
}

export default MainScreen
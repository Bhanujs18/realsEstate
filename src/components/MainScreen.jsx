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
import { Autoplay, EffectFade } from 'swiper/modules';


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
  top:10%;
 display: flex;
 justify-content: center;
  z-index: 999;
  width: 100%;
  left:50%;
  transform: translate(-50%,50%);
  .tagline{
   text-align: center;
    width: 100%;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px black;
    color: white;
    letter-spacing: -0.05em;
    font-family: 'Anton', Arial, sans-serif;
    user-select: none;
    text-transform: uppercase;
    font-size: 4rem;
    transition: all 0.25s ease-out;
  }
  .image{
    display: flex;
    justify-content: center;
    width: 45rem;
  }
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
          <img className='img' alt='img' src="../imgs/main1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img' alt='img' src="../imgs/main2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img' alt='img' src="https://assets.architecturaldigest.in/photos/60084b371dd783c692024f2e/master/w_1600%2Cc_limit/Mumbai-Lodha-World-One-towers-apartment-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img' alt='img' src="../imgs/main4.jpg" />
        </SwiperSlide>
      </Swiper>

      <div className='box'>
            <div style={{display:'block'}}>
               <p className='tagline' >  Reality with Corporeal</p> 
               <div style={{display:'flex' , justifyContent:'center'}}>
               <img className='image' alt='img' src='../imgs/search.png' />       
               </div>
                       
            </div> 
      </div>


      </div>
    </Wrapper>
  )
}

export default MainScreen
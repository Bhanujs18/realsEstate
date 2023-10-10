import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';

const Wrapper = styled.section`
.flip_img{
    height: 15rem;
    width: 15rem;
}
`

 const PhotoFlip = () => {

  return (
    <Wrapper>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        loop={true}
        pagination={false}
        navigation={false}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
        style={{width:'15rem'}}
      >
        <SwiperSlide>
          <img className='flip_img'  alt='img' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='flip_img' alt='img' src="../imgs/logo.jpg" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

export default PhotoFlip;

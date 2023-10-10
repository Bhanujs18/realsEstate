import React from 'react';
import styled from 'styled-components';
import { Autoplay , Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Wrapper = styled.section`
margin-top: 2rem;
.heading{
    padding: 1rem;
    color: white;
    font-size: 1.5rem;
}
.img{
    padding: 1rem;
    width: 13rem;
    height: 7rem;
}
@media(max-width:950px){
display: none;
}
`

const Builders = () => {
  return (
    <Wrapper>
        {/* <p className='heading'>Builders</p> */}
  <div style={{display:'flex' , justifyContent:'center'}}>
      <Swiper
        slidesPerView={6}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       <SwiperSlide><img alt='img' src='https://www.30thfeb.com/wp-content/uploads/2015/09/team-builder-logo.jpg' className='img' /></SwiperSlide>
       <SwiperSlide><img alt='img' src='https://findvectorlogo.com/wp-content/uploads/2019/04/indian-construction-equipment-manufacturers-association-icema-vector-logo.png' className='img' /></SwiperSlide>
       <SwiperSlide><img alt='img' src='https://www.30thfeb.com/wp-content/uploads/2015/09/team-builder-logo.jpg' className='img' /></SwiperSlide>
       <SwiperSlide><img alt='img' src='https://www.30thfeb.com/wp-content/uploads/2015/09/team-builder-logo.jpg' className='img' /></SwiperSlide>
       <SwiperSlide><img alt='img' src='https://www.30thfeb.com/wp-content/uploads/2015/09/team-builder-logo.jpg' className='img' /></SwiperSlide>
       <SwiperSlide><img alt='img' src='https://www.30thfeb.com/wp-content/uploads/2015/09/team-builder-logo.jpg' className='img' /></SwiperSlide>
       <SwiperSlide><img alt='img' src='https://www.30thfeb.com/wp-content/uploads/2015/09/team-builder-logo.jpg' className='img' /></SwiperSlide>
      </Swiper>
      </div>
    </Wrapper>
  )
}

export default Builders
import React  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import styled from 'styled-components';
import ReviewsCards from './ReviewsCards';

const Wrapper = styled.section`
.swiper{
    width: 90%;
}
`

export default function MobileReviews() {
  return (
    <Wrapper>
        <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 500
        }}
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><ReviewsCards /></SwiperSlide>
        <SwiperSlide><ReviewsCards /></SwiperSlide>
        <SwiperSlide><ReviewsCards /></SwiperSlide>
        <SwiperSlide><ReviewsCards /></SwiperSlide>
        <SwiperSlide><ReviewsCards /></SwiperSlide>
        <SwiperSlide><ReviewsCards /></SwiperSlide>
        <SwiperSlide><ReviewsCards /></SwiperSlide>
        <SwiperSlide><ReviewsCards /></SwiperSlide>
      </Swiper>
      </div>
    </Wrapper>
  );
}

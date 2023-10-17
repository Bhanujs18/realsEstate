import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import styled from "styled-components";
import ReviewsCards from "./ReviewsCards";
import reviews from "../data/reviews";

const Wrapper = styled.section`
  .swiper {
    width: 90%;
   
  }
`;

export default function MobileReviews() {
  // const {name , dp , review} = reviews;
  return (
    <Wrapper>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 500,
          }}
          pagination={false}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ReviewsCards
              name={reviews[0].name}
              dp={reviews[0].dp}
              review={reviews[0].review}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCards
              name={reviews[1].name}
              dp={reviews[1].dp}
              review={reviews[1].review}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCards
              name={reviews[2].name}
              dp={reviews[2].dp}
              review={reviews[2].review}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCards
              name={reviews[0].name}
              dp={reviews[0].dp}
              review={reviews[0].review}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCards
              name={reviews[1].name}
              dp={reviews[1].dp}
              review={reviews[1].review}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewsCards
              name={reviews[2].name}
              dp={reviews[2].dp}
              review={reviews[2].review}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
}

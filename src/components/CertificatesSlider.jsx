import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";

import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    width: 20rem;
    img {
      width: 20rem;
      height: 20rem;
    }
  }
`;

const CertificatesSlider = () => {
  return (
    <Wrapper>
      <div className="container">
        <Swiper
          grabCursor={true}
          loop={true}
          effect={"creative"}
          autoplay={{
            delay: 500,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="img"
              alt="img"
              src="https://m.media-amazon.com/images/I/71hI16-vr6L.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img"
              alt="img"
              src="https://static.vecteezy.com/system/resources/thumbnails/000/379/097/small/Certificate_Template_Vector_RON_02.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img"
              alt="img"
              src="https://cdn1.vectorstock.com/i/1000x1000/23/30/certificate-template-vector-23572330.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img"
              alt="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9o5v1T6JJ9COtCaur9udQAC7MvNN037WEQ&usqp=CAU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img"
              alt="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUphvjWnFoCex3NshFk9euhE9gTwdjjMcag&usqp=CAU"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img"
              alt="img"
              src="https://m.media-amazon.com/images/I/71hI16-vr6L.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" alt="img" src="../imgs/logo.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default CertificatesSlider;

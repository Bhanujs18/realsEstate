import React from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  .container {
    width: 100%;
    height: 35rem;
    .img {
      height: 35rem;
      width: 100%;

      position: relative;
    }
    .box {
      position: absolute;
      top: 50%;
      display: flex;
      justify-content: center;
      z-index: 99;
      width: 100%;
      left: 50%;
      transform: translate(-50%, 50%);
      .tagline {
        text-align: center;
        width: 100%;
        text-transform: uppercase;
        text-shadow: -15px 5px 20px black;
        color: white;
        letter-spacing: -0.05em;
        font-family: "Anton", Arial, sans-serif;
        user-select: none;
        text-transform: uppercase;
        font-size: 4rem;
        -webkit-text-stroke: 0.2px black
        margin:0;
        transition: all 0.25s ease-out;
      }
      .explore {
        color: white;
        display: flex;
        justify-content: center;
        padding: 1rem 1.5rem;
        border-radius:9px;
        text-decoration: none;
        background: #D84738;
        


    
      }
    }
  }
  @media (max-width: 1000px) {
    .container {
      height: 25rem;
      .img {
        height: 25rem;
      }
      .box {
        top: 30%;
        .tagline {
          font-size: 2.5rem;
        }
        .image {
          display: none;
        }
      }
    }
  }

  @media (max-width: 650px) {
    .container {
      height: 21rem;
      .img {
        height: 21rem;
      }
      .box {
        top: 30%;
        .tagline {
          font-size: 1.4rem;
        }
        .image {
          display: none;
        }
      }
    }
  }

  @media (max-width: 400px) {
    .container {
      height: 17rem;
      .img {
        height: 17rem;
      }
      .box {
        .tagline {
          font-size: 1.4rem;
        }
        .image {
          display: none;
        }
      }
    }
  }
`;

const MainScreen = () => {
  return (
    <Wrapper>
      <div className="container">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={false}
          autoplay={{
            delay: 1500,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="img" alt="img" src="../imgs/main1.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" alt="img" src="../imgs/main2.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img"
              alt="img"
              src="https://assets.architecturaldigest.in/photos/60084b371dd783c692024f2e/master/w_1600%2Cc_limit/Mumbai-Lodha-World-One-towers-apartment-9.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" alt="img" src="../imgs/main4.jpg" />
          </SwiperSlide>
        </Swiper>

        <div className="box">
          <div style={{ display: "block" }}>
            <p className="tagline"> Reality with Corporeal</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <NavLink to='https://docs.google.com/forms/d/e/1FAIpQLSeCFT6GY-ldAZqaP3qb8lo-o4tFpTjVYHeJYPqWGEBLaPt9-A/viewform?usp=sf_link' className='explore'>Request Consultancy ➤</NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainScreen;

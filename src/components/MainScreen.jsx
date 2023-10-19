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
    position: relative;
    .img {
      height: 35rem;
      width: 100%;
      
    }
    .box {
      position: absolute;
      top: 70%;
      display: flex;
      justify-content: center;
      z-index: 99;
      width: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      .tagline {
        text-align: center;
        width: 100%;
        text-transform: uppercase;
        text-shadow:  2px 2px 2px black;
        color: white;
        letter-spacing: -0.05em;
        font-family: "Anton", Arial, sans-serif;
        user-select: none;
        text-transform: uppercase;
        font-size: 4rem;
        // -webkit-text-stroke: 0.2px black
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
        
        .tagline {
          font-size: 2.5rem;
        }
        .image {
          display: none;
        }
        .explore{
          padding: 1rem;
         font-size: 0.8rem;
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
      
        .tagline {
          font-size: 1.4rem;
        }
        .image {
          display: none;
        }
        .explore{
          padding: 0.7rem;
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
<<<<<<< HEAD
            <img className="img" loading="lazy" alt="img" src="https://www.luxuryresidences.in/suncity-platinum-tower-mg-road-gurgaon/images/banner.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" loading="lazy" alt="img" src="https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1459026008753-HRSZH56H8MXGOWUONBV5/Shanghai-Web-212-20160120.jpg?format=1500w" />
=======
            <img className="img" loading="lazy" alt="img" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697367324/main2_jm9tjg.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" loading="lazy" alt="img" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697367324/main1_sxst0n.jpg" />
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img"
              alt="img"
              loading="lazy"
<<<<<<< HEAD
              src="https://windows10spotlight.com/wp-content/uploads/2019/07/abf36aab2b05b64e54c1b3d368d62dc5.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" loading="lazy" alt="img" src="https://png.pngtree.com/background/20230425/original/pngtree-aerial-aerial-perspective-of-a-city-at-night-picture-image_2474396.jpg" />
=======
              src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697367324/main3_g243yl.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img" loading="lazy" alt="img" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697367324/main4_nauq6o.jpg" />
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
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

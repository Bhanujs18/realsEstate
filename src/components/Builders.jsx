import React from "react";
import styled from "styled-components";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import organizations from "../data/Organizations";

const Wrapper = styled.section`
padding: 2rem 0rem;
.heading {
<<<<<<< HEAD
  font-size: 2rem;
=======
  font-size: 3rem;
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
  text-align: center;
  text-transform: uppercase;
  color: #E7E7E7;
  margin:0;
  transition: all 0.3s ease;
  font-weight: 700;
}
  .img {
    background-color: white;
    margin: 1rem 0rem;
     padding: 0rem;
    width: 8rem;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.9) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    height: 8rem;
    border-radius:50%;

    }
  @media (max-width: 950px) {
display:none;
  }
`;

const Builders = () => {
  return (
    <Wrapper>
      <p className='heading'>Our associations</p>
<<<<<<< HEAD
      <p style={{margin:'0' , color:'#E7E7E7' , textAlign:'center' , padding:'0.8rem' , fontSize:'1.1rem' }}>WE DEAL WITH TOP RATED BUILDERS IN GURGAON</p>
=======
      <p style={{margin:'0' , color:'#E7E7E7' , textAlign:'center' , padding:'0.8rem' }}>WE DEAL WITH TOP RATED BUILDERS IN GURGAON</p>
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Swiper
          slidesPerView={7}
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
         {organizations.map((cur) => <SwiperSlide><img alt="img" className="img" src={cur.img} /></SwiperSlide>)}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Builders;

import React from "react";
import styled from "styled-components";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import organizations from "../data/Organizations";

const Wrapper = styled.section`
display: none;

@media(max-width:850px){
    display:block;
    padding: 2rem 0rem;
    .heading{
        text-align:center;
        font-size: 2rem;
        color: white;
        margin:0;
    }
    .img{
        height: 6rem;
        width: 6rem;
        border-radius:50%;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.9) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

    }
}
`;

const MobBuilders = () => {
  return (
    <Wrapper>
      <p className='heading'>OUR ASSOCIATIONS</p>
      <p style={{width:'97%',margin:'0' , color:'white' , textAlign:'center' , padding:'0.6rem 0rem 1.4rem 0rem' }}>WE DEAL WITH TOP RATED BUILDERS IN GURGAON</p>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Swiper
          slidesPerView={3}
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

export default MobBuilders;

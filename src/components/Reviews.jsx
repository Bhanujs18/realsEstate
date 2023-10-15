// const Wrapper = styled.section`
// /* background-image: url('../imgs/grey.jpg'); */
// background-color: #ffffff;
// background-size:cover;
// background-repeat: no-repeat;
// padding: 3rem 0rem;
// width:100%;
// color: white;
// .swiperr {
//   width: 90%;
//   height: 100%;

// }

// .swiper-sliderr {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 18px;
//   font-size: 22px;
//   font-weight: bold;
//   padding: 1rem;
//   color: #000000;
//   /* border: 2px solid #dbba00; */
//   background-color : #ffffff;
// }
// .testimonial{
//   font-size: 2.5rem;
//   text-align: center;
//   color: #dbba00;
//   margin:0rem;
// }

// .mobile_slider{
//   display: none;
// }

// @media(max-width:1000px){
//   .pc_slider{
//     display: none;

//   }

//   .mobile_slider{
//     display: flex;
//     width: 100%;
//   }

// `

// const Reviews = () => {
//   // const [swiperRef, setSwiperRef] = useState(null);

//   // Create array with 500 slides

//   return (
//     <Wrapper>
//     <div style={{textAlign:'center'}}>
//       <p className='testimonial'>TESTIMONIAL</p>
//       <p>Happy Customers</p>
//       </div>

//       <div className='pc_slider'>

//        {/* ------------------ */}

//       <div style={{display:'flex' , justifyContent:'center'}}>
//       <Swiper
//         slidesPerView={4}
//         centeredSlides={true}
//         loop={true}
//         spaceBetween={10}
//         autoplay={{
//           delay: 1500,
//           disableOnInteraction: false,
//         }}
//         pagination={false}
//         navigation={false}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="swiperr"
//       >

//        <SwiperSlide className='swiper-sliderr'><ReviewsCards /></SwiperSlide>
//          <SwiperSlide className='swiper-sliderr'><ReviewsCards /></SwiperSlide>
//          <SwiperSlide className='swiper-sliderr'><ReviewsCards /></SwiperSlide>

//          <SwiperSlide className='swiper-sliderr'><ReviewsCards /></SwiperSlide>
//          <SwiperSlide className='swiper-sliderr'><ReviewsCards /></SwiperSlide>
//          <SwiperSlide className='swiper-sliderr'><ReviewsCards /></SwiperSlide>
//          <SwiperSlide className='swiper-sliderr'><ReviewsCards /></SwiperSlide>

//       </Swiper>
//       </div>

// </div>

//       {/* ------------------*/}

// <div className='mobile_slider'>

//  <div style={{width:'100%'}}>

//      <MobileReviews />

// </div>

// </div>

//     </Wrapper>
//   );
// }
//  export default Reviews

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import ReviewsCards from "./ReviewsCards";
import MobileReviews from "./MobileReviews";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import reviews from "../data/reviews";

const Wrapper = styled.section`
background-color: #f9f9f9;
padding-top:3rem ;
padding-bottom :3rem ;
width :100% ;
color :black;



.testimonial{
font-size :2.5rem ;
text-align :center ;
color :black ;
margin :0rem ;
font-weight: 700;
}

.pc_slider{
display :flex ;
justify-content :center ;
align-items :center ;
}

.mobile_slider{
display :none ;
}

@media(max-width :1000px){
.pc_slider{ 
display :none ;

}

.mobile_slider{
display :flex ;
width :100% ;
}

`;

const Reviews = () => {
  // const {name , dp , review} = reviews;

  return (
    <Wrapper>
      <div style={{ textAlign: "center" }}>
        <p className="testimonial">What Over Customer Are Saying</p>
        <p>Happy Customers</p>
      </div>

      <div className="pc_slider">
        <Swiper
          slidesPerView={3} // Changed this from 3 to 4
          centeredSlides={false} // Changed this from true to false
          loop={true}
          spaceBetween={40}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiperr"
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

      <div className="mobile_slider">
        <div style={{ width: "100%" }}>
          <MobileReviews />
        </div>
      </div>
    </Wrapper>
  );
};
export default Reviews;

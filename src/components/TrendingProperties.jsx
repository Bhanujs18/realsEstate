import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  padding: 3rem 0rem;
  // background-image: url('../imgs/grey.jpg');
  background-size: cover;
  // color: #20262f;
<<<<<<< HEAD
  text-transform: uppercase;
=======
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
  width: 100%;
  color: #E7E7E7;
  .container {
    width: 100%;
    display: block;
    .heading {
      align-items: center;
      margin: 0rem 0rem;
      font-size: 1.1rem;
      display: flex;
      justify-content: center;
      text-align: center;
      .trend_heading {
        font-size: 2rem;
        margin: 0;
        font-weight: 600;
      }
    }
    .cities {
      display: flex;
      // display: grid;
      // grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      width: 100%;
      // .box{
      // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      // border-radius: 15px;
      // overflow: hidden;

      // width: 17rem;
      // .content{
      //     font-weight: 300;
      //     padding: 1rem;
      //     // .location{
      //     //     background-color: #20262F;
      //     //      font-size: 0.7rem;
      //     //     color: white ;
      //     //     border-radius: 8px;
      //     //     width: max-content;
      //     //     padding: 0.4rem;
      //     //    }
      //     // .desc{
      //     //     text-align: justify;
      //     //     font-size: 0.8rem;
      //     // }
      // }

      // .img{

      //     width: 17rem;

      // }

      // }
    }
    .seeAllLocations {
      font-weight: 600;
      text-align: center;
      font-size: 1rem;
      border: 2px #20262f solid;
      // background-color: #20262f;
      background-color: white;
      color: black;
     
      width: max-content;
      padding: 1.2rem 2rem;
      border-radius: 15px;
      cursor: pointer;
      text-decoration:none;
      margin-top:1rem;
    }
    .seeAllLocations:hover {
      background-color: white;
      color: black;
    }
  }
  @media (max-width: 1340px) {
    .container {
      .cities {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media (max-width: 1031px) {
    .container {
      .cities {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media (max-width: 671px) {
    .container {
      .heading {
        font-size: 1rem;
        padding: 1rem;
        .trend_heading{
          font-size: 1.5rem ;
        }
      }
      .cities {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

const TrendingProperties = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="heading">
          <div style={{ display: "block" }}>
            <p className="trend_heading">Iconic Projects</p>
            <p className="trend_tagline">
              Some Outstanding Flats With Premium Amenities
            </p>
          </div>
        </div>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div className="cities">
            {/* <div className='box'>
                    <img alt='img' className='img' src='https://thumbs.dreamstime.com/b/suburban-house-modern-american-front-entrance-green-grass-front-31081489.jpg' />
                   <div className='content'>
                   <p className='location'>Gurgaon</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Est temporibus optio sapiente recusandae velit consequatur
                          commodi esse molestias a. Excepturi quas, labore voluptat
                          es numquam alias laboriosam recusandae a cumque nesciunt?</p>
                   </div>    
               </div>


               <div className='box'>
                    <img alt='img' className='img' src='https://thumbs.dreamstime.com/b/family-american-house-29568541.jpg' />
                   <div className='content'>
                   <p className='location'>Gurgaon</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Est temporibus optio sapiente recusandae velit consequatur
                          commodi esse molestias a. Excepturi quas, labore voluptat
                          es numquam alias laboriosam recusandae a cumque nesciunt?</p>
                   </div>    
               </div>




               <div className='box'>
                    <img alt='img' className='img' src='https://thumbs.dreamstime.com/b/american-house-new-manicured-suburban-beautiful-sunny-day-31081957.jpg' />
                   <div className='content'>
                   <p className='location'>Gurgaon</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Est temporibus optio sapiente recusandae velit consequatur
                          commodi esse molestias a. Excepturi quas, labore voluptat
                          es numquam alias laboriosam recusandae a cumque nesciunt?</p>
                   </div>    
               </div>





               <div className='box'>
                    <img alt='img' className='img' src='https://assets-global.website-files.com/5e99608fae81cfc99b44bcc1/5ecba07789d1eed8f3e7de0c_best-listing-photos-property-snaps-nighttime-614x409.jpeg' />
                   <div className='content'>
                   <p className='location'>Gurgaon</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Est temporibus optio sapiente recusandae velit consequatur
                          commodi esse molestias a. Excepturi quas, labore voluptat
                          es numquam alias laboriosam recusandae a cumque nesciunt?</p>
                   </div>    
               </div> */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Cards />
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
            <NavLink to='/properties/all'  className="seeAllLocations">View More</NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default TrendingProperties;

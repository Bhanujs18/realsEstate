import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 3rem 0rem;
  // background-image: url('../imgs/grey.jpg');
  background-size: cover;
  // color: #20262f;
  color: #E7E7E7;
    text-transform: uppercase;
  .container {
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
      .trend_tagline{
        font-size: 1rem;
      }
    }
    .cities {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      justify-content: center;
      gap: 2rem;
      .box {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        height: 9rem;
        width: 15rem;
        border-radius: 15px;
        cursor: pointer;

        overflow: hidden;

        .name {
          transform: translate(-50%, -50%);
          position: absolute;
          color: white;
          top: 50%;
          font-weight: 600;
          font-size: 1.2rem;
          left: 50%;
        }

        .img {
          height: 12rem;
          width: 19rem;
        }
        .img:hover {
          transform: scale(1.2);
          transition: all 0.4s ease;
        }
      }
    }
    .seeAllLocations {
      font-weight: 600;
      text-align: center;
      font-size: 1rem;
      border: 2px solid #20262f;
      background-color: #20262f;
      color: white;
      width: max-content;
      padding: 1.2rem 2rem;
      border-radius: 15px;
      cursor: pointer;
      text-decoration:none;
     margin-top:1rem;
    }
    .seeAllLocations:hover {
      background-color: white;
      color: #20262f;
    }
  }

  @media (max-width: 1240px) {
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
  @media (max-width: 547px) {
    padding: 0.6rem 0rem;
    .container {
      margin:0;
      .heading {
       .trend_heading{
        font-size: 1.5rem;
       }
       .trend_tagline{
        font-size: 1rem;
       }
        padding: 1rem;
      }
      .cities {
        grid-template-columns: repeat(1, 1fr);
        .box {
         
          .img {
          }
        }
      }
    }
  }
`;

const TrendingLocations = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="heading">
          <div style={{ display: "block" }}>
            <p className="trend_heading">DISCOVER NEW PROPERTIES</p>
            <p className="trend_tagline">
              Browse Locations From a List of Available Cities
            </p>
          </div>
        </div>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div className="cities">
            <NavLink to="/properties/dubai">
            <div className="box" style={{ position: "relative" }}>
              <img
                alt="img"
                className="img"
                src="https://media.timeout.com/images/105242423/750/422/image.jpg"
              />
              <p className="name">Dubai</p>
            </div>
            </NavLink>

            <NavLink to="/properties/gurgaon">
            <div className="box" style={{ position: "relative" }}>
              <img
                alt="img"
                className="img"
                src="https://www.holidify.com/images/bgImages/UDAIPUR.jpg"
              />
              <p className="name">Gurgaon</p>
            </div>
            </NavLink>
           
            <NavLink to="/properties/delhi">
            <div className="box" style={{ position: "relative" }}>
              <img
                alt="img"
                className="img"
                src="https://www.travelseewrite.com/wp-content/uploads/2021/10/The-beauty-of-Udaipur-is-best-enjoyed-at-night-City-Palace-and-Lake-Pichola.jpg"
              />
              <p className="name">New Delhi</p>
            </div>
            </NavLink>
              
            <NavLink to="/properties/goa">
            <div className="box" style={{ position: "relative" }}>
              <img
                alt="img"
                className="img"
                src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/02/Fateh-Sagar-Lake.jpg"
              />
              <p className="name">Goa</p>
            </div>
            </NavLink>
          </div>
        </div>
        {/* <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <NavLink to='/properties/all' className="seeAllLocations">See All Locations</NavLink>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default TrendingLocations;

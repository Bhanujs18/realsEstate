import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  // background-image: url('https://t3.ftcdn.net/jpg/03/48/06/98/360_F_348069838_cWdfRHqvslRsmqp3M2Wtto3lqEA1AFfd.jpg');
  padding: 2rem 0rem;
  background-color: #010203;
  color: #E7E7E7;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    .img_div {
      width: 50%;
      // padding: 1rem;
      display: flex;
      // background-color: #dbba00;
      justify-content: center;
      .img {
        border: 15px solid #203A43;
        height: 22rem;
        width: 29rem;
      }
    }
    .Content_div {
      width: 50%;
      .heading {
        display: flex;
        justify-content: center;

        text-transform: uppercase;
        text-shadow: -15px 5px 20px black;
        color: #E7E7E7;
        letter-spacing: -0.05em;
        font-family: "Anton", Arial, sans-serif;
        user-select: none;
        text-transform: uppercase;
        font-size: 2rem;
        transition: all 0.25s ease-out;
      }
      .content {
        font-style: italic;
        display: flex;
        justify-content: center;
        color: #E7E7E7;
<<<<<<< HEAD
        word-spacing: 6px;
======
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
    
        user-select: none;
        line-height: 1.7;
        padding: 1rem;
        font-size: 1rem;
        transition: all 0.25s ease-out;
      }
    }
  }

  @media (max-width: 1000px) {
    .container {
      display: block;
      .img_div {
        width: 100%;
        .img {
          height: 12rem;
          width: 19rem;
        }
      }
      .Content_div {
        width: 100%;
        .content {
          color: white;
          text-align: justify;
          padding: 1rem;
          font-size: 1.1rem;
          line-height: 1.3;
          font-weight: 400;
        }
      }
    }
  }
  @media (max-width: 450px) {
    text-align: center;
    .container {
      .Content_div {
        .heading {
          font-size: 2rem;
        }
      }
    }
  }
`;

const Goal = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="img_div">
          <img
            className="img"
            src="https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/5ba1a-top-companies-in-india.jpg?fit=1000%2C665&ssl=1"
            alt="img"
          />
        </div>
        <div className="Content_div">
          <p className="heading">ELEVATE PROEX</p>
          <p className="content">
          Elevate ProEx is your trusted partner for buying, occupying, and investing in real estate assets. Our journey began in 2019 with a vision to offer the best and most lucrative investment opportunities across India. Our name reflects our commitment to delivering exclusive, high-quality services that enhance the financial well-being of our clients.
          </p>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <NavLink className="button-28" to='/about'>Read More</NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Goal;

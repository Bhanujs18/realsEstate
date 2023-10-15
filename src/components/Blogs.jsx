import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  background-color: #20262f;
  justify-content: center;
  padding: 1rem 0rem;

  .container {
    border: 5px #20262f solid;
    width: 80%;
    background-color: white;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    padding: 1rem;
    display: block;
    .heading {
      display: flex;
      justify-content: center;
      .head {
        font-size: 2rem;
        font-weight: 600;
      }
    }
    .content {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      .box {
        display: block;
        width: 20rem;
       
        text-align:center;
        
        .img {
          height: 10rem;
          width: 20rem;
        }
      }
    }
  }

  @media (max-width: 1340px) {
    .container {
      .content {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media (max-width: 1031px) {
    .container {
      .content {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media (max-width: 671px) {
    .container {
      .content {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
  @media (max-width: 400px) {
    .container {
      .content {
        grid-template-columns: repeat(1, 1fr);
        .box {
          width: 18rem;
          .img {
            height: 10rem;
            width: 18rem;
          }
        }
      }
    }
  }
`;

const Blogs = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="heading">
          <p className="head">Blogs</p>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="content">
            <div className="box">
              <NavLink style={{textDecoration:'none' , color:'black'}} to="/best_places">
              <img
                className="img"
                src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697220573/best_places_to_buy_szuksx.png"
                alt="img"
              />
              <p>
              BEST PLACES TO BUY 2023
              </p>
              </NavLink>
            </div>

            <div className="box">
            <NavLink style={{textDecoration:'none' , color:'black'}} to="/top_reasons">
              <img
                className="img"
                src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697221678/top_reason_to_buy_guoypv.png"
                alt="img"
              />
              <p>
               TOP REASONS TO BUY 2023
              </p>
              </NavLink>
            </div>

            <div className="box">
            <NavLink style={{textDecoration:'none' , color:'black'}} to="/ultimate_guide">
              <img className="img" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697221875/Screenshot_2023-10-12_195838_icvlut.png" alt="img" />
              <p>
                ULTIMATE GUIDE 2023
              </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blogs;

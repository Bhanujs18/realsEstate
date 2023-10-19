import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  color: #E7E7E7;
  // background-image: url('https://us.123rf.com/450wm/yesheyingchuk/yesheyingchuk2008/yesheyingchuk200800821/155143271-black-luxury-gold-background-golden-silver-polygon-banner-christmas-new-year-celebration-border.jpg?ver=6');
   background-color: #010203;

  padding: 1rem 0rem;
  .container {
    padding: 1rem 0rem;
    .heading {
      text-align: center;

      font-size: 2rem;

      font-weight: 600;
    }

    .buttons {
      display: flex;
      justify-content: Center;
      flex-wrap: wrap;
      gap: 2rem;
      font-weight: 600;
      .button {
        .link {
        }
      }
    }
  }

  @media (max-width: 932px) {
    .container {
      .heading {
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }

  @media (max-width: 652px) {
    .container {
      .heading {
        font-size: 1rem;
        font-weight: 600;
      }
      .buttons {
        display: flex;
        .button {
          .link {
            font-size: 0.9rem;
            display: flex;
            border-radius: 12px;
          }
        }
      }
    }
  }

  @media (max-width: 450px) {
    .container {
      .heading {
        
        font-weight: 600;
      }
      .buttons {
        display: flex;
        gap: 0.8rem;
        .button {
          .link {
            font-size: 0.95rem;
            display: flex;
            border-radius: 12px;
          }
        }
      }
    }
  }
`;

const Category = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <p className="heading">LOOKING TO BUY A NEW PROPERTY</p>
        </div>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div className="buttons">
            <div className="button">
              <NavLink to="/property/Residential" className="link button-28">Residential</NavLink>
            </div>

            <div className="button">
              <NavLink to="/property/Commercial" className="link button-28">Commercial</NavLink>
            </div>

            <div className="button">
              <NavLink className="link button-28" to="/property/SCO">SCO</NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Category;

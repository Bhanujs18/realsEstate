import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  // background-color: #010203;
  justify-content: center;
  padding: 1rem 0rem;

  .container {
    border: 5px #20262f solid;
    width: 100%;
    background-color: black;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    padding: 1rem;
    display: block;
    .heading {
      color: #E7E7E7 ;
      display: flex;
      text-transform: uppercase;
      justify-content: center;
      .head {
        font-size: 2rem;
        font-weight: 600;
      }
    }
    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      .box {
        background-color: #E8E8E8;
        display: block;
        width: 18rem;
        overflow: hidden;
       border-radius: 20px;
<<<<<<< HEAD
        text-align:start;
        .p{
          text-align: justify;
        }
=======
        text-align:justify;
        
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
        .img {
          height: 10rem;
          width: 18rem;
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
      .heading{
        .head{
          font-size: 1.5rem;
        }
      }
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
              <div style={{padding:'1rem'}}>
              <p style={{fontSize:'1.3rem'}}><b> BEST PLACES TO BUY 2023</b> </p>
<<<<<<< HEAD
              <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam nisi explicabo quis corrupti et labore iusto eum aspernatur perspiciatis qui eaque unde ex nihil, consequatur vero? Vel, quae quasi?</p>
=======
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam nisi explicabo quis corrupti et labore iusto eum aspernatur perspiciatis qui eaque unde ex nihil, consequatur vero? Vel, quae quasi?</p>
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
              </div>
              </NavLink>
            </div>

            <div className="box">
            <NavLink style={{textDecoration:'none' , color:'black'}} to="/top_reasons">
              <img
                className="img"
                src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697221678/top_reason_to_buy_guoypv.png"
                alt="img"
              />
               <div style={{padding:'1rem'}}>
              <p style={{fontSize:'1.3rem'}}><b> TOP REASONS TO BUY 2023</b> </p>
<<<<<<< HEAD
              <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam nisi explicabo quis corrupti et labore iusto eum aspernatur perspiciatis qui eaque unde ex nihil, consequatur vero? Vel, quae quasi?</p>
=======
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam nisi explicabo quis corrupti et labore iusto eum aspernatur perspiciatis qui eaque unde ex nihil, consequatur vero? Vel, quae quasi?</p>
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
              </div>
              </NavLink>
            </div>

            <div className="box">
            <NavLink style={{textDecoration:'none' , color:'black'}} to="/ultimate_guide">
              <img className="img" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697221875/Screenshot_2023-10-12_195838_icvlut.png" alt="img" />
              <div style={{padding:'1rem'}}>
              <p style={{fontSize:'1.3rem'}}><b> ULTIMATE GUIDE TO BUY 2023</b> </p>
<<<<<<< HEAD
              <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam nisi explicabo quis corrupti et labore iusto eum aspernatur perspiciatis qui eaque unde ex nihil, consequatur vero? Vel, quae quasi?</p>
=======
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam nisi explicabo quis corrupti et labore iusto eum aspernatur perspiciatis qui eaque unde ex nihil, consequatur vero? Vel, quae quasi?</p>
>>>>>>> fd249770caa0109834ea6230694ed5fd0160e215
              </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blogs;

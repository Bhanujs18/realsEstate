import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  color: white;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border: 2px #20262f solid;
  background-size: cover;
  border-radius: 19px;
  text-align: center;
  padding: 1rem;
  .img {
    height: 5rem;
    width: 5rem;
    border: 2px white solid;
    padding: 0rem;
    border-radius: 50%;
  }
  .text {
    text-align: center;
    font-size: 0.9rem;
  }

  @media (max-width: 1000px) {
    .text {
      text-align: justify;
      color: white;
    }
  }
`;

const ReviewsCards = ({ name, dp, review }) => {
  return (
    <Wrapper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img alt="img" className="img" src={dp} />
      </div>
      {name}
      <br />
      ⭐⭐⭐⭐⭐
      <div className="text">
        <p style={{ fontStyle: "italic", fontWeight: "300" }}>{review}</p>
      </div>
    </Wrapper>
  );
};

export default ReviewsCards;

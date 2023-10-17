import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  color: white;
  background-color: #262626;

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
      color: #E7E7E7 ;
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
        <p style={{ fontStyle: "italic", fontWeight: "300", textAlign:'center' }}>{review}</p>
      </div>
    </Wrapper>
  );
};

export default ReviewsCards;

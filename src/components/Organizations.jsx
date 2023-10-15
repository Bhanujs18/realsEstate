import React from "react";
import organizations from "../data/Organizations";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0rem;
  transition: all 0.3s ease;
`;

const Container = styled.section`
  padding: 0;
  margin: 0;
  display: block;
  .heading {
    font-size: 3.5rem;
    text-align: center;
    text-transform: uppercase;
    color: #5e5e5e;
    transition: all 0.3s ease;
    font-weight: 700;
  }

  @media(max-width: 950px){
    .heading{
      font-size:3rem;
      transition: all 0.3s ease;
    }
  }
  @media(max-width: 590px){
    .heading{
      font-size:1.8rem;
      transition: all 0.3s ease;
    }
  }
`;

const Images = styled.div`
display: grid;
grid-template-columns: repeat(5 , 1fr);
gap: 2rem;
padding: 0rem 1rem;
justify-content: center;

.img{
    height: 10rem;
    width: 10rem;
    border-radius:50%;

    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

@media(max-width: 950px){
  .img{
    height: 8rem;

    width: 8rem;
  }
}
@media(max-width: 800px){
  
grid-template-columns: repeat(3 , 1fr);
  .img{
    height: 8rem;
    transition: all 0.3s ease;
    width: 8rem;
  }
}
@media(max-width: 560px){
  gap: 1rem;
  grid-template-columns: repeat(3 , 1fr);
    .img{
      height: 6rem;
      transition: all 0.3s ease;
      width: 6rem;
    }
  }

`;

const Organizations = () => {
  console.log(organizations[0].img);
  return (
    <Wrapper>
      <Container>
        <p className="heading">OUR ORGANIZATIONS</p>
        <Images>
          {organizations.map((cur, index) => (
            <img className="img" alt="associations" src={cur.img} key={index} />
          ))}
        </Images>
      </Container>
    </Wrapper>
  );
};

export default Organizations;

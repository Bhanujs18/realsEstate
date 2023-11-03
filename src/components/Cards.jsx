import React from "react";
import styled from "styled-components";

const Section = styled.div`
  color: #E7E7E7;
  font-weight: 400;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const CardSection = styled.div`
display: flex;
justify-content: Center;
flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  
  width: 100%;
  margin: 0 auto;

  
`;

const CardContainer = styled.div`
  position: relative;
  height: 15rem;

  width: 15rem;
  overflow: hidden;
  background-color: #20262f;

  border-radius: 11px;

  @media (max-width: 545px) {
    height: 11rem;
    width: 11rem;
    border: 2px transparent  solid;
  }

  @media (max-width: 400px) {
    height: 10rem;
    width: 10rem;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  border-radius: 11px;

  ${CardContainer}:hover & {
    transform: translateY(45%);
  }
`;

const CardData = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  display: flex;
  justify-content: center;
`;

const Cards = () => {
  return (
    <div>
      <Section>
        <CardSection>
          <CardContainer>
            <CardData>
              <p>
                {" "}
                <strong>DLF Garden City Enclave</strong>
                <br />
                Price: Rs 1.51/-*
                <br />
                2/3BHK <br />
                Under Construction
              </p>
            </CardData>
            <Image
              src="https://www.dlfhomes.co.in/dlf-gardencity-enclave-floors-sector-93-gurgaon/images/banner.webp"
              alt="Card"
            />
          </CardContainer>
          <CardContainer>
            <CardData>
              <p>
                {" "}
                <strong>M3M Route 65 Mall</strong>
                <br />
                Price: Rs 750,000/-
                <br />
                250 - 1000 Sq. Ft.
                 <br />
                 Under Construction
              </p>
            </CardData>
            <Image
              src="https://www.larisarealtech.com/wp-content/uploads/2022/08/M3M-Route-65-Gallery-Image-1-1-1-1.jpg"
              alt="Card"
            />
          </CardContainer>
          <CardContainer>
            <CardData>
              <p>
                {" "}
                <strong>Beachfront Bungalow</strong>
                <br />
                Price: Rs 250,000/-
                <br />
                1 King Bed <br />
                Ocean View
              </p>
            </CardData>
            <Image
              src="https://img.freepik.com/premium-photo/living-room-with-view-city-skyline_933706-9525.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1696636800&semt=ais"
              alt="Card"
            />
          </CardContainer>
          <CardContainer>
            <CardData>
              <p>
                {" "}
                <strong>City Loft</strong>
                <br />
                Price: Rs 200,000/-
                <br />
                1 Loft Bed <br />
                Skyline View
              </p>
            </CardData>
            <Image
              src="https://img.freepik.com/premium-photo/arafed-living-room-with-large-window-lot-furniture-generative-ai_974533-6631.jpg"
              alt="Card"
            />
          </CardContainer>
        </CardSection>
      </Section>
    </div>
  );
};

export default Cards;

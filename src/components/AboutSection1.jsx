import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
justify-content: center;
width:100%;
`;
const Container = styled.section`
  display: flex;
  width: 100%;
  background-color: black;
  padding: 2rem 0rem;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  @media(max-width:800px){
    display:block;
  }
 
  
    @media(max-width:800px){
  .responsive{
    display:flex;
    justify-content:center;
    width:100%;
  }
`;
const Photo = styled.img`
  height: 15rem;
  border-radius: 13px;

}
  `;
const Heading = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #E8E6E7;
  font-weight: 700;
`;
const Content = styled.p`
  padding: 1rem;
  line-height: 1.3;
  font-weight: 300;
  text-align: center;
  font-style: italic;
  color: #E8E6E7;

  @media(max-width:800px){
    text-align:justify;
  }
`;
const Section = styled.div`
  border-radius: 16px;
  width: 65%;
  @media(max-width:800px){
    width: 100%;
  }
`;

const AboutSection1 = () => {
  return (
    <Wrapper>
      <Container>
        <div className="responsive">
        <Photo src="https://st2.depositphotos.com/5653638/11537/i/450/depositphotos_115374640-indian-businessman-holding-ball-pen-and-thinking-indian-businessman-thinking-asian-businessman-holding-pen-while-deep-thinking-indian-businessman-solving-problem-isolated-over-white-background.jpg" />
        </div>
        <Section>
          <Heading>Who We Are?</Heading>
          <Content>
          <p>Elevate ProEx is your trusted partner for buying, occupying, and investing in real estate assets. Our journey began in 2019 with a vision to offer the best and most lucrative investment opportunities across India. Our name reflects our commitment to delivering exclusive, high-quality services that enhance the financial well-being of our clients.</p>
          </Content>
        </Section>
        
      </Container>
      
    </Wrapper>
  );
};

export default AboutSection1;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem 0rem;
`;

const Form = styled.form`
  display: block;
  padding: 1rem;
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 15px;
  background-color: #E7E7E7;
`;

const Heading = styled.p`
  display: flex;
  color: #3D3D3D;
  justify-content: Center;
  text-align: center;
  font-weight: 700;
  padding: 0rem 2rem;
  font-size: 1.5rem;
  margin: 0;

  @media(max-width:450px){
    font-size: 1.1rem;
  }
`;
const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  .responsive{
      display:block;
      width:22rem;
  }
  @media(max-width:450px){
    .responsive{
      width:18rem;
  }
  }
`;

const Submit = styled.button`
  display: flex;
  background-color: #20262F;
  color: white;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  border-radius: 7px;
`;

const Content = styled.div`
  padding: 1rem 0rem;
  width:100%;
  margin:0;
  font-weight:400;
  display: flex;
  text-align: center;
  color: black;
  @media(max-width:450px){
    font-size: 0.9rem;
  }
`;

const ServicesCard = ({Cur}) => {
  console.log(Cur)
  return (
    <Wrapper>
      <Form>
        <Heading>{Cur.name}</Heading>
        <Container>
          <div className="responsive">
            <Content>
            {Cur.content}
            </Content>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Submit><NavLink to="tel:+91-9991998060" style={{color:"white" , textDecoration:'none'}}>{Cur.button}</NavLink></Submit>
            </div>
          </div>
        </Container>
      </Form>
    </Wrapper>
  );
};

export default ServicesCard;

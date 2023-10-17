import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  text-align: Center;
  background: #C9D6FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 1rem 1.4rem;
  border-radius: 13px;

  width: 13rem;
  height: 7rem;
`;

const Container = styled.div`
  display: flex;
  justify-content:Center;
`;

const Inputs = styled.div`
  .inputs {
    display: block;
    height: 2rem;
    width: 13rem;
    margin: 1rem 0rem;
    border-radius: 7px;
    font-size: 1rem;
    outline: none;
    border: 1px black solid;
    padding-left:0.4rem;
  }
`;

const Button = styled.section`
  display: flex;
  justify-content: center;

  .button {
    align-items: cenetr;
    padding: 1rem;
    border-radius: 6px;
    background-color: red;
    color: white;
    border: none;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    box-shadow:
      rgba(0, 0, 0, 0.09) 0px 2px 1px,
      rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-radius: 7px;
  }
`;

const GetinTouch = () => {
  return (
    <Wrapper>
      <Container>
        <div style={{display:'block'}}>
        <Inputs>
          <input className="inputs" type="text" placeholder="Email"></input>
        </Inputs>
        <Button>
          <NavLink style={{ textDecoration: "none" }} className="button">
            Get Updates
          </NavLink>
        </Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default GetinTouch;

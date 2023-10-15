import React from "react";
import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Wrapper = styled.section``;

const Container = styled.div`
  position: fixed;
  top: 85%;
  z-index: 999;
  left: 90%;
  transform: translateY(50%, -50%);

  .icons {
    display: block;
    font-size: 2rem;
    margin: 0;
    width: 1.7rem;
    padding: 0.3rem;
    background-color: #20262f;
    color: white;
    border: 2px white solid;
    border-radius: 50%;
    height: 1.7rem;
  }

  @media (max-width: 450px) {
    top: 80%;
    left: 80%;
  }
`;

const ScrollTop = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Container>
        <BsFillArrowUpCircleFill className="icons" onClick={goToTop} />
      </Container>
    </Wrapper>
  );
};

export default ScrollTop;

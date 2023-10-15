import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import styled from "styled-components";
import { BsWhatsapp, BsFacebook, BsTwitter } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {AiFillYoutube} from "react-icons/ai";

const Wrapper = styled.section``;

const Container = styled.div`
  position: fixed;
  top: 30%;
  z-index: 101;
  right: 0%;
  transform: translateY(50%, -50%);

  .icons {
    display: block;
    font-size: 2rem;
    margin: 0;
    width: 1.7rem;
    padding: 0.3rem;
    height: 1.7rem;
  }
`;

const SocialMediaIcons = () => {
  return (
    <Wrapper>
      <Container>
      <NavLink   to="">
        <BsFacebook
          className="icons"
          style={{ color: "#0D8BF0", backgroundColor: "white" }}
        />
        </NavLink>

        <NavLink   to="tel:+91-9991998060">
        <BiSolidPhoneCall
          className="icons"
          style={{ color: "white", backgroundColor: "#20262F" }}
        />
        </NavLink> 

        <NavLink   to="https://wa.me/+91-999-199-8060">
        <BsWhatsapp
          className="icons"
          style={{ color: "green", backgroundColor: "white" }}
        />
        </NavLink>

        <NavLink   to="">
        <BsTwitter
          className="icons"
          style={{ color: "white", backgroundColor: "#1D9BF0" }}
        />
        </NavLink>
        <NavLink   to="https://youtube.com/@ElevateProEx-kw1ir?si=ZYTT8hkm04XmTeDu">
        <AiFillYoutube
          className="icons"
          style={{ color: "red", backgroundColor: "white" }}
        />
        </NavLink>
      </Container>
    </Wrapper>
  );
};

export default SocialMediaIcons;

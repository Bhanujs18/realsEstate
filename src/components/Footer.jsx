import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import GetinTouch from "./GetinTouch";

const Wrapper = styled.section`
background: #010203;
display: flex;
justify-content: center;
width: 100%;
color: white;
.footerDiv{
  padding: 1rem 0rem;;
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

@media(max-width: 600px){
  display: flex;
  justify-content;
  .footerDiv{
      width: max-content;
      display: block;
}
}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .logo_div {
    .footerlogo {
      display: flex;
      justify-content: start;
      
    }
    .text {
      width: 14rem;
    }
    .links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      font-size: 1.5rem;
    }
  }

  .quickLinks {
    font-size: 1rem;
    display: block;
    text-align: start;
    width: 100%;
    .footer-links {
      display: block;
      color: white;
      align-items: center;
      text-decoration: none;

      padding: 0.3rem 0rem;
    }
  }

  @media (max-width: 920px) {
    .none {
      display: none;
    }
  }

  @media (max-width: 750px) {
    .quickLinks{ 
      text-align:center;
    }
    .touch {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <div style={{background: "black" }}>
    <Wrapper>
      <div className="footerDiv">
        {" "}
        {/*  footer div starts */}
        {/* --------------------------logo Links  text starts------------------------------ */}
        <Container>
          <div className="logo_div">
            <img
              alt="main-logo"
              src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697658349/Untitled_design_14_i6wxel.png"
              className="footerlogo"
              style={{ height: "10rem" }}
            />
           
            <div className="links">
              <a href="https://www.instagram.com/" style={{ color: "white" }}>
                <BsInstagram className="footer-icons" />
              </a>
              <a href="https://www.facebook.com/" style={{ color: "white" }}>
                <BsFacebook className="footer-icons" />
              </a>
              <a href="https://www.twitter.com/" style={{ color: "white" }}>
                <BsTwitter className="footer-icons" />
              </a>
              <a href="https://youtube.com/@ElevateProEx-kw1ir?si=ZYTT8hkm04XmTeDu" style={{ color: "white" }}>
                <AiFillYoutube className="footer-icons" />
              </a>
            </div>
          </div>
        </Container>
        {/* --------------------------logo  text starts------------------------------ */}
        {/* --------------------------Quick Links  text starts------------------------------ */}
        <Container>
          <div className="quickLinks none">
            <NavLink className="footer-links" to="/">
              Home
            </NavLink>
            <NavLink className="footer-links" to="/menu">
              Menu
            </NavLink>
            <NavLink className="footer-links" to="/about">
              About Us
            </NavLink>
            <NavLink className="footer-links" to="/contact">
              Contact Us
            </NavLink>
            <NavLink className="footer-links" to="/privacy_policy">
              Privacy & Policy
            </NavLink>
            <NavLink className="footer-links" to="/terms_and_conditions">
              Terms & Conditions
            </NavLink>
          </div>
        </Container>
        {/* --------------------------Quick Links  text starts------------------------------ */}
        {/* --------------------------callus  text starts------------------------------ */}
        <Container>
          <div className="quickLinks">
            <p style={{fontSize:"1.2rem"}}>Contact Us</p>
            <p> +91 999 199 8060</p>
            <p> www.elevateproex.com</p>
            <p> info@elevateproex.com</p>
            <p className="text">
              Elevate Proex,
            Gurgaon Sector 36A
            </p>
          </div>
        </Container>
        {/* --------------------------callus  text starts------------------------------ */}
        {/* --------------------------GetinTouch  text starts------------------------------ */}
        <Container>
          <div className="touch">
            <GetinTouch />
          </div>
        </Container>
        {/* -------------------------- GetinTouch text starts------------------------------ */}
      </div>
      {/*  footer div ends */}
      
    </Wrapper>
{/* -------------------------- copyright text starts------------------------------ */}
       <p style={{textAlign:"center" , fontSize:'0.8rem' , color:'white' , padding:"0.3rem 0rem"}}>© 2023 Elevate ProEx. All rights reserved</p> 
      {/* -------------------------- copyright text ends------------------------------ */}
    </div>
  );
};

export default Footer;

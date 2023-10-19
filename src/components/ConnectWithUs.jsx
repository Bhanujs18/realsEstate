import React, { useState } from "react";
import styled from "styled-components";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Form from "./Form";

const Wrapper = styled.section`
  // background-image: url('https://media.istockphoto.com/id/1320306462/video/4k-abstract-luxury-black-grey-gradient-backgrounds-with-diagonal-golden-metallic-stripes.jpg?s=640x640&k=20&c=zwBGZfYlbYVMNcnJirViOlEOFHLkPJeg9z-HvfLr77Y=');
  background-size: cover;
  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
  // background: #0F2027;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color :#E7E7E7 ;
  font-size: 1.1rem;
  background-repeat: no-repeat;
  padding: 2rem 0rem;
  margin:0;
  .connectwithus {
    font-size: 2rem;
    text-align: center;
    color: #E7E7E7 ;
    padding:0;
    font-weight: 600;
    margin: 0;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    .box {
      display: flex;
      justify-content: center;

      font-size: 1rem;
      font-weight: 600;
      background-color: #E7E7E7 ;
      align-items: center;
      color: white;
      box-shadow:
        rgba(0, 0, 0, 0.09) 0px 2px 1px,
        rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px,
        rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
      gap: 1rem;
      padding: 0.3rem 0.7rem;
      cursor: pointer;
      align-items: center;
      text-align: center;
      border-radius: 18px;
      .icons {
        font-size: 2rem;
        width: max-content;
        color: white;
      }
    }
  }

  @media (max-width: 984px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 672px) {
    .connectwithus {
      font-size: 1.5rem;
    }
    .container {
      grid-template-columns: repeat(2, 1fr);
      padding: 1rem;
    }
  }
  @media (max-width: 450px) {
    .connectwithus {
      font-size: 1.5rem;
    }
    .container {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem;
    }
  }
`;






const ConnectWithUs = () => {

const [showform , setShowform] = useState(false);

const close = () => setShowform(false);

  return (
    <Wrapper>
      <div style={{ textAlign: "center" }}>
        <p className="connectwithus">CONNECT WITH US</p>
        <p style={{ padding: "1rem" }}>
          With our umbrella of realty solutions, we are available 24x7 to help
          you.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="container">
          <NavLink style={{textDecoration:'none'}} to="https://wa.me/+91-999-199-8060">
          <div
            className="box"
            style={{
              backgroundColor: "#E7E7E7",
              border: "2px green solid",
              color: "green",
            }}
          >
            <BsWhatsapp className="icons" style={{ color: "green" }} />

            <p>Whatsapp</p>
          </div>
          </NavLink> 


          <NavLink to="tel:+91-9991998060" style={{textDecoration:'none'}}>
          <div
            className="box"
            style={{
              backgroundColor: "#E7E7E7",
              border: "2px #2091EB solid",
              color: "#2091EB",
            }}
          >
           
            <BiPhoneCall className="icons" style={{ color: "#2091EB" }} />

            <p>Call Us</p>
            
          </div>
          </NavLink>

          {/* <a style={{textDecoration:'none'}} href="mailto:email@example.com"> */}
          <div
            className="box"
            style={{
              backgroundColor: "#E7E7E7",
              border: "2px #E34033 solid",
              color: "#E34033",
              textDecoration:'none'
            }}
          >
            <BiLogoGmail onClick={()=>setShowform(true)} className="icons" style={{ color: "#E34033" ,textDecoration:'none'}} />

            <p onClick={()=>setShowform(true)}>Book A Site Visit</p>
            {showform ? <Form close={close} /> : null}
          </div>
          {/* </a> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ConnectWithUs;

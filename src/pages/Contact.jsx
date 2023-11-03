import React from "react";

import styled from "styled-components";
import ConnectWithUs from "../components/ConnectWithUs";

const Wrapper = styled.section`
  display: flex;

  // background-color: #20262F
  padding: 2rem 0rem;
  justify-content: end;
  width: 80%;
  margin: 0;

  paddinf: 0;

  @media(max-width: 600px){
     justify-content: center;
  }
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
  background: rgb(1,2,3,0.6);
`;

const Heading = styled.p`
  display: flex;
  color: white;
  font-weight: 700;
  padding: 0rem;
   justify-content:Center;
  font-size: 2.3rem;
  width:100%;
  margin: 0;
  @media(max-width: 500px){
    font-size: 1.5rem;
    justify-content:Center;
    text-align:Center;
  }
`;
const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  .textarea{
    width: 17rem;
    border-radius: 8px;
    padding-left: 0.4rem;
    outline: none;
  }
`;
const Inputs = styled.input`
  display: block;
  align-self: center;
  margin: 1.5rem 0rem;
  border-radius: 8px;
  border: none;
  width: 17rem;
  padding-left: 0.4rem;
  height: 3rem;
  color: #333333;
  border: 1px #333333 solid;
  outline: none;
 
`;
const Submit = styled.button`
  display: flex;
  background-color: red;
  color: white;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 7px;
`;

const UpperSection = styled.section`
  display: flex;
 justify-content: center;
 background-image: url('https://res.cloudinary.com/dyqynjew8/image/upload/v1698563582/Screenshot_2023-10-29_124251_vrnbym.png');
 background-size: cover;
 background-repeat: no-repeat;
padding: 1rem 0rem 1rem 0rem;

@media(max-width:700px){
  
}
`;

const ContactPage = styled.div`

overflow:hidden;
  .heading {
    font-size: 2rem;
    text-align: center;

    text-transform: uppercase;
    color: white;
    margin: 0;
    padding: 2rem 0rem;
    font-weight: 700;
  }
  @media(max-width:700px){
    .heading{
      font-size: 1.2rem;
      padding: 1rem 0rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactPage>
      {/* <p className="heading">REACH US</p> */}
     
      <UpperSection>
     
        <Wrapper>
          <Form>
            
            <Container>
           
              <div style={{ display: "block", width: "max-content" }}>
              <Heading>Get in Touch</Heading>
                <Inputs type="text" placeholder="Name"></Inputs>
                <Inputs type="email" placeholder="Email"></Inputs>
                <textarea
                  style={{ height: "5rem" }}
                  type="text"
                  placeholder="Message..."
                  name="message"
                  className='textarea'
                ></textarea>
              
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Submit>Submit</Submit>
                </div>
              </div>
            </Container>
          </Form>
        </Wrapper>
      
      </UpperSection>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14036.695218827295!2d76.9774461!3d28.414012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d62ba75a883%3A0xf0cf341425dbb33f!2sSector%2036A%2C%20Gurugram%2C%20Haryana%20122004!5e0!3m2!1sen!2sin!4v1697360315180!5m2!1sen!2sin"
          height="250"
          title="map"
          width="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{backgroundColor:'#274957'}}
        ></iframe>
      <ConnectWithUs />
    </ContactPage>
  );
};

export default Contact;

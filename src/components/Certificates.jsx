import React from "react";

import styled from "styled-components";

import CertificatesSlider from "./CertificatesSlider";

const Wrapper = styled.section`
// background-image: url('https://t3.ftcdn.net/jpg/03/48/06/98/360_F_348069838_cWdfRHqvslRsmqp3M2Wtto3lqEA1AFfd.jpg');
padding: 2rem 0rem;
background-color: #20262F;
.container{
   
    width: 100%;
    display: flex;
   justify-content: center;
   align-items: center;
   gap: 3rem;
    .img_div{
        width: 50%
       
       display: flex;
       justify-content: center;
       border: 20px white solid;
       .img1{
        display: none;
      }
       .img{
        width: 26rem;
        
       }
    }
    .Content_div{
        padding: 1rem;
        display: flex;
         background-color: #20262F;
         width: 50%;
        justify-content: center;
        .heading{
            display: flex;
            justify-content: center;
      
            text-transform: uppercase;
            text-shadow: -15px 5px 20px black;
            color: white;
            letter-spacing: -0.05em;
            font-family: 'Anton', Arial, sans-serif;
            user-select: none;
            text-transform: uppercase;
            font-size: 4rem;
            transition: all 0.25s ease-out;
        }
        .heading:hover {
            text-shadow: -16px 6px 15px black;
        }
    }
}

@media(max-width:1018px){
    .container{
        width: 100%;
        display: flex;
       justify-content: center;
       align-items: center;
       gap: 3rem;
        .img_div{
           display: flex;
           justify-content: center;
           
           .img{
            width: 20rem;
           }
        }
        .Content_div{
          width:100%;
            text-align:center;
            .heading{
            display: flex;
       
            justify-content: center;
            font-size: 2rem;
            }
        }
    }  
}
@media(max-width:750px){
  padding:0rem;
  margin:0;
    .container{
      padding:0rem;
        display: block;
       justify-content: center;
       align-items: center;
      margin:0;
      padding:0;
        .img_div{
           display: flex;
           justify-content: center;
           .img{
            width: 24rem;
            
           }
        }
        .Content_div{
          padding:0rem;
            display:flex;
         
        }
    }  
}



@media(max-width: 400px){
    display: flex;
    justify-content: center;
    .container{
        .img_div{
            display: flex;
            width: 100%;
           
            justify-content: center;
            .img{
              display: none;
            }
            .img1{
               display: flex;
               height: 17rem;
            }
        }
    }
}
`;

const Certificates = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="Content_div">
          <p className="heading">
            Properties <br />
            Certificates
          </p>
        </div>
        <div className="img_div">
          <div style={{ width: "25rem" }}>
            <CertificatesSlider />
            <img
              className="img1"
              alt="img"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-award-design-template-e085c24bc1b22051b64768996f52debc_screen.jpg?ts=1608659703"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Certificates;

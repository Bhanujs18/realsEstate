import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import OurMission from './OurMission';
import CertificatesSlider from './CertificatesSlider';

const Wrapper = styled.section`
background-image: url('https://t3.ftcdn.net/jpg/03/48/06/98/360_F_348069838_cWdfRHqvslRsmqp3M2Wtto3lqEA1AFfd.jpg');
padding: 2rem 0rem;

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
        padding: 1rem;
       
        .heading{
        display: flex;
        justify-content: center;
        font-size: 4rem;
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
            padding: 1rem;
           
            .heading{
            display: flex;
            justify-content: center;
            font-size: 2rem;
            }
        }
    }  
}
@media(max-width:1018px){
    .container{
        width: 100%;
        display: block;
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
            padding: 1rem;
           
            .heading{
            display: flex;
            justify-content: center;
            font-size: 2rem;
            }
        }
    }  
}
`

const Certificates = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='img_div'>
                <div className='img'>
               <CertificatesSlider />
               
               </div>
            </div>
            <div className='Content_div'>
              <p className='heading'>Properties Certificates</p>
            </div>
        </div>
    </Wrapper>
  )
}

export default Certificates
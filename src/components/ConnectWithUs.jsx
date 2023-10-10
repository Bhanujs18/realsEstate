import React from 'react';
import styled from 'styled-components';
import {BiLogoGmail} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import {BsWhatsapp} from 'react-icons/bs';
import {BiPhoneCall} from 'react-icons/bi'

const Wrapper = styled.section`
background-image: url('https://media.istockphoto.com/id/1320306462/video/4k-abstract-luxury-black-grey-gradient-backgrounds-with-diagonal-golden-metallic-stripes.jpg?s=640x640&k=20&c=zwBGZfYlbYVMNcnJirViOlEOFHLkPJeg9z-HvfLr77Y=');
background-size:cover;
color: white;
font-size: 1.2rem;
background-repeat: no-repeat;
padding: 3rem 0rem;
.connectwithus{
  font-size: 2.5rem;
  text-align: center;
  color: white;
  font-weight: 600;
  margin: 0;

}
.container{
  color: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .box{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 1.5rem;
    background-color: white;
    align-items: center;
    padding: 2rem;
    width: 15rem;
    height: 15rem;
    align-items: center;
    text-align:center;
    border-radius: 18px;
    .icons{
      font-size: 4rem;
      margin: 1rem 0rem;
    }
    .links{
      text-decoration : none;
      display: flex;
      justify-content: Center;
      text-align: center;
      .link{
        border-radius: 12px;
        text-decoration : none;
        color: black;
        padding: 1rem;
        background-color: white;
        border: 2px black solid
      }
      .link:hover{
        background-color: black;
        color: #dbba00;
      }
    }
  }
}


@media(max-width: 984px){
  .container{
    grid-template-columns: repeat(2, 1fr);
  }
}
@media(max-width: 672px){
  .connectwithus{
    font-size: 1.3rem;
  }
  .container{
    grid-template-columns: repeat(1, 1fr);
  }
}
`

const ConnectWithUs = () => {
  return (
    <Wrapper>
      <div style={{textAlign:'center'}}>
      <p className='connectwithus'>CONNECT WITH US</p>
      <p style={{padding:'1rem'}}>With our umbrella of realty solutions, we are available 24x7 to help you.</p>
      </div>
      <div style={{display:'flex', justifyContent:'center' , width:'100%'}}>
       <div className='container'>


        <div className='box'>
          <div style={{display:'flex' , justifyContent:'center' , width:'100%'}} >
          <BsWhatsapp className='icons' style={{color:'green'}} />
          </div>
          <p>Whatsapp</p>
          <div  className="links" >
          <NavLink className="link">Connect </NavLink>
          </div>
        </div>

        <div className='box'>
        <div style={{display:'flex' , justifyContent:'center' , width:'100%'}} >
        <BiPhoneCall className='icons' style={{color:'#2E86AB'}} />
          </div>
          <p>Request a Call Back</p>
          <div  className="links" >
          <NavLink  className="link">Call Now</NavLink>
          </div>
        </div>

        <div className='box'>
        <div style={{display:'flex' , justifyContent:'center' , width:'100%'}} >
        <BiLogoGmail className='icons' style={{color:'#FF3300'}} />
          </div>
          <p>Book An Site Visit</p>
          <div  className="links" >
          <NavLink  className="link">Book Now</NavLink>
          </div>
        </div>


       </div>
      </div>
    </Wrapper>
  )
}

export default ConnectWithUs
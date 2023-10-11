import React from 'react';
import styled from 'styled-components';
import {BiLogoGmail} from 'react-icons/bi';
import {BsWhatsapp} from 'react-icons/bs';
import {BiPhoneCall} from 'react-icons/bi'

const Wrapper = styled.section`
// background-image: url('https://media.istockphoto.com/id/1320306462/video/4k-abstract-luxury-black-grey-gradient-backgrounds-with-diagonal-golden-metallic-stripes.jpg?s=640x640&k=20&c=zwBGZfYlbYVMNcnJirViOlEOFHLkPJeg9z-HvfLr77Y=');
background-size:cover;
background-color: #20262F;
// background: #0F2027;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .box{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 1.5rem;
    background-color: white;
    align-items: center;
    color: white;
    padding: 2rem;
    width: 10rem;
    cursor: pointer;
    height: 10rem;
    align-items: center;
    text-align:center;
    border-radius: 18px;
    .icons{
      font-size: 4rem;
      margin: 1rem 0rem;
      color: white;
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


        <div className='box' style={{backgroundColor:'green'}}>
          <div style={{display:'flex' , justifyContent:'center' , width:'100%'}} >
          <BsWhatsapp className='icons' style={{color:'white'}} />
          </div>
          <p>Whatsapp</p>
        </div>

        <div className='box' style={{backgroundColor:'#2E86AB'}}>
        <div style={{display:'flex' , justifyContent:'center' , width:'100%'}} >
        <BiPhoneCall className='icons' />
          </div>
          <p>Request a Call Back</p>
        </div>

        <div className='box' style={{backgroundColor:'#FF3300'}}>
        <div style={{display:'flex' , justifyContent:'center' , width:'100%'}} >
        <BiLogoGmail className='icons'  />
          </div>
          <p>Book An Site Visit</p>
        </div>


       </div>
      </div>
    </Wrapper>
  )
}

export default ConnectWithUs
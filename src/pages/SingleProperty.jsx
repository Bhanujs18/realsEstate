import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import flats from "../data/Flats";
import styled from "styled-components";
import {ImLocation} from 'react-icons/im';
import ConnectWithUs from "../components/ConnectWithUs"

import TrendingProperties from "../components/TrendingProperties";
import Form from "../components/Form";

const IMageSection = styled.div`
display: flex;
padding: 0.5rem;
flex-direction: row-reverse;
justify-content:center;
align-items:Center;
`
const PropertySection = styled.section`
// background: #0F2027;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`
const Wrapper = styled.div`
display: flex;
justify-content:center;
width:100%;

`
const Conatiner = styled.div`

display: flex;
align-items:Center;
padding: 0rem 0rem 1rem 0rem;

@media(max-width: 1200px){
  display: block;
  padding: 0rem;
}
`
const IMage = styled.img`
height: 17rem;
transition: all 0.3s ease;
width: 25rem;
@media(max-width:627px){
  width: 15rem;
height: 11rem;
}
`
const Name = styled.p`
font-size: 2rem;
margin:0;
padding:0;

`
const Location = styled.p`
background-color: black;
padding: 0.4rem;
width: max-content;
color: white;
font-size: 0.8rem;
`
const Place = styled.p`
width: 100%;
`

const SinglePropty = () => {

  const [showform , setShowform] = useState(false);

  const close = () => setShowform(false);

  const { id } = useParams();
  const proptery = flats.filter((cur) => cur.id === id);
console.log(proptery)
  const [showimage , setShowimage] = useState(proptery[0].imgs1)

  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <PropertySection>
      <p style={{padding:'2rem 0rem' , textAlign:'center' , fontWeight:"700" , margin:'0' , color:'black'}} className='properties'>{proptery[0].name} - {proptery[0].Location} </p>

        <Wrapper>
          {proptery.map((cur, index) => {
            return (

              <Conatiner key={index}>

                <IMageSection>
                  <IMage style={{padding:'0.5rem'}} src={showimage} />
                  <div className="div">
                  <img className="small" alt="img"  onClick={()=>setShowimage(cur.imgs1)}  src={cur.imgs1} />
                  <img className="small" alt="img" onClick={()=>setShowimage(cur.imgs2)}  src={cur.imgs2} />
                  <img className="small" alt="img" onClick={()=>setShowimage(cur.imgs3)}  src={cur.imgs3} />
                  <img className="small" alt="img" onClick={()=>setShowimage(cur.imgs4)} src={cur.imgs4} />
                  </div>
                </IMageSection>
                 <div className="flat_details">
                  <Name>{cur.name}</Name>
                  <Location><ImLocation /> {cur.Location}, {cur.place}</Location>
                  
                  <div className="flat">
                  <Place>Type - {cur.type}</Place>
                  <Place>Project Area - </Place>
                  <Place>Size - </Place>
                  <Place>Possession Starts - </Place>
                  <Place>Project Size - </Place>
                  <Place>Configuration - </Place>
                  <Place>Price - </Place>
                  </div>
                 
                 
                  
                  
                   {showform ? <Form close={close} /> : null}
                  <div className="book_call">
                  <div className="book_call_buttons colorbtn" onClick={()=>setShowform(true)} style={{textDecoration:'none' , textAlign:'center' , color:'white' , padding:"0.5rem 0rem" , fontWeight:'600'}}><NavLink style={{color:'white' , textDecoration:'none'}}>Book Site</NavLink></div>
                  <div className="book_call_buttons colorbtn2" style={{textDecoration:'none' , backgroundColor:"orange", textAlign:'center' , padding:"0.5rem 0rem" , fontWeight:'600'}}><NavLink to="tel:+91-9991998060" style={{color:'white' , textDecoration:'none'}}>Request A CallBack</NavLink></div>
                  </div>
                 </div>
                
              </Conatiner>
            );
          })}
          
        </Wrapper>
        <div style={{display:'flex' , justifyContent:'center'}}>
                 <div className="keyHighlights">
                    <Place style={{fontSize:'1.2rem'}}>Key Highlights : </Place>
                    <Place style={{fontSize:'1.2rem'}}>About the Project : </Place>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro voluptatibus eaque fuga, ex autem totam error non perferendis omnis consequatur dolor facilis molestiae nemo sit maiores fugiat iure doloremque? Quos!
                  </div>
                  </div>     
        <TrendingProperties />
      <ConnectWithUs />
      
      </PropertySection>
    </div>
  );
};

export default SinglePropty;

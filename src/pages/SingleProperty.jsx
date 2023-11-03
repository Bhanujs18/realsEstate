import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import flats from "../data/Flats";
import styled from "styled-components";
import {ImLocation} from 'react-icons/im';
import ConnectWithUs from "../components/ConnectWithUs"
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import TrendingProperties from "../components/TrendingProperties";
import Form from "../components/Form";

const IMageSection = styled.div`
display: flex;
padding: 0.5rem;
width: 50%;
background-color: #010203;
flex-direction: row-reverse;
justify-content:center;
align-items:Center;
.div{
  display: block;
  transition: all 0.3s ease;
}
@media(max-width: 600px){
  display: block;
  width: 90%;
  .div{
    display: flex;
    justify-content: center;
  }
}
@media(max-width: 418){
  width: 100%;
  padding: 0rem;
  margin: 0rem;
 }
`
const PropertySection = styled.section`
// background: #0F2027;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
margin: 0;
padding: 0;
overflow: hidden;
`
const Wrapper = styled.div`
display: flex;
justify-content:center;
width:100%;
padding: 0rem;
margin: 0rem;
background-color: #010203;
`
const Conatiner = styled.div`

display: flex;
align-items:Center;
padding: 0rem 0rem 1rem 0rem;
background-color: #010203;

@media(max-width: 1200px){
  display: block;
  padding: 0rem;
}
@media(max-width: 418){
  width: 100%;
  padding: 0rem;
  margin: 0rem;
 }
`
const IMage = styled.img`
height: 17rem;
transition: all 0.3s ease;
width: 25rem;
border-radius: 15px;
// @media(max-width:627px){
//   width: 90%;
// height: 13rem;
// }
@media(max-width: 418px){
  width: 100%;
  padding: 0rem;
  margin: 0rem;
 }
`
const Name = styled.p`
font-size: 2rem;
margin:0;
padding:0;

`
const Location = styled.p`
background-color: #D84738;
border-radius: 8px;
padding: 0.4rem;
width: max-content;
color: white;
font-size: 0.8rem;
@media(max-width: 500px){
  font-size: 0.7rem;
  width: max-content;
  width: 8rem;
  text-align: center;
  border-radius: 6px;
  padding: 0.5rem 0.6rem;
}
`
const Place = styled.p`
width: 100%;
text-transform: uppercase;
font-family: 'Josefin Sans', sans-serif;
`

const SinglePropty = () => {

  const [showform , setShowform] = useState(false);

  const close = () => setShowform(false);

  const { id } = useParams();
  const proptery = flats.filter((cur) => cur.id === id);

  const [showimage , setShowimage] = useState(proptery[0].imgs1)

  return (
<div style={{padding:0 , margin:0}}>
  <div style={{padding:'1rem 0rem' , overflow:'hidden'}}>
  <NavLink to='/properties/all' style={{display:'flex' ,marginLeft:'1rem', alignItems:'center', gap: '0.5rem',textDecoration:'none', fontSize:'1.3rem' , width:'100%' , color: "white" }}><BsFillArrowLeftCircleFill />Back</NavLink> 
  </div>
   <div style={{color:"#E7E7E7", margin:0 , padding:0}}>
      <PropertySection>
      {/* <p style={{backgroundColor:'white', color:'black' ,padding:'2rem 0rem' , textAlign:'center' , fontWeight:"700" , margin:'0'}} className='properties'>{proptery[0].name} - {proptery[0].Location} </p> */}
        <Wrapper>
          {proptery.map((cur, index) => {
            
            return (
             
              <Conatiner key={index}>
                  <div style={{margin:0,padding:0,display:'flex', justifyContent:'center'}}>
                <IMageSection>
                  <div style={{margin:0,padding:0,display:'flex', justifyContent:'center'}}>           
                     <IMage src={showimage} />
                  </div>
                  <div className="div">
                  <img className="small" alt="img"  onClick={()=>setShowimage(cur.imgs1)}  src={cur.imgs1} />
                  <img className="small" alt="img" onClick={()=>setShowimage(cur.imgs2)}  src={cur.imgs2} />
                  <img className="small" alt="img" onClick={()=>setShowimage(cur.imgs3)}  src={cur.imgs3} />
                  <img className="small" alt="img" onClick={()=>setShowimage(cur.imgs4)} src={cur.imgs4} />
                  </div>
                </IMageSection>
                </div>
                 <div className="flat_details">
                  <Name>{cur.name}</Name>
                  <Location><ImLocation /> {cur.Location}, {cur.place}</Location>
                  
                  <div className="flat">
                  <Place>Developer - {cur.Developer}</Place>
                  <Place>Type - {cur.type}</Place>
                  <Place>Status - {cur.status}</Place>
                  <Place>Project Area - {cur.ProjectArea}</Place>
                  <Place>Size - {cur.ProjectSize}</Place>
                  <Place>Possession Starts - {cur.PossessionStarts}</Place>
                  <Place>Project Size -{cur.ProjectSize}</Place>
                  <Place>Configuration - {cur.Config}</Place>
                  <Place>Price - {cur.price}</Place>
                  </div>
                 
                 
                  
                  <p>Premium Amenities : {cur.Amenities}</p>
                   {showform ? <Form close={close} /> : null}
                  <div className="book_call">
                  <div className="book_call_buttons colorbtn" onClick={()=>setShowform(true)} style={{textDecoration:'none' , textAlign:'center' , color:'white' , padding:"0.5rem 0rem" , fontWeight:'600'}}><NavLink style={{color:'white' , textDecoration:'none'}}>Book Site</NavLink></div>
                  <div className="book_call_buttons colorbtn2" style={{textDecoration:'none' , backgroundColor:"#D84738", textAlign:'center' , padding:"0.5rem 0rem" , fontWeight:'600'}}><NavLink to="tel:+91-9991998060" style={{color:'white' , textDecoration:'none'}}>Request A CallBack</NavLink></div>
                  </div>
                 </div>
                
              </Conatiner>
            );
          })}
          
        </Wrapper>
        <div style={{display:'flex' , justifyContent:'center'}}>
                 <div className="keyHighlights">
                    <p style={{fontSize:'1rem' , fontWeight:'300' , letterSpacing:'2px'}}> <span style={{fontSize:'1.3rem' , fontWeight:'600'}}>About Developer</span> 
                    <br/><br/> {proptery[0].aboutdev} </p>
                    <br/>
                    <p style={{fontSize:'1rem' , fontWeight:'300' , letterSpacing:'2px'}}><span style={{fontSize:'1.3rem' , fontWeight:'600'}}>About the Project</span>
                    <br/><br/> {proptery[0].about}</p>
                    

                  </div>
                  </div>     
        <TrendingProperties />
      <ConnectWithUs />
      
      </PropertySection>
    </div>
    </div>
  );
};

export default SinglePropty;

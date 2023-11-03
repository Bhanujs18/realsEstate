import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import flats from '../data/Flats';
import styled from 'styled-components';
import SearchCategory from '../components/SearchCategory';
import TrendingProperties from '../components/TrendingProperties';
import {MdLocationPin} from 'react-icons/md';


const PropertySection = styled.div`
display: flex;
margin:0px;
padding:0px;
// background: #F6F6F6;
// background: #8e9eab;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

justify-content: center;
width:100%;
`

const Wrapper = styled.div`
display: flex;
justify-content: Center;
flex-wrap: wrap;
gap: 2rem;
padding: 2rem 0rem;
margin:0;

`

const Conatiner = styled.div`
display: block;
width:18rem;
background-color: #E8E6E7;
border-radius: 9px;
// border: 2px #E8E6E7 solid;
box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
overflow:hidden;
color: black;
`
const IMageSection = styled.div`
position:relative;
`
const IMage = styled.img`
width:20rem;
height: 10rem;


`
const Content = styled.div`
padding: 0rem 1rem 1rem 1rem;
`

const Price = styled.p`
width: 50%;
`

const Location = styled.p`
background-color: #20262F;
padding: 0.3rem 0.8rem;
border-radius: 3px;
display: flex;

font-size: 0.7rem;
height: max-content;
color: white;
`
const Desc = styled.p`
margin:0px;
font-style: italic;
font-size: 0.8rem;
`

const Properties = () => {

    const {place} = useParams();
    const proptery = (place==="all") ? flats: flats.filter((cur)=>cur.place===place);

   
  return (
   
    <div style={{margin:"0px" , padding:'0px'}}>

       

      

   <p style={{padding:'2rem 0rem' , textAlign:'center' , fontWeight:"700" , margin:'0' , color:'white' , backgroundColor:"#010203"}} className='properties'>{place.toLocaleUpperCase()} PROPERTIES</p>
   <SearchCategory />
    <PropertySection>
    <Wrapper>
        {proptery.map((cur,index)=>{
            return (
                <Conatiner key={index}>
                    <NavLink to={`/property-details/${cur.id}`}>
                    <IMageSection>
                          <IMage style={{position:"relative"}} src={cur.img} />
                          <p className='imgText'>{cur.type}</p>
                    </IMageSection>
                    </NavLink>
                    <Content>
                    <div style={{display:'flex' , justifyContent:'space-between' , margin:"0px" , padding:'0px'}}>
                    <Price style={{fontWeight:'600'}}>{cur.name}</Price>
                    <Location><MdLocationPin />{cur.Location}</Location>
                    </div>
                    <div style={{display:'flex', fontWeight:'600' , fontSize:'0.9rem' , justifyContent:'space-between' , margin:"0" , padding:'0'}}>
                    <div>Price - {cur.price}/-</div>
                    <div>{cur.rating}⭐</div>
                    </div>
                    <div style={{fontSize:'0.9rem' , fontWeight:'600'}}>{cur.ProjectSize}</div>
                    
                    <Desc><br />{cur.about.substring(0,110)}......</Desc>
                    
                    </Content>

                    {/* <div style={{textDecoration:'none' , width:'100%' , textAlign:'center' , backgroundColor:'black' , padding:"0.3rem 0rem"}}><NavLink to="tel:+91-9991998060" style={{color:'white' , textDecoration:'none'}}>BOOK NOW</NavLink></div> */}


                 
                </Conatiner>
                
            )
        } )}
        
    </Wrapper>
    
    </PropertySection>
    <TrendingProperties />
    </div>
  )
}

export default Properties
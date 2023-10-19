import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import flats from '../data/Flats';
import styled from 'styled-components';
import SearchCategory from '../components/SearchCategory';
import TrendingProperties from '../components/TrendingProperties';


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
display:grid;
grid-template-columns:repeat(3, 1fr);
gap: 2rem;
padding: 2rem 0rem;
margin:0;

@media(max-width: 1250px){
    grid-template-columns:repeat(3, 1fr);
    }

@media(max-width: 1050px){
grid-template-columns:repeat(2, 1fr);
}

@media(max-width: 752px){
    grid-template-columns:repeat(1, 1fr);
    }
`

const Conatiner = styled.div`
display: block;
width:18rem;
background-color: white;
border-radius: 9px;
border: 1px white solid;
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
`
const Rating = styled.p`
`
const Location = styled.p`
background-color: #20262F;
padding: 0.3rem 0.8rem;
border-radius: 3px;
font-size: 0.8rem;
color: white;
`
const Desc = styled.p`
margin:0px;
`

const Properties = () => {

    const {place} = useParams();
    const proptery = (place==="all") ? flats: flats.filter((cur)=>cur.place===place);

    
  return (
   
    <div style={{margin:"0px" , padding:'0px'}}>
       
   <p style={{padding:'2rem 0rem' , textAlign:'center' , fontWeight:"700" , margin:'0' , color:'white'}} className='properties'>{place.toLocaleUpperCase()} PROPERTIES</p>
   <SearchCategory />
    <PropertySection>
    <Wrapper>
        {proptery.map((cur,index)=>{
            return (
                <Conatiner>
                    <NavLink to={`/property-details/${cur.id}`}>
                    <IMageSection>
                          <IMage style={{position:"relative"}} src={cur.img} />
                          <p className='imgText'>{cur.type}</p>
                    </IMageSection>
                    </NavLink>
                    <Content>
                    <div style={{display:'flex' , justifyContent:'space-between' , margin:"0px" , padding:'0px'}}>
                    <Price>{cur.name}</Price>
                    <Location>{cur.Location}</Location>
                    </div>
                    <div style={{display:'flex' , justifyContent:'space-between' , margin:"0px"}}>
                    <Price>*Rs {cur.price}/-</Price>
                    <Rating>{cur.rating}⭐</Rating>
                    </div>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ratione dignissimos cumque excepturi id iure consequuntur vel </Desc>
                    
                    </Content>
                    <div style={{textDecoration:'none' , width:'100%' , textAlign:'center' , backgroundColor:'black' , padding:"0.3rem 0rem"}}><NavLink to="tel:+91-9991998060" style={{color:'white' , textDecoration:'none'}}>BOOK NOW</NavLink></div>
                 
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
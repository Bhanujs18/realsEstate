import React from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';
import { BiSolidLandscape} from 'react-icons/bi';
import {  BsMicrosoftTeams , BsEmojiSmile}  from 'react-icons/bs';
import {FaRegHandshake} from 'react-icons/fa';
const Wrapper = styled.section`
display: flex;
justify-content: center;
 background-color: #626F7A;
color: black;

`
const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 100%;

@media(max-width: 870px){
    grid-template-columns: repeat(2, 1fr);  
 
}
`
const Data = styled.div`
text-align:center;
padding: 1.4rem 0rem;
// border: 1px black solid;
//color: #F6DF7C;
color: white;
 @media(max-width: 870px){

 }
`

const Statitics = () => {
  return (
    <Wrapper>
        <Container>
            <Data><BsEmojiSmile style={{  display:'block' , textAlign:'center' , width:'100%' , fontSize:'2.5rem' , paddingBottom:'0.4rem'}} /><CountUp style={{fontSize:'1.5rem'}} end={950}/><div style={{display:'inline' , fontSize:'1.5rem' , alignItems:"center"}}>+</div> <br/> Happy Customers</Data>
            <Data><FaRegHandshake style={{cdisplay:'block' , textAlign:'center' , width:'100%' , fontSize:'2.5rem' , paddingBottom:'0.4rem'}} /><CountUp style={{fontSize:'1.5rem'}} end={250}/><div style={{display:'inline' , fontSize:'1.5rem' , alignItems:"center"}}>+</div> <br/> Channel Partners</Data>
            <Data><BsMicrosoftTeams style={{display:'block' , textAlign:'center' , width:'100%' , fontSize:'2.5rem' , paddingBottom:'0.4rem'}} /><CountUp style={{fontSize:'1.5rem'}} end={50} /><div style={{display:'inline' , fontSize:'1.5rem' , alignItems:"center"}}>+</div> <br/> Skilled Professionals</Data>
            <Data><BiSolidLandscape style={{display:'block' , textAlign:'center' , width:'100%' , fontSize:'2.5rem' , paddingBottom:'0.4rem'}} /><CountUp style={{fontSize:'1.5rem'}} end={100000} /><div style={{display:'inline' , fontSize:'1.5rem' , alignItems:"center"}}>+</div> <br/> Sq Feet Of Area Sold</Data>
        </Container>
    </Wrapper>
  )
}

export default Statitics
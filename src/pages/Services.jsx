import React from 'react'
import SellNow from '../components/SellNow';
import styled from 'styled-components';
import ServicesCard from '../components/ServicesCard';
import services from '../data/Services';

const Wrapper = styled.section`
display: grid;
grid-template-columns: repeat(3 , 1fr);

@media(max-width: 1200px){
  grid-template-columns: repeat(2 , 1fr);
}
@media(max-width: 800px){
  grid-template-columns: repeat(1 , 1fr);
}
`

const Services = () => {
  return (
    <Wrapper>
      <SellNow />
      {services.map((Cur,index)=> <ServicesCard Cur={Cur} key={index} />)}
    </Wrapper>
  )
}

export default Services;
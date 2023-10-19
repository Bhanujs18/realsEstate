import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`

`
const Button = styled.button`
position: fixed;
bottom:0;
border:none;
padding: 1rem;
background-color: #B49141;
border-radius: 0px 13px 0px 0px;
color: white;
left:0;
FONT-SIZE: 1.5REM;
z-index: 999;
cursor: pointer;
font-weight: 600;

@media(max-width:200px){
  display:none;
}
`

const EnquiryButton = () => {
  return (
    <Wrapper>
        <NavLink to='https://docs.google.com/forms/d/e/1FAIpQLSeCFT6GY-ldAZqaP3qb8lo-o4tFpTjVYHeJYPqWGEBLaPt9-A/viewform?usp=sf_link'>
        <Button>ENQUIRE NOW</Button>
        </NavLink>
    </Wrapper>
  )
}

export default EnquiryButton
import React from 'react'

import styled from 'styled-components';

import MobileReviews from '../components/MobileReviews';

const Wrapper = styled.section`
display: flex;
`

const Contact = () => {
  return (
    <Wrapper>
   
     <MobileReviews />
    </Wrapper>
  )
}

export default Contact
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
justify-content: center;

.content{
    width: 80%;
    text-align:justify;
    font-style: italic;
}
@media(max-width:700px){
    .content{
        width:92%;
    }
}
`
const Box1 = styled.div`
background: #C9D6FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`
const AboutUsSection2 = () => {
  return (
    <Wrapper>
    <div className='content'>
    <Box1>Our Achievements <br/>
      To date, we have successfully sold over 350,000 square feet of real estate to more than 4,000 satisfied customers. Our dedicated team of consultants and market experts ensure you benefit from the best deals, data-backed solutions, and comprehensive post-sales support.
</Box1>
    </div>
    </Wrapper>
  )
}

export default AboutUsSection2
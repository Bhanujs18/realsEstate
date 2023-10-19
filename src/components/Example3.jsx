import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
justify-content:center;

.img{
    width:60%;
    height: 25rem;
    border-radius: 20px;
}
`

const Example3 = () => {
  return (
    <Wrapper>
        <img className='img' src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-fox-1595385.jpg&fm=jpg' alt='' />
    </Wrapper>
  )
}

export default Example3
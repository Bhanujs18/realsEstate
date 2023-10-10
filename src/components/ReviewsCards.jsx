import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
color: black;
.img{
    height: 5rem;
    width: 5rem;
   padding: 1rem;
   border-radius: 50%;
}
.text{
    padding: 1rem;
    text-align: center;
}

@media(max-width:1000px){
.text{
  text-align: justify;
  color: white;
}
}
`

const ReviewsCards = () => {
  return (
    <Wrapper>
        <div style={{display:'flex' , justifyContent:'center'}}>
            <img alt='img' className='img' src='../imgs/logo.jpg' />
        </div>
        <div className='text'>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda quaerat dolorem! Id cumque aliquid labore. Dolor minus nobis vel libero a, eum, praesentium expedita cum eligendi laudantium, nulla iusto?"
        </div>
    </Wrapper>
  )
}

export default ReviewsCards
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
color: black;
text-align: center;
.img{
    height: 5rem;
    width: 5rem;
   padding: 1rem;
   border-radius: 50%;
}
.text{
    padding: 1rem;
    text-align: center;
    font-weight: 400;
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
            <img alt='img' className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8HANAcGvlV9oQfX2VhN9CQkdeOQC5tGfrUEs5FJQdglt7xT_YqChLQGGQNDk-W-Otgg&usqp=CAU' />
        </div>
        Drake
        <div className='text'>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda quaerat dolorem! Id cumque aliquid labore.""
        </div>
    </Wrapper>
  )
}

export default ReviewsCards
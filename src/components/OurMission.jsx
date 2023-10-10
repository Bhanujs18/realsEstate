import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`

body{
    background: rgba(218,218,218,1)
  }
  
  a{
    color: #111
  }
  
  .photo{
    position: relative;
   
    transform: translate(-50%, -50%);
    display: block;
  }
  
  .photo img{
    width: 200px;
    height: 280px;
    object-fit: cover;
    filter: grayscale(100%) contrast(120%);
    box-shadow: 10px 15px 25px 0 rgba(0,0,0,.2);
    display: block;
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-top: -10px;
  }
  
  .photo:hover img{
    box-shadow: 1px 1px 10px 0 rgba(0,0,0,.1);
  }
  
  .photo .glow-wrap{
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    margin-top: -10px;
  }
  
  .photo .glow{
    display: block;
    position:absolute;
    width: 40%;
    height: 200%;
    background: rgba(255,255,255,.2);
    top: 0;
    filter: blur(5px);
    transform: rotate(45deg) translate(-450%, 0);
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
  .photo:hover .glow{
    transform: rotate(45deg) translate(450%, 0);
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  
  .photo:hover img,
  .photo:hover .glow-wrap{
    margin-top: 0;
  }
  
  h1{
    position: absolute;
    z-index: 1;
    transform: translate(-25%, -65%);
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    line-height: 1.2;
  }
  
  
  /* Ends */
  
 

`

const OurMission = () => {
  return (
    <Wrapper>
        <div style={{display:'flex',height:'20vh' , marginTop:'3rem'}}>
<a href="#" class="photo">
  <h1>Our Mission</h1>
    <img src="https://s-media-cache-ak0.pinimg.com/736x/06/d1/5f/06d15fc8a69e2ab67143e5357a4184d7.jpg" />
  <div class="glow-wrap">
    <i class="glow"></i>
  </div>
</a>
</div>
    </Wrapper>
  )
}

export default OurMission
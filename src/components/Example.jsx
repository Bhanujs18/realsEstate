import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
background-image: url('https://res.cloudinary.com/dyqynjew8/image/upload/v1698562731/Screenshot_2023-10-29_121545_w0wpv0.png');
background-size:cover;
padding: 0px 0px 1rem 0px;
.attribution { 
    font-size: 11px; text-align: center; 
}
.attribution a { 
    color: hsl(228, 45%, 44%); 
}

h1:first-of-type {
    font-weight: var(--weight1);
    color: var(--varyDarkBlue);

}

h1:last-of-type {
    color: var(--varyDarkBlue);
}

@media (max-width: 400px) {
    h1 {
        font-size: 1.5rem;
    }
}

.header {
    text-align: center;
    line-height: 0.8;
    margin-bottom: 50px;
    margin-top: 100px;
}

.header p {
    margin: 0 auto;
    line-height: 2;
    color: var(--grayishBlue);
}


.box p {
    color: var(--grayishBlue);
}

.box {
    border-radius: 27px;
    box-shadow: 0px 30px 40px -20px var(--grayishBlue);
    padding: 30px;
    margin: 20px;  
    background-color: rgb(255,255,255,0.8);
}

img {
    float: right;
}

@media (max-width: 450px) {
    .box {
        height: 200px;
    }
}

@media (max-width: 950px) and (min-width: 450px) {
    .box {
        text-align: center;
        height: 180px;
    }
}

.cyan {
    border-top: 3px solid var(--cyan);
}
.red {
    border-top: 3px solid var(--red);
}
.blue {
    border-top: 3px solid var(--blue);
}
.orange {
    border-top: 3px solid var(--orange);
}

h2 {
    color: var(--varyDarkBlue);
    font-weight: var(--weight3);
    font-weight: 600;
}
p{
    font-style: italic;
}


@media (min-width: 950px) {
    .row1-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .row2-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box-down {
        position: relative;
        top: 150px;
    }
    .box {
        width: 20%;
     
    }
    .header p {
        width: 30%;
    }
    
}
`

const Example = () => {
  return (
    <Wrapper>
         <p className='core_values' style={{fontStyle:'normal'}}>Core Values</p>



  <div class="row1-container">
    <div className="box box-down cyan" style={{backgroundColor: "RGB(1,2,3,0.5)" , color:'rgb(255,255,255,0.8)'}}>
      <h2>Reliability</h2>
      <p>At Elevate ProEx, reliability is at the heart of our ethos. We prioritize transparency and consistency in all our business practices.
     </p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>



    <div className="box" style={{backgroundColor: "RGB(1,2,3,0.5)" , color:'rgb(255,255,255,0.8)'}}>
      <h2>Integrity</h2>
      <p>We believe that integrity is the foundation of achievement. It's the unwavering principle that guides us in all our endeavors.
     </p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
    </div>



    <div class="box box-down" style={{backgroundColor: "RGB(1,2,3,0.5)" , color:'rgb(255,255,255,0.8)'}}>
      <h2>Sustainability</h2>
      <p>Elevate ProEx is committed to sustainable growth, not just for our company but also for our customers and colleagues. We aim for long-term success that benefits everyone.
      </p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
    </div>
    
  </div>



  <div class="row2-container">
    <div class="box" style={{backgroundColor: "rgb(1,2,3,0.5)" , color:'rgb(255,255,255,0.8)'}}>
      <h2>Ethics</h2>
      <p>Our pursuit of exceptional profits is always coupled with a commitment to ethical business practices. We ensure that our customers reap the rewards of our services in a fair and just manner.</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
    </div>
  </div>
    </Wrapper>
  )
}

export default Example
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`

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
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px var(--grayishBlue);
    padding: 30px;
    margin: 20px;  
    background-color: white;
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
        
  <div class="row1-container">
    <div class="box box-down cyan" style={{backgroundColor:'#B5B5B5'}}>
      <h2>Reliability</h2>
      <p>At Elevate ProEx, reliability is at the heart of our ethos. We prioritize transparency and consistency in all our business practices.
</p>
      <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div class="box red" style={{backgroundColor:'#D66464'}}>
      <h2>Integrity</h2>
      <p>We believe that integrity is the foundation of achievement. It's the unwavering principle that guides us in all our endeavors.
</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
    </div>

    <div class="box box-down blue" style={{backgroundColor:'#B6CC57'}}>
      <h2>Sustainability</h2>
      <p>Elevate ProEx is committed to sustainable growth, not just for our company but also for our customers and colleagues. We aim for long-term success that benefits everyone.
</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange" style={{backgroundColor:'#30BCB3'}}>
      <h2>Ethics</h2>
      <p>Our pursuit of exceptional profits is always coupled with a commitment to ethical business practices. We ensure that our customers reap the rewards of our services in a fair and just manner.</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
    </div>
  </div>
    </Wrapper>
  )
}

export default Example
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`

padding: 2rem 0rem;
:root {
    --purple: #603f8b;
    --aqua: #b4fee7;
    --violet: #a16ae8;
    --fuchsia: #fd49a0;
    --white: #efefef;
    --black: #222;
    --trueBlack: #000;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--black);
  }
  
  .main {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .cards {
    display: grid;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
  
    padding: 0;
    border-radius: 20px;
    overflow: hidden;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .cards_item {
    display: flex;
    background-color: #E8E6E7;
  }
  
  .card_image {
    display: flex;
    height: 200px;
    box-shadow: 0 50px 100px 0 var(--violet);
  }
  
  .card_image img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background-color: #E8E6E7;
    border-radius: 5px 25px 5px 50px;
    transition: transform 0.1s linear, box-shadow 0.2s;
  }
  
  .card_text:focus,
  .card:focus {
    outline: 2px dashed var(--aqua);
  }
  
  .card:focus,
  .card:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 5px -5px rgba(0, 0, 0, 0.2);
  }
  
  .card_content {
    padding: 0.5rem 1rem 1rem;
    color: var(--white);
  }
  
  .card_title {
    position: absolute;
    top: 0;
    right: 0;
    width: 90%;
    height: auto;
    color: var(--black);
    padding: 0.5rem;
    border-radius: 5px 0 0 5px;
    transform: rotate(-3.3deg);
    transform-origin: left top;
    font-family: Georgia, Times, serif;
    font-weight: 600;
    font-size: 1.325rem;
    postition: relative;
    overflow: hidden;
    z-index: 1;
    background-color: rgba(253, 73, 160, 0.75);
    animation: 0s 0s fly-in 0 reverse both;
  }
  
  @media (min-width: 535px) {
    .card_title {
      animation: 0.5s 0.25s fly-out 1 both;
    }
  }
  
  .card:focus .card_title,
  .card:hover .card_title {
    animation: 0.5s ease-in 0s fly-in 1 both;
  }
  
  .card_text {
    font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica,
      Helvetica Neue, Arial, sans-serif;
    line-height: 1.5;
    text-size-adjust: 0.2px;
    padding: 0 1rem;
  }
  
  .card_text p:first-of-type:first-letter {
    font-size: 1.8em;
    font-family: Georgia, Times, serif;
    margin-right: 0.05em;
  }
  
  @media (min-width: 480px) {
    .card_text {
      overflow: auto;
      max-height: 20rem;
      scrollbar-width: thin;
      scrollbar-color: var(--aqua) var(--violet);
    }
  
    .card_text::-webkit-scrollbar {
      width: 12px;
    }
  
    .card_text::-webkit-scrollbar-track {
      background: var(--violet);
    }
  
    .card_text::-webkit-scrollbar-thumb {
      background-color: var(--aqua);
    }
  }
  
  .card_text strong {
    color: var(--aqua);
  }
  
  .upcharge {
    position: relative;
    font-weight: 600;
    background-color: var(--violet);
    padding: 0.5rem 0.75rem;
    color: var(--trueBlack);
    border-radius: 0 10px;
    z-index: 0;
    overflow: hidden;
  }
  
  .upcharge::after,
  .upcharge::before {
    content: "+";
    display: block;
    line-height: 0;
    font-size: 3rem;
    position: absolute;
    color: var(--purple);
    z-index: -1;
    opacity: 0.3;
  }
  
  .upcharge::before {
    left: 0;
    top: 0.5rem;
  }
  
  .upcharge::after {
    right: 0;
    bottom: 1.25rem;
  }
  
  .note {
    display: block;
    text-align: center;
    padding: 0.5rem;
    font-weight: 900;
    background-image: linear-gradient(
      -45deg,
      transparent 10%,
      var(--aqua) 10.5%,
      var(--aqua) 90%,
      transparent 90.5%
    );
    color: var(--black);
    font-size: 1.3em;
    font-style: italic;
    margin-top: 1rem;
  }
  
  @keyframes fly-in {
    0% {
      top: 0;
      right: 0;
      font-size: 1.325rem;
    }
  
    25% {
      top: 0;
      right: -200%;
      font-size: 1.325rem;
    }
  
    26% {
      font-size: 2rem;
    }
  
    100% {
      top: 2rem;
      right: 0;
      font-size: 2rem;
    }
  }
  
  @keyframes fly-out {
    0% {
      top: 2rem;
      right: 0;
      font-size: 2rem;
    }
  
    50% {
      top: 0;
      right: -200%;
      font-size: 1.325rem;
    }
  
    100% {
      top: 0;
      right: 0;
      font-size: 1.325rem;
    }
  }
  
`

const Example2 = () => {
  return (
    <Wrapper>
      <div class="main">
  <ul class="cards">
    <li class="cards_item">
      <div class="card" tabindex="0">
        <div class="card_image"><img src="https://s3-eu-west-1.amazonaws.com/alt-cdn/chrysos/images/blog/221/large/top-ten-tips-for-celebrating-your-achievements-5c17ae08166ef.jpg" alt="mixed vegetable salad in a mason jar. " /></div>
        <div class="card_content">
        
          <div class="card_text">
          <p class="upcharge">Our Achievements </p>
            <p>To date, we have successfully sold over 350,000 square feet of real estate to more than 4,000 satisfied customers. Our dedicated team of consultants and market experts ensure you benefit from the best deals, data-backed solutions, and comprehensive post-sales support.
</p>
          </div>
        </div>
      </div>
    </li>

    <li class="cards_item">
      <div class="card" tabindex="0">
        <div class="card_image"><img src="https://www.lubigelindia.com/files/catalog/About/why-choose-us.jpg" alt="a Reuben sandwich on wax paper. " /></div>
        <div class="card_content">
       
          <div class="card_text">
          <p class="upcharge">Why Choose Elevate ProEx?
</p>
            <p>Expertise You Can Trust: We are an inclusive and insight-driven consultancy, dedicated to making a positive impact in the world of real estate. We simplify the process of finding the perfect place to live or invest, offering expert guidance on design concepts, architecture, and the value of your dream property.

A Personalized Approach: At Elevate ProEx, we believe that real estate solutions should be as unique as the people they serve. We provide technology-based and innovative services tailored to your personal goals and requirements, ensuring a truly personalized experience.

Best Deals and Easy Financing: We're known for our transparency and offer white-glove property services at competitive rates. With end-to-end assistance, we make financing hassle-free and ensure smooth transactions.

Round-the-Clock Support: Your dreams don't have business hours, and neither do we. Our 24/7 support is always here to help you with your interests and queries, whether you're looking for commercial or residential properties.

Trusted Excellence: Throughout your home-buying or investment journey, Elevate ProEx stands by your side with transparency, professionalism, and unwavering ethics to match your unique requirements.

With over a decade of experience, a loyal customer base of 25,500 individuals, and 500 trusted channel partners, Elevate ProEx is your trusted partner for real estate success.


            </p>
           
          
             
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" tabindex="0">
        <div class="card_image"><img src="https://www.indiafilings.com/learn/wp-content/uploads/2023/07/A-Comprehensive-Guide-to-Startup-India-Registration.jpg" alt="A side view of a plate of figs and berries. " /></div>
        <div class="card_content">
        
          <div class="card_text">
          <p class="upcharge">Who We Are?</p>
          <p>Elevate ProEx is your trusted partner for buying, occupying, and investing in real estate assets. Our journey began in 2019 with a vision to offer the best and most lucrative investment opportunities across India. Our name reflects our commitment to delivering exclusive, high-quality services that enhance the financial well-being of our clients.</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
    </Wrapper>
  )
}

export default Example2
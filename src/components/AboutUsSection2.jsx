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

const AboutUsSection2 = () => {
  return (
    <Wrapper>
    <div className='content'>
        
<p><b style={{fontSize:'1rem'}}>Our Achievements:</b> To date, we have successfully sold over 350,000 square feet of real estate to more than 4,000 satisfied customers. Our dedicated team of consultants and market experts ensure you benefit from the best deals, data-backed solutions, and comprehensive post-sales support.</p>

<p><b style={{fontSize:'1.2rem'}}>Why Choose Elevate ProEx?</b></p>

<p><b style={{fontSize:'1rem'}}>Expertise You Can Trust:</b> We are an inclusive and insight-driven consultancy, dedicated to making a positive impact in the world of real estate. We simplify the process of finding the perfect place to live or invest, offering expert guidance on design concepts, architecture, and the value of your dream property.</p>

<p><b style={{fontSize:'1rem'}}>A Personalized Approach:</b> At Elevate ProEx, we believe that real estate solutions should be as unique as the people they serve. We provide technology-based and innovative services tailored to your personal goals and requirements, ensuring a truly personalized experience.</p>

<p><b style={{fontSize:'1rem'}}>Best Deals and Easy Financing:</b> We're known for our transparency and offer white-glove property services at competitive rates. With end-to-end assistance, we make financing hassle-free and ensure smooth transactions.</p>

<p><b style={{fontSize:'1rem'}}>Round-the-Clock Support:</b> Your dreams don't have business hours, and neither do we. Our 24/7 support is always here to help you with your interests and queries, whether you're looking for commercial or residential properties.</p>

<p><b style={{fontSize:'1rem'}}>Trusted Excellence:</b> Throughout your home-buying or investment journey, Elevate ProEx stands by your side with transparency, professionalism, and unwavering ethics to match your unique requirements.</p>

<p>With over a decade of experience, a loyal customer base of 25,500 individuals, and 500 trusted channel partners, Elevate ProEx is your trusted partner for real&#160;estate&#160;success.</p>
<p><b style={{fontSize:'1.2rem'}}>Core Values:</b></p>

<p> <b style={{fontSize:'1rem'}}>Reliability:</b> At Elevate ProEx, reliability is at the heart of our ethos. We prioritize transparency and consistency in all our business practices.</p>

<p><b style={{fontSize:'1rem'}}>Integrity:</b> We believe that integrity is the foundation of achievement. It's the unwavering principle that guides us in all our endeavors.</p>

<p><b style={{fontSize:'1rem'}}>Sustainability:</b> Elevate ProEx is committed to sustainable growth, not just for our company but also for our customers and colleagues. We aim for long-term success that benefits everyone.</p>

<p><b style={{fontSize:'1rem'}}>Ethics:</b> Our pursuit of exceptional profits is always coupled with a commitment to ethical business practices. We ensure that our customers reap the rewards of our services in a fair and&#160;just&#160;manner.</p>

    </div>
    </Wrapper>
  )
}

export default AboutUsSection2
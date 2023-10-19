import React from 'react'
import Organizations from '../components/Organizations'
import AboutSection1 from '../components/AboutSection1'

import Example from '../components/Example'
import Example2 from '../components/Example2'
// import Example3 from '../components/Example3'

const About = () => {
  return (
    <div>
      <AboutSection1 />
      {/* <p className='core_values' >About Us</p> */}
     {/* <Example3 /> */}
    
      <Example2 />
      <p className='core_values'>Core Values</p>
      <Example />
      <Organizations />
    </div>
  )
}

export default About
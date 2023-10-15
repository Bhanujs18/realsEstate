import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items:center;
padding: 2rem 0rem;
`


const Form = styled.form`
  display: block;
  padding: 1rem;
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 15px;
  background-color: #393939;
`;

const Heading = styled.p`
  display: flex;
  color: white;
  font-weight: 700;
  padding: 0rem 3rem;
  font-size: 2.3rem;
  margin: 0;
`;
const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Submit = styled.button`
  display: flex;
  background-color: red;
  color: white;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 7px;
`;

const SellNow = () => {
  return (
    <Wrapper>
         <Form>
            <Heading>Want To Sell?</Heading>
            <Container>    
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Submit><NavLink to='https://docs.google.com/forms/d/e/1FAIpQLSeCFT6GY-ldAZqaP3qb8lo-o4tFpTjVYHeJYPqWGEBLaPt9-A/viewform?usp=sf_link'style={{textDecoration:'none' , color:'white'}}>Request Valuation</NavLink></Submit>
                </div>
            </Container>
          </Form>
    </Wrapper>
  )
}

export default SellNow
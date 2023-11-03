import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
justify-content:center;
background-color:#010203;
padding: 0.5rem 0rem;
`
const Buttons = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Button = styled.div`
display: flex;
justify-content:center;
text-align:Center;
padding: 1rem;
.button{
  transition : all 0.3s ease;
  width: 9rem;
  background-color: #D84738;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  font-weight: 500;
}
.button:active{
  background-color: white;
  color: #D84738;
}

.button:focus{
  background-color: white;
  color: #D84738;
  transition : all 0.3s ease;
}
@media(max-width:888px){
.button{
  width:7rem;
  font-size: 0.8rem;
  transition : all 0.3s ease;
  
}
}

@media(max-width:747px){
  padding:0.4rem;
  .button{
    width: 6.7rem;
    transition : all 0.3s ease;
  }
  }


`

const SearchCategory = () => {
  return (
    <Wrapper>
      <Buttons>
        
        <Button>
          <NavLink  className='button-28 button' to="/properties/Gurgaon" >Gurgaon</NavLink>
        </Button>
        <Button>
          <NavLink  className='button-28 button' to="/properties/delhi" >New Delhi</NavLink>
        </Button>
        <Button>
          <NavLink className='button-28 button'  to="/properties/goa" >Goa</NavLink>
        </Button>
        <Button>
          <NavLink  className='button-28 button' to="/properties/dubai" >Dubai</NavLink>
        </Button>
      </Buttons>
    </Wrapper>
  )
}

export default SearchCategory
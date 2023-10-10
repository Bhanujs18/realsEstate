import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
justify-content: center;
padding: 1rem;
.container{
  .heading{
   text-align : center;
   font-weight: 600;
   font-size : 2rem;
  }
  
  .buttons{
    display: flex;
    justify-content: Center;
    gap: 2rem;
    font-weight : 600;
    .button{
    .link{
        display: flex;
       
        justify-content : center;
        background-color: black;
        padding: 1rem;
        color: white;
        text-decoration : none;
       
        border: 2px black solid;
    }
    .link:hover{
        background-color: white;
        color: black;
    }
    
  }
  
}
}

@media(max-width: 932px){
    .container{
        .heading{
         font-size: 1.5rem;
         font-weight: 600;
        }
    }  
}



@media(max-width: 652px){
    .container{
        .heading{
         font-size: 1.2rem;
         font-weight: 600;
         
        }
        .buttons{
            display: flex;
            .button{
               
                .link{
                    font-size: 0.9rem;
                    display: flex;
                    border-radius: 12px;
                }
            }
            
        }
    }  
}
`

const Category = () => {
  return (
    <Wrapper>
       
        <div className='container'>
            <div>
              <p className='heading'>Looking to Buy a new property or sell</p>
            </div>
     
            <div style={{display:'flex' , width:'100%' , justifyContent:'center'}}>
            <div className='buttons'>
                
                <div className='button'>
                    <NavLink className='link'>Residential</NavLink>
                </div>

                <div className='button'>
                    <NavLink className='link'>Commercial</NavLink>
                </div>


                 <div className='button'>
                    <NavLink className='link'>Others</NavLink>
                </div>
             
            </div>

         </div>  
        </div>
       
        
    </Wrapper>
  )
}

export default Category
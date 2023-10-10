import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
justify-content: center;
color: white;
// background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIbOlkF2UAfC1Tp4HwL8emxnj5fvzQ0Nbag&usqp=CAU');
 background-color: black;
background-size: cover;
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
              <p className='heading'>Looking to Buy a new property or sell !!!</p>
            </div>
     
            <div style={{display:'flex' , width:'100%' , justifyContent:'center'}}>
            <div className='buttons'>
                
                <div className='button'>
                    <NavLink className='link button-28'>Residential</NavLink>
                </div>

                <div className='button'>
                    <NavLink className='link button-28'>Commercial</NavLink>
                    
                </div>


                 <div className='button'>
                    <NavLink className='link button-28'>Others</NavLink>
                </div>
             
            </div>

         </div>  
        </div>
       
        
    </Wrapper>
  )
}

export default Category
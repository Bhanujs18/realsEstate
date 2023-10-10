import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`

.container{
    display: block;
    .heading{
        display: flex;
        justify-content: center;
        .head{
            font-size: 2rem;

        }
    }
    .content{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        .box{
            display: block;
            width: 20rem;
            
            .img{
                height: 15rem;
                width: 20rem;
            }
        }
    }
}


@media(max-width:1340px){
    .container{
       .content{
        grid-template-columns: repeat(3, 1fr);
            }
            }
    }
    
    @media(max-width:1031px){
        .container{
           .content{
            grid-template-columns: repeat(2, 1fr);
                }
                }
        }
        @media(max-width:671px){
            .container{
               .content{
                grid-template-columns: repeat(1, 1fr);
                    }
                    }
            }

`


const Blogs = () => {
  return (
    <Wrapper>
        <div className='container'>

              <div className='heading'>
                    
                        <p className='head'>Blogs</p>
                   
              </div>

               <div style={{display:'flex' , width:'100%' , justifyContent:'center'}}>

              <div className='content'>
          
                <div className='box'>
                     <img className='img' src='../imgs/logo.jpg' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

                <div className='box'>
                <img className='img' src='../imgs/logo.jpg' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

               

              </div>
              </div>

        </div>
    </Wrapper>
  )
}

export default Blogs
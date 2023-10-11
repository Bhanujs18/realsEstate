import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
background-color: #20262F;
justify-content: center;
padding: 1rem 0rem;
.container{
border: 5px #20262F solid;
width: 90%;
background-color: white;
border-radius: 15px;
padding: 1rem;
    display: block;
    .heading{
        display: flex;
        justify-content: center;
        .head{
            font-size: 2rem;
           font-weight: 600;
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
                height: 12rem;
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
                     <img className='img' src='https://www.point2homes.com/news/wp-content/uploads/sites/51/2020/01/best-real-estate-blogs-fb.jpg' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

                <div className='box'>
                <img className='img' src='https://rwncdn.s3.amazonaws.com/wp-content/uploads/Best-Real-Estate-Blogs-Featured.jpg' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

               

              </div>
              </div>

        </div>
    </Wrapper>
  )
}

export default Blogs
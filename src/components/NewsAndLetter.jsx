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
        grid-template-columns: repeat(3, 1fr);
    
        gap: 2rem;
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

@media(max-width: 1050px){
    .container{
        .content{
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media(max-width: 716px){
    .container{
        .content{
            grid-template-columns: repeat(1, 1fr);
            .box{
                display: block;
                width: 20rem;
            }    
        }
    }
}

`


const NewsAndLetter = () => {
  return (
    <Wrapper>
        <div className='container'>

              <div className='heading'>
                    
                        <p className='head'>News And Letters</p>
                   
              </div>
              <div style={{display:'flex' , width:'100%' , justifyContent:'center' }}>
              <div className='content'>
          
                <div className='box'>
                     <img className='img' src='https://www.track2realty.track2media.com/wp-content/uploads/2011/01/20_1.jpeg' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

                <div className='box'>
                     <img className='img' src='https://images.indianexpress.com/2023/06/sebi1.jpg?w=414' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

                <div className='box'>
                     <img className='img' src='https://uploads-ssl.webflow.com/5da0f11ad1589b85b520da67/607e41e8ea6348151920167f_auction-bid.jpg' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

                
                </div>
              </div>

        </div>
    </Wrapper>
  )
}

export default NewsAndLetter
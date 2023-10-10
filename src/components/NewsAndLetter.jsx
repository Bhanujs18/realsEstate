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
                height: 15rem;
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
                     <img className='img' src='https://media.istockphoto.com/id/1197831888/vector/male-hand-holding-megaphone-with-breaking-news-speech-bubble-loudspeaker-banner-for-business.jpg?s=612x612&w=0&k=20&c=4CvdND_C8H3AxDMlEAZ8j9oagSvlmMcNHlrVoqoc9KQ=' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

                <div className='box'>
                     <img className='img' src='https://media.istockphoto.com/id/1197831888/vector/male-hand-holding-megaphone-with-breaking-news-speech-bubble-loudspeaker-banner-for-business.jpg?s=612x612&w=0&k=20&c=4CvdND_C8H3AxDMlEAZ8j9oagSvlmMcNHlrVoqoc9KQ=' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

                <div className='box'>
                     <img className='img' src='https://media.istockphoto.com/id/1197831888/vector/male-hand-holding-megaphone-with-breaking-news-speech-bubble-loudspeaker-banner-for-business.jpg?s=612x612&w=0&k=20&c=4CvdND_C8H3AxDMlEAZ8j9oagSvlmMcNHlrVoqoc9KQ=' alt='img' />
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laborum quae expedita accusantium maiores fugit labore, possimus eos impedit suscipit itaque eligendi sed ratione repellat delectus quod recusandae. Sit, atque?</p>
                </div>

                
                </div>
              </div>

        </div>
    </Wrapper>
  )
}

export default NewsAndLetter
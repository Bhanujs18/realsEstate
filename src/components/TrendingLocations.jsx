import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 3rem 0rem;
// background-image: url('../imgs/grey.jpg');
background-size:cover;
color: black;
.container{
    display: block;
    .heading{
        align-items: center;
        margin: 0rem 0rem;
        font-size: 1.3rem;
        display: flex;
        justify-content: center;
        text-align: center;
        .trend_heading{
            font-size: 2rem;
            margin : 0;
            font-weight : 600;
        }
    }
    .cities{
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        justify-content: center;
        gap: 2rem;
        .box{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            height: 12rem;
            width: 19rem;
        .img{
            height: 12rem;
            width: 19rem;
            position: absolute;
        }
        .name{
            position: relative;
            top:50%;
            left:50%;
            transform : translate(-50%,-50%);
            overflow : hidden;
            color: white;
           text-align: center;
           font-weight: 600;
           font-size: 1.6rem;
        }
    }
    // .box:hover{
    //     transform: scale(1.1);
    //     overflow:hidden; 
    // }
    
    }
    .seeAllLocations{
        font-weight : 600;
        text-align : center;
        font-size: 1.3rem;
    }
}

@media(max-width:1340px){
.container{
   .cities{
    grid-template-columns: repeat(3, 1fr);
        }
        }
}

@media(max-width:1031px){
    .container{
       .cities{
        grid-template-columns: repeat(2, 1fr);
            }
            }
    }
    @media(max-width:671px){
        .container{
            .heading{
                padding: 1rem;
            }
           .cities{
            grid-template-columns: repeat(1, 1fr);
                }
                }
        }
`

const TrendingLocations = () => {
  return (
    <Wrapper>
       <div className='container'>
         <div className='heading'>
            <div style={{display:'block'}}>
                <p className='trend_heading'>Trending Locations</p>
                <p className='trend_tagline'>Browse Locations From a List of Available Cities</p>
            </div>
            </div>
            <div style={{display:'flex' , width:'100%' , justifyContent:'center'}}>
            <div className='cities'>
                <div className='box'>
                    <img alt='img' className='img' src='https://media.timeout.com/images/105242423/750/422/image.jpg' />
                    <p className='name'>Dubai</p>
                </div>

                <div className='box'>
                    <img alt='img' className='img' src='https://www.holidify.com/images/bgImages/UDAIPUR.jpg' />
                    <p className='name'>Gurgaon</p>
                </div>

                <div className='box'>
                    <img alt='img' className='img' src='https://www.travelseewrite.com/wp-content/uploads/2021/10/The-beauty-of-Udaipur-is-best-enjoyed-at-night-City-Palace-and-Lake-Pichola.jpg' />
                    <p className='name'>New Delhi</p>
                </div>
                <div className='box'>
                    <img alt='img' className='img' src='https://assets.traveltriangle.com/blog/wp-content/uploads/2016/02/Fateh-Sagar-Lake.jpg' />
                    <p className='name'>Goa</p>
                </div>

            </div>
            </div>
            <p className='seeAllLocations'>See All Locations</p>
        
        </div>
       
    </Wrapper>
  )
}

export default TrendingLocations
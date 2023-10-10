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
        gap: 2rem;
        .box{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
           
            width: 19rem;
            .content{
                padding: 1rem;
                .location{
                    background-color: black;
                    color: white ;
                    width: max-content;
                    padding: 0.4rem;
                   }
                .desc{
                    text-align: justify;   
                }
            }
            
        .img{
           
            width: 19rem;
          
        }
       
    }
    
    }
    .seeAllLocations{
        font-weight : 600;
        text-align : center;
        font-size: 1.3rem;
        border: 2px black solid;
        background-color: black;
        color: white;
        width: max-content;
        padding: 1.2rem 2rem;
        border-radius: 15px;
        cursor: pointer;
    }
    .seeAllLocations:hover{
        background-color : white;
        color: black;
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

const TrendingProperties = () => {
  return (
    <Wrapper>
       <div className='container'>
         <div className='heading'>
            <div style={{display:'block'}}>
                <p className='trend_heading'>Trending Properties</p>
                <p className='trend_tagline'>Browse Locations From a List of Available Cities</p>
            </div>
            </div>

            <div style={{display:'flex' , width:'100%' , justifyContent:'center'}}>
            <div className='cities'>
                

            <div className='box'>
                    <img alt='img' className='img' src='https://thumbs.dreamstime.com/b/suburban-house-modern-american-front-entrance-green-grass-front-31081489.jpg' />
                   <div className='content'>
                   <p className='location'>Gurgaon</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Est temporibus optio sapiente recusandae velit consequatur
                          commodi esse molestias a. Excepturi quas, labore voluptat
                          es numquam alias laboriosam recusandae a cumque nesciunt?</p>
                   </div>    
               </div>


               <div className='box'>
                    <img alt='img' className='img' src='https://thumbs.dreamstime.com/b/family-american-house-29568541.jpg' />
                   <div className='content'>
                   <p className='location'>Gurgaon</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Est temporibus optio sapiente recusandae velit consequatur
                          commodi esse molestias a. Excepturi quas, labore voluptat
                          es numquam alias laboriosam recusandae a cumque nesciunt?</p>
                   </div>    
               </div>




               <div className='box'>
                    <img alt='img' className='img' src='https://thumbs.dreamstime.com/b/american-house-new-manicured-suburban-beautiful-sunny-day-31081957.jpg' />
                   <div className='content'>
                   <p className='location'>Gurgaon</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Est temporibus optio sapiente recusandae velit consequatur
                          commodi esse molestias a. Excepturi quas, labore voluptat
                          es numquam alias laboriosam recusandae a cumque nesciunt?</p>
                   </div>    
               </div>





               <div className='box'>
                    <img alt='img' className='img' src='https://assets-global.website-files.com/5e99608fae81cfc99b44bcc1/5ecba07789d1eed8f3e7de0c_best-listing-photos-property-snaps-nighttime-614x409.jpeg' />
                   <div className='content'>
                   <p className='location'>Gurgaon</p>
                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Est temporibus optio sapiente recusandae velit consequatur
                          commodi esse molestias a. Excepturi quas, labore voluptat
                          es numquam alias laboriosam recusandae a cumque nesciunt?</p>
                   </div>    
               </div>




             </div>
            </div>
            
            
            <div style={{display:'flex' , justifyContent:'center' , width:'100%'}}>
            <p className='seeAllLocations'>See All Locations</p>
            </div>


        </div>
       
    </Wrapper>
  )
}

export default TrendingProperties
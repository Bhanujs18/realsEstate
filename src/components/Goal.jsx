import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
background-image: url('https://t3.ftcdn.net/jpg/03/48/06/98/360_F_348069838_cWdfRHqvslRsmqp3M2Wtto3lqEA1AFfd.jpg');
padding: 2rem 0rem;
.container{
    width: 100%;
    display: flex;
    align-items: center;
    .img_div{
        width: 50%;
        // padding: 1rem;
        display: flex;
        // background-color: #dbba00;
        justify-content: center;
        .img{
            border: 15px solid grey;
            height: 22rem;
            width: 29rem;
        }
    }
    .Content_div{
      
        width: 50%;
        .heading{
            font-size: 2rem;
            text-align: Center;
            font-weight: 600;
        }
        .content{
            text-align: center;
            font-size: 1.3rem;
            line-height: 1.3;
            font-weight: 500;
           

        }
        .button{
            text-decoration:none;
            font-size: 1.2rem;
            background-color: white;
            border: 2px grey solid;
             color: black;
            padding: 0.8rem 1.8rem;
        }
        .button:hover{
            background-color: grey;
            color: white;
        }
    }
}

@media(max-width: 1000px){
    .container{
     display: block;
     .img_div{
        width: 100%;
        .img{
            height: 12rem;
            width: 19rem;
        }
     }
     .Content_div{
        width:100%;
        .content{
           
            color: black;
            text-align: justify;
            padding: 1rem;
            font-size: 1.1rem;
            line-height: 1;
            font-weight: 600;
        }
     }
}}
`

const Goal = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='img_div'>
                <img className='img' src='https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/5ba1a-top-companies-in-india.jpg?fit=1000%2C665&ssl=1' alt='img' />
               
                
            </div>
            <div className='Content_div'>
                <p className='heading'>ELEVATE PROEX</p>
                <p className='content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed veritatis molestiae recusandae delectus ut similique voluptates obcaecati! Provident aperiam eveniet eius molestias? Temporibus officiis debitis aliquam, ullam libero vel veritatis.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed veritatis molestiae recusandae delectus ut similique voluptates obcaecati! Provident aperiam eveniet eius molestias? Temporibus officiis debitis aliquam, ullam libero vel veritatis.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed veritatis molestiae recusandae delectus ut similique voluptates obcaecati! Provident aperiam eveniet eius molestias? Temporibus officiis debitis aliquam, ullam libero vel veritatis.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed veritatis molestiae recusandae delectus ut similique voluptates obcaecati! Provident aperiam eveniet eius molestias? Temporibus officiis debitis aliquam, ullam libero vel veritatis.</p>
               <div style={{width:'100%' , display: 'flex' , justifyContent:'center'}}>
                <NavLink className='button'>Read More.</NavLink>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Goal
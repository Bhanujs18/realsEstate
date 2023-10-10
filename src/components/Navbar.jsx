
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {BsList} from 'react-icons/bs';
import { useState} from "react";
import { CgClose } from 'react-icons/cg';


const Wrapper = styled.section`

z-index: 999;
display: block;
// background-color: #1C3041;
width: 100%;

.navbar{
  background-color: black;
    display: flex;
    gap: 1rem;
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    justify-content: space-between;
    width: 100%;
    .navlogo{
        height: 4rem;
        padding: 0.4rem;
        // filter: drop-shadow(0 0 0.75rem black);
       }
    .mobmenu{
      display: none;
    }
    .navbarlinks{
        display: flex;
        gap: 3rem;
        align-items: center;
        margin-right: 1.5rem;
   .navbar_link{
       color: #dbba00;
      font-size: 1.5rem;
      text-decoration: none;
    }
      }

      .icons{
       display: none;
      }

}

// .sticky{
//   background-color: black;
//   display: flex;
//   gap: 1rem;
//   position: fixed;
//   justify-content: space-between;
//   width: 100%;
//   .navlogo{
//       height: 3rem;
//       padding: 0.4rem;
//      }
//   .mobmenu{
//     display: none;
//   }
//   .navbarlinks{
//       display: flex;
//       gap: 3rem;
//       align-items: center;
//       margin-right: 1.5rem;
//  .navbar_link{
//      color: #dbba00;
//     font-size: 1.3rem;
//     text-decoration: none;
//   }
//     }

//     .icons{
//      display: none;
//     }

// }



// @media(max-width:644px){
//   background-color: black;
//   .sticky{
//     display: flex;
//     .navlogo{
//       height: 3rem;
//     }
//     .navbarlinks{
//       display:none;
//     }
//     .mobmenu{
//       display: block;
//       text-shadow: none;
//       background-color: black;
      
//       position: fixed;
//       gap: 2rem;
//       width:100%;
//       z-index: 999;
//       .navbar_link{
//         display: block;
//         padding: 2rem;
        
//         position: relative;
       
//         text-decoration: none;
//         .cartdiv{
//           display: flex;
//         }
//       }  
//     }
//     .icons{
//       align-items: center;
//       display: flex;
//       color: #dbba00;
      
//       font-size: 3rem;
//       cursor: pointer;

//     .open{
//       color: #dbba00;
//       position: relative;
//     }
//     .close{
//       z-index: 999;
//       color: #dbba00;
//       position: relative;
//     }



//     }

//   }
// }


@media(max-width:644px){
 
  .navbar{
    display: flex;
    .navlogo{
      height: 3rem;
    }
    .navbarlinks{
      display:none;
    }
    .mobmenu{
      display: block;
      text-shadow: none;
      background-color: black;
      
      position: fixed;
      gap: 2rem;
      width:100%;
      z-index: 999;
      .navbar_link{
        display: block;
        padding: 2rem;
        color: #dbba00;
        position: relative;
       
        text-decoration: none;
        .cartdiv{
          display: flex;
        }
      }  
    }
    .icons{
      align-items: center;
      display: flex;
      color: #dbba00;
      
      font-size: 3rem;
      cursor: pointer;

    .open{
      color: #dbba00;
      position: relative;
    }
    .close{
      z-index: 999;
      color: #dbba00;
      position: relative;
    }



    }

  }
}
`

const NavBar = () => {

 
  const [icon, setIcon] = useState(true);
  // const [old , setOld] = useState('navbar');
  // window.onscroll = () => {
  //   let temp;
  //   let top = window.scrollY;
  //   if(top > 100){
  //     temp = "sticky";
  //   }
  //   else{
  //     temp = "navbar";
  //   }
  //   return setOld(temp);
  // }
   
  return (
    <Wrapper>     
       <div className="navbar">
            <div>
                <NavLink to='/'><img className="navlogo" src='./imgs/golden_logo.png' alt="logo" /></NavLink>
            </div>
           

       

        <div  className= {icon ? "navbarlinks" : "mobmenu"}>
        <NavLink className='navbar_link' to="/" onClick={()=>setIcon(true)}>Home</NavLink>
        <NavLink className='navbar_link' to="/properties" onClick={()=>setIcon(true)}>Properties</NavLink>
        <NavLink className='navbar_link' to="/about" onClick={()=>setIcon(true)}>About</NavLink>
        <NavLink className='navbar_link' to="/contact" onClick={()=>setIcon(true)}>Contact</NavLink>
            </div>
            <div className="icons">
        {icon ? <BsList className="open" onClick={()=>setIcon(false)} />  :  <CgClose className="close" onClick={()=>setIcon(true)}/>}
        </div>
            </div>
           
    </Wrapper>
  )
}

export default NavBar;
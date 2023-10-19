import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { BsFillPhoneVibrateFill } from "react-icons/bs";

const Wrapper = styled.section`
  font-family: "Anton", Arial, sans-serif;
  z-index: 999;
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  display: block;
  // background-color: #1C3041;
  width: 100%;
  background-color: #010203;

  .navbar {
    display: flex;
    gap: 1rem;
    padding: 0.6rem 0rem;
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    justify-content: space-between;
    width: 100%;
    .logodiv {
      display: flex;
      align-items: center;
      color: white;
      font-size: 1.5rem;
      .navlogo {
        height: 4rem;
        padding: 0rem;

        filter: drop-shadow(0 0 0.75rem black);
      }
    }

    .mobmenu {
      display: none;
    }
    .navbarlinks {
      display: flex;
      gap: 3rem;
      align-items: center;
      margin-right: 1.5rem;
      .navbar_link {
        color: white;
        font-size: 0.9rem;
        font-weight: 500;
        text-decoration: none;
      }
    }

    .icons {
      display: none;
    }
  }

  @media (max-width: 1018px) {
    .navbar {
      display: flex;
      .logodiv {
        .navlogo {
          height: 3.6rem;
        }
      }
      .navbarlinks {
        display: none;
      }
      .mobmenu {
        display: block;
        text-shadow: none;
        background-color: #626F7A;

        position: fixed;
        gap: 2rem;
        width: 100%;
        z-index: 999;
        .navbar_link {
          display: block;
          padding: 2rem;
          color: white;
          position: relative;

          text-decoration: none;
          .cartdiv {
            display: flex;
          }
        }
      }
      .icons {
        align-items: center;
        display: flex;
        color: white;

        font-size: 3rem;
        cursor: pointer;

        .open {
          position: relative;
        }
        .close {
          z-index: 999;

          position: relative;
        }
      }
    }
  }

  @media(max-width: 340px){
    .navbar {
      display: flex;
      .logodiv {
        .navlogo {
          height: 2rem;
        }
      }
    }
  }

  @media(max-width: 200px){
    .navbar {
      display: flex;
      .logodiv {
        .navlogo {
          height: 2rem;
          width:5rem;
        }
      }
    }
  }
`;

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
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            className="logodiv"
          >
            <img className="navlogo" src="https://res.cloudinary.com/dyqynjew8/image/upload/v1697607862/ELEVATE_PROEX_6_lowvmo.png" alt="logo" />

           

          </NavLink>
        </div>

        <div className={icon ? "navbarlinks" : "mobmenu"}>
          <NavLink className="navbar_link" to="/" onClick={() => setIcon(true)}>
            HOME
          </NavLink>
          <NavLink
          to="/properties/all"
            className="navbar_link"
            onClick={() => setIcon(true)}
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            PROPERTIES
          </NavLink>
          <NavLink
            className="navbar_link"
            to="/services"
            onClick={() => setIcon(true)}
          >
            SERVICES
          </NavLink>
          <NavLink
            className="navbar_link"
            to="/about"
            onClick={() => setIcon(true)}
          >
            ABOUT
          </NavLink>
          <NavLink
            className="navbar_link"
            to="/contact"
            onClick={() => setIcon(true)}
          >
            REACH US
          </NavLink>
          <NavLink
          to="tel:+91-9991998060"
            className="navbar_link"
           
            onClick={() => setIcon(true)}
            style={{ display: "flex", alignItems: "center", gap: "1rem" , padding:'1.2rem'}}
          >
            <BsFillPhoneVibrateFill />
            +91-9991998060
          </NavLink>
        </div>
        <div className="icons">
          {icon ? (
            <BsList className="open" onClick={() => setIcon(false)} />
          ) : (
            <CgClose className="close" onClick={() => setIcon(true)} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default NavBar;

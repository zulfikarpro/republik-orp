import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Img,
} from "./NavbarElement";
import { animateScroll as scroll } from "react-scroll";
// import { Logo } from '../LandingSection/LandingElement';
import logo from "../../images/logo.svg";

const mainLogo = require("../../images/LOGO-01@2x.png");

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const windowHeight = window.innerHeight;
  const changeNav = ({ param }) => {
    if (param === true) {
        setScrollNav(true)
    } else {
      if (window.scrollY >= windowHeight*5 && window.scrollY <= windowHeight*6) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    // console.log(window.scrollY)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to="/">
              <Img src={logo} />
              {/* <img src="C:\projects\republik-orp\public\images\LOGO-01.png"  alt=""></img> */}
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu scrollNav={scrollNav}>
              <NavItem>
                <NavLinks
                  to="menu1"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="visimisi"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Target
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="menu3"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Our Expertise
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="ourclients"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Our Clients
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contactus"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                >
                  Contact Us
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

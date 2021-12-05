import React, { useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Img} from './NavbarElement'
import { animateScroll as scroll } from 'react-scroll';
// import { Logo } from '../LandingSection/LandingElement';
import logo from '../../images/logoaero.png';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 5300 && window.scrollY<=6380) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
      };

    useEffect(() => {
    window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
    scroll.scrollToTop();
    };

    return (
        <>
        
      <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to='/'>
                        <Img src={logo}/>
                        {/* <img src="C:\projects\republik-orp\public\images\LOGO-01.png"  alt=""></img> */}
                        </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu 
                             scrollNav={scrollNav}>
                        <NavItem>
                            <NavLinks 
                            to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='aboutus'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='ourworks'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}>Our Works</NavLinks>
                        </NavItem>
                        <NavItem>    
                            <NavLinks to='product'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}>Our Products</NavLinks>
                        </NavItem>
                        <NavItem>    
                            <NavLinks to='partner'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}>Our Partners</NavLinks>
                        </NavItem>
                        <NavItem>
                                <NavLinks to='contactus'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}>Contact Us</NavLinks>
                        </NavItem>

                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
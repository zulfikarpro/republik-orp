import React, { useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Img} from './NavbarElement'
import { animateScroll as scroll } from 'react-scroll';
// import { Logo } from '../LandingSection/LandingElement';
import logo from '../../images/logoorp.png';
import bg from '../../images/bg/headerbg2.png'

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
                <img src={bg} style={{position:'absolute', top:'0px', left:0, right:0, maxWidth:'100vw', minHeight:'120px'}}/>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to='/'>
                        <Img src={logo}/>
                        {/* <img src="C:\projects\republik-orp\public\images\LOGO-01.png"  alt=""></img> */}
                        </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars style={{color:'black'}}/>
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
                            offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='whatwedo'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}>What We Do</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='ourproduct'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}>Our Companies</NavLinks>
                        </NavItem>
                        {/* <NavItem>    
                            <NavLinks to='ourpartner'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Our Partner</NavLinks>
                        </NavItem> */}
                        <NavItem>
                                <NavLinks to='contactus'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Contact Us</NavLinks>
                        </NavItem>

                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
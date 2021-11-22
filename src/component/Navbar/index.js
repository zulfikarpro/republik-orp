import React, { useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Img} from './NavbarElement'
import { animateScroll as scroll } from 'react-scroll';
// import { Logo } from '../LandingSection/LandingElement';
import logo from '../../images/logospace.png';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY>2000){
            if(window.scrollY<=3000 || window.scrollY>4000){
                return setScrollNav(true)
            }
            setScrollNav(false)
        }
        
        else {
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
                            offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='whoweare'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Who We Are</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='ourproduct'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={10}>Our Product</NavLinks>
                        </NavItem>
                        <NavItem>    
                            <NavLinks to='ourtarget'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-0}>Our Target</NavLinks>
                        </NavItem>
                        <NavItem>    
                            <NavLinks to='ourpartner'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Our Partner</NavLinks>
                        </NavItem>
                        <NavItem>
                                <NavLinks to='contactus'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Join Our Force</NavLinks>
                        </NavItem>

                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
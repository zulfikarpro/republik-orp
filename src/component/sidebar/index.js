import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} toggle={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='false'
                            offset={-80}
                            to='aboutus' exact='false' onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='false'
                            offset={-80}
                             to='layanan' onClick={toggle}>
                        Layanan
                    </SidebarLink>
                    <SidebarLink
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='false'
                            offset={-80} to='kelas' onClick={toggle}>
                    Events/Kelas Impor
                    </SidebarLink>
                    <SidebarLink 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='false'
                            offset={-80} 
                            to='testimoni' onClick={toggle}>
                    Testimoni
                    </SidebarLink>
                    <SidebarLink
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='false'
                            offset={-80} 
                            to='contactus' onClick={toggle}>
                    <h1 style={{color:'#C0022D'
                            }}>Join Us</h1>
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

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
                            offset={-80} to='aboutus' onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to='whatwedo' onClick={toggle}>
                        What We Do
                    </SidebarLink>
                    <SidebarLink to='partnership' onClick={toggle}>
                        Partnership
                    </SidebarLink>
                    <SidebarLink to='ourproducts' onClick={toggle}>
                        Products
                    </SidebarLink><SidebarLink to='contactus' onClick={toggle}>
                        Contact Us
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

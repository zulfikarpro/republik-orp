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
                    <SidebarLink to='whatwedo' onClick={toggle}>
                        What We Do
                    </SidebarLink>
                    <SidebarLink to='ourproduct' onClick={toggle}>
                        Our Companies
                    </SidebarLink>
                    {/* <SidebarLink to='ourpartner' onClick={toggle}>
                         Our Partner
                    </SidebarLink> */}
                    {/* <SidebarLink to='ourpartner' onClick={toggle}>
                        Our Partner
                    </SidebarLink> */}
                    <SidebarLink to='contactus' 
                    
                    offset={-120}
                    onClick={toggle}>
                        Contact Us
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

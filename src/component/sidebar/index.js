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
                    <SidebarLink to='menu1' onClick={toggle}>
                    About Us
                    </SidebarLink>
                    <SidebarLink to='visimisi' onClick={toggle}>
                    Target
                    </SidebarLink>
                    <SidebarLink to='menu3' onClick={toggle}>
                    Our Expertise
                    </SidebarLink>
                    <SidebarLink to='ourclients' onClick={toggle}>
                    Our Clients
                    </SidebarLink>
                    <SidebarLink to='contactus' onClick={toggle}>
                    Contact Us
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

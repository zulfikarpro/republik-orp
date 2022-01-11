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
                    <SidebarLink to='menu1' onClick={toggle} offset={20}>
                    About Us
                    </SidebarLink>
                    <SidebarLink to='visimisi' onClick={toggle} offset={-80}>
                    Target
                    </SidebarLink>
                    <SidebarLink to='menu3' onClick={toggle} offset={-80}>
                    Our Expertise
                    </SidebarLink>
                    <SidebarLink to='ourclients' onClick={toggle} offset={-40}>
                    Our Clients
                    </SidebarLink>
                    <SidebarLink to='contactus' onClick={toggle} offset={80}>
                    Contact Us
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

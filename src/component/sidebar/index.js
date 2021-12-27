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
                    <SidebarLink 
                    offset={-80} 
                    to='facilities' onClick={toggle}>
                        Facilities
                    </SidebarLink>
                    <SidebarLink 
                    offset={-240} 
                    to='projects' onClick={toggle}>
                        Projects
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

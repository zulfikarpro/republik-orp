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
                    <SidebarLink to='whoweare' onClick={toggle} offset={-80}>
                        Who We are
                    </SidebarLink>
                    <SidebarLink to='ourproduct' onClick={toggle} offset={-190}>
                        Our Services
                    </SidebarLink>
                    {/* <SidebarLink to='ourtarget' onClick={toggle}>
                        Our Target
                    </SidebarLink> */}
                    <SidebarLink to='ourpartner' onClick={toggle} offset={-80}>
                        Our Partners
                    </SidebarLink><SidebarLink to='contactus' onClick={toggle} offset={-60}>
                        Join Our Force
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

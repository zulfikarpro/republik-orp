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
                    <SidebarLink to='aboutus' onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to='ourworks' onClick={toggle}>
                        Our Works
                    </SidebarLink>
                    {/* <SidebarLink to='product' onClick={toggle}>
                        Our Products
                    </SidebarLink> */}
                    <SidebarLink to='partner' onClick={toggle}>
                        Our Partners
                    </SidebarLink><SidebarLink to='contactus' onClick={toggle} offset={-20}>
                        Contact Us
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

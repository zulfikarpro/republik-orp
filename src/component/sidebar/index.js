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
                        Menu1
                    </SidebarLink>
                    <SidebarLink to='menu2' onClick={toggle}>
                        Menu2
                    </SidebarLink>
                    <SidebarLink to='menu3' onClick={toggle}>
                        Menu3
                    </SidebarLink>
                    <SidebarLink to='menu4' onClick={toggle}>
                        Menu4
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

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
                    <SidebarLink to='layanan' onClick={toggle}>
                        Layanan
                    </SidebarLink>
                    <SidebarLink to='kelas' onClick={toggle}>
                    Events/Kelas Impor
                    </SidebarLink>
                    <SidebarLink to='testimoni' onClick={toggle}>
                    Testimoni
                    </SidebarLink>
                    <SidebarLink to='contactus' onClick={toggle}>
                    <h1 style={{color:'#C0022D'
                            }}>Join Us</h1>
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

import React from 'react'
import {FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'

import { FooterContainer, FooterWrapper, FooterFirstLine, FooterSecondLine } from './FooterElement'
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterFirstLine style={{marginBottom:'0px'}}>
                        <FaWhatsapp style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        <FaInstagram style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        {/* <FaFacebookF style={{width:'auto', height:'30px',marginRight:'8px'}}/> */}
                        {/* <FaTwitter style={{width:'auto', height:'30px',marginRight:'8px'}}/> */}
                        <FaYoutube style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                    </FooterFirstLine>
                    <FooterSecondLine style={{marginTop:'0px'}}>
                    © 2021 Republik Aero.  Trademarks and brands are the property of their respective owners.
                    </FooterSecondLine>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer

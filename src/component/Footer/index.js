import React from 'react'
import {FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'

import { FooterContainer, FooterWrapper, FooterFirstLine, FooterSecondLine } from './FooterElement'
const Footer = () => {
    return (
        <>
            <FooterContainer style={{marginBottom:'10px'}}>
                <FooterWrapper>
                    <FooterFirstLine style={{margin:'auto', marginBottom:'6px'}}>
                        <FaWhatsapp style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        <FaInstagram style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        <FaYoutube style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                    </FooterFirstLine>
                    <FooterSecondLine>
                    © 2021 Republik Orp.  Trademarks and brands are the property of their respective owners.
                    </FooterSecondLine>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer

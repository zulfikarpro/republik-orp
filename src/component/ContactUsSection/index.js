import React from 'react'

import {FaEnvelope} from 'react-icons/fa'
import { ContactUsContainer ,ContactUseWrapper, ContactUsTextWrapper, TextLineOne, TextLineTwo, Input, InputWrapper } from './ContactUsElement'

const index = () => {
    return (
        <>
        <ContactUsContainer id="contactus">
            <ContactUseWrapper>
                <ContactUsTextWrapper>
                    <TextLineOne>
                    Our continuously growing extensive network enables us to deliver goods and customer
satisfaction across Indonesia and around the world. With REX, you will have a delightful
shipping experience. 
                    </TextLineOne>
                    <TextLineTwo>
                    For more info &amp; get in touch with us
                    </TextLineTwo>
                    <InputWrapper>
                    <Input />
                    <FaEnvelope style={{color:'red', height:'150%', width:'auto'}}/>
                    </InputWrapper>
                </ContactUsTextWrapper>    
            </ContactUseWrapper>      
        </ContactUsContainer>  
        </>
    )
}

export default index

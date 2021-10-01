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
                    Answer the phone, I know that you're home
I wanna get you alone. And do it again, do it again
                    </TextLineOne>
                    <TextLineTwo>
                    Phone call and answering machine
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

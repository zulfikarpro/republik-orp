import React from 'react'

import {FaEnvelope} from 'react-icons/fa'
import { ContactUsContainer ,ContactUseWrapper, ContactUsTextWrapper, TextLineOne, TextLineTwo, Input, InputWrapper } from './ContactUsElement'

const index = () => {
    return (
        <>
        <ContactUsContainer id="contactus">
            <ContactUseWrapper style={{}}>
                <ContactUsTextWrapper style={{width:'50%',  padding:'40px'}}>
                    <TextLineOne style={{textAlign:'justify'}}>
                    Our continuously growing extensive network enables us to deliver goods and customer
satisfaction across Indonesia and around the world. With REX, you will have a delightful
shipping experience. 
                    </TextLineOne>
                    <TextLineTwo>
                    For more info &amp; get in touch with us
                    </TextLineTwo>
                    <InputWrapper>
                    <Input />
                    <FaEnvelope style={{color:'red', height:'20px', width:'20px', marginRight:'10%'}}/>
                    </InputWrapper>
                </ContactUsTextWrapper>    
                <ContactUsTextWrapper style={{display:'flex',flexDirection:'column', width:'50%', padding:'40px', textAlign:'right'}}>
                    <TextLineTwo>
                    Address
                    </TextLineTwo>
                    <TextLineOne style={{textAlign:'justify', direction:'rtl'}}>
                    RPX Center Building, Jl. Ciputat Raya no. 99
                    <br/>
                    (021) 75918007
                    <br/>
                    info@republikexpres.com
                    </TextLineOne>
                </ContactUsTextWrapper>  
            </ContactUseWrapper>      
        </ContactUsContainer>  
        </>
    )
}

export default index

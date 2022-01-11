import React from 'react'

import {FaEnvelope} from 'react-icons/fa'
import { ContactUsContainer ,ContactUseWrapper, ContactUsTextWrapper, TextLineOne, TextLineTwo, Input, InputWrapper } from './ContactUsElement'

const MobileContent = ({mobile}) =>{
    if(mobile){
        return(
            <div>
                <TextLineTwo style={{textAlign:'center'}}> Contact Us</TextLineTwo>
            </div>

        )
    }else{
        return(
        <div>
            <TextLineOne style={{textAlign:'justify'}}>
            Our continuously growing extensive network enables us to deliver goods and customer
satisfaction across Indonesia and around the world. With REX, you will have a delightful
shipping experience. 
            </TextLineOne>
            <TextLineTwo>
            For more info &amp; 
            get in touch with us
            </TextLineTwo>
        </div>
        )
    }

}

const index = ({mobile}) => {
    return (
        <>
        <ContactUsContainer id="contactus" style={{background:`${mobile? 'linear-gradient(180deg, rgba(0,0,0, .7), transparent)': 'transparent'}`, height:`${mobile? '100vh' : '85vh'}`}}>
            <ContactUseWrapper style={{}}>
                <ContactUsTextWrapper style={{width:`${mobile?'90%': '50%'}`}}>
                    <MobileContent mobile={mobile}/>
                    <InputWrapper>
                        <Input />
                        <FaEnvelope style={{color:'red', height:'20px', width:'20px', marginRight:'20px'}}/>
                    </InputWrapper>
                </ContactUsTextWrapper>    
                <ContactUsTextWrapper style={{display:'flex',flexDirection:'column', width:'50%', justifyContent:'flex-start', padding:'40px', textAlign:`${mobile?'center':'right'}`}}>
                    <TextLineTwo style={{marginBottom:`${mobile? '0px' : '' }`}}>
                    Address
                    </TextLineTwo>
                    <TextLineOne style={{textAlign:'rigtht'}}>
                    RPX Center Building,
                    <div style={{height:'5px'}}/>
                     Jl. Ciputat Raya no. 99
                    <div style={{height:'5px'}}/>
                    (021)75918007
                    <div style={{height:'5px'}}/>
                    info@republikexpres.com
                    </TextLineOne>
                </ContactUsTextWrapper>  
            </ContactUseWrapper>      
        </ContactUsContainer>  
        </>
    )
}

export default index

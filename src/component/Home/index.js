import React from 'react'
import { Container, ContentDiv, CarouselDiv, Img, TitleDiv,Title1, Title2 } from './HomeElements'
import logo from '../../images/logoaero.png'
import main from '../../images/bg/main.jpg'
import { H1, P } from '../AboutUs/AboutUsElement'

const HomePage = () => {
    return (
        <Container style={{maxHeight:'200vh'}}>
            <ContentDiv id='home' style={{height:'200vh', background:`url(${main})`, backgroundRepeat:'no-repeat'}}>
                <div style={{width:'100%', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center'}} id='home'>
                    <div style={{margin:'auto'}}>
                    <img src={logo}></img>
                    </div>
                </div>
                <div style={{display:'flex', flexDirection:'row',height:'100vh', width:'100%', zIndex:'1'}}>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:'50%', paddingLeft:'40px', color:'white'}}>
                        <H1 style={{textDecoration:'underline'}} id='aboutus'>About Us</H1>
                        <P>
                        From the field of telecommunications RETIA has shaped its business division ReDat Recording Systems.<br/>

ReDat Recording System provides comprehensive solution to record voice, screen and data and deliver system solutions with high added value. ReDat is a reliable and technologically independents solution for quality management, voice analysis, phone communications and radar operations.<br/>

Within its broad portfolio, ReDat offers a secure and stable system for the ATM/ATC sector and helps improved abilities of agents and dispatchers, lowering costs for their training and thereby streamlining operations and improving services of contact and dispatch centers<br/>

                        </P>
                    </div>
                </div>
            </ContentDiv>
        </Container>
    )
}

export default HomePage

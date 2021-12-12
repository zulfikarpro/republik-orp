import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import { H1,H2,P } from './AboutUsElement'
import main from '../../images/bg/aboutusbg.png'


const AboutUsPage = (
  ) => {
    return (
      <Container style={{height:'100vh', maxWidth:'100vw', overflowX:'hidden'}} id='aboutus'>
          <ContentDiv id='home' style={{background:`url(${main})`, width:'100%',backgroundPosition:'contain', backgroundRepeat:'no-repeat'}}>  
                {/* <img src={main} style={{left:'0',marginTop:'6vh'}}/>    */}
                <div style={{left:'0', display:'flex', flexDirection:'row',height:'100vh', width:'100%', maxWidth:'96vw', marginLeft:'20px', zIndex:'1', position:'absolute'}}>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:'50%', paddingLeft:'40px', color:'white'}}>
                        <H1 id='aboutus' style={{marginBottom:'10px'}}>About Us</H1>
                        <div style={{height:'2px', width:'40%', background:'white'}}/>
                        <P style={{paddingRight:'80px'}}>
                        From the field of telecommunications RETIA has shaped its business division ReDat Recording Systems.
ReDat Recording System provides comprehensive solution to record voice, screen and data and deliver system solutions with high added value. ReDat is a reliable and technologically independents solution for quality management, voice analysis, phone communications and radar operations.<br/>
<br/>
Within its broad portfolio, ReDat offers a secure and stable system for the ATM/ATC sector and helps improved abilities of agents and dispatchers, lowering costs for their training and thereby streamlining operations and improving services of contact and dispatch centers<br/>

                        </P>
                    </div>
                </div>
          </ContentDiv>
      </Container>
  )
}


export default AboutUsPage

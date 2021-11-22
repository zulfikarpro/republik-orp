import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg2.png'
import { H1,H2,P } from './AboutUsElement'
const AboutUsPage = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id='whoweare'>
               <div style={{position:'absolute',right:'', width:'100%', height:'200%'}}>
               <img style={{position:'absolute', zIndex:-1 , width:'100%', height:'100vh', objectFit:'cover' }} src={bg}/>
                </div>
               {/* <div style={{height:'100%'}}> */}
                 <div style={{position:'absolute', width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'end'}}>
                  <div style={{display:'flex', flexDirection:'column', margin:'10%', color:'#fff', maxWidth:'35%',maxHeight:'80%', textAlign:'justify'}}>
                  <H1>Who We Are</H1>
                  <P>WE ARE PRIVATE OWNED COMPANY WITH A
DECADE HISTORY AND EXPERIENCE OF SUPPLY 
AND ACQUISITIONS OF DEFENCE EQUIPMENT FOR
THE REPUBLIC OF INDONESIA ARMED FORCES</P>
                  <H2>Vision</H2>
                  <P>TO BECOME INDONESIA’S TOP TIER DEFENCE EQUIPMENT
 MANUFACTURER AND MAINTAINER IN THE FIELDS OF
 AEROSPACE AND NAVAL MISSION SYSTEMS &amp; PLATFORM</P>
                  <H2>Vision</H2>
                  <P>TO BECOME INDONESIA’S TOP TIER DEFENCE EQUIPMENT
 MANUFACTURER AND MAINTAINER IN THE FIELDS OF
 AEROSPACE AND NAVAL MISSION SYSTEMS &amp; PLATFORM</P>
                 </div>
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default AboutUsPage

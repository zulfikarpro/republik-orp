import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg2.png'
import { AboutUsHeading } from './AboutUsElement'
const AboutUsPage = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id='whoweare'>
               <img style={{zIndex:-1 ,maxWidth:'100%', height:'auto', }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
                 <div style={{position:'absolute', width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'end'}}>
                  <div style={{display:'flex', flexDirection:'column', margin:'10%', color:'#fff', maxWidth:'40%'}}>
                  <h1>Who We Are</h1>
                  <p>WE ARE PRIVATE OWNED COMPANY WITH A
DECADE HISTORY AND EXPERIENCE OF SUPPLY 
AND ACQUISITIONS OF DEFENCE EQUIPMENT FOR
THE REPUBLIC OF INDONESIA ARMED FORCES</p>
                  <h2>Vision</h2>
                  <p>TO BECOME INDONESIA’S TOP TIER DEFENCE EQUIPMENT
 MANUFACTURER AND MAINTAINER IN THE FIELDS OF
 AEROSPACE AND NAVAL MISSION SYSTEMS &amp; PLATFORM</p>
                  <h2>Vision</h2>
                  <p>TO BECOME INDONESIA’S TOP TIER DEFENCE EQUIPMENT
 MANUFACTURER AND MAINTAINER IN THE FIELDS OF
 AEROSPACE AND NAVAL MISSION SYSTEMS &amp; PLATFORM</p>
                 </div>
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default AboutUsPage

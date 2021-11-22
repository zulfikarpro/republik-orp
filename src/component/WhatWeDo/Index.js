import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg3.png'
import { H1, P } from '../AboutUs/AboutUsElement'
const WhatWeDO = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id="whatwedo">
               <img style={{zIndex:-1 ,maxWidth:'100%', height:'auto', }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
               <div style={{position:'absolute', width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'start'}}>
                  <div style={{display:'flex', flexDirection:'column', margin:'10%', color:'#fff', maxWidth:'40%', textAlign:'justify'}}>
                  <H1>What We Do</H1>
                  <br/>
                  <P style={{maxWidth:'400px'}}>WE SELECT WORLDWIDE PROVIDERS WITH
FOCUS ON TRANSFER OF TECHNOLOGY AND
OFFSET GRANTS FOR THE REPUBLIC OF
INDONESIA DEFENCE INDUSTRY, PAVING THE
WAY FOR FUTURE INDUSTRIAL GROWTH.</P>
                  </div>
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default WhatWeDO
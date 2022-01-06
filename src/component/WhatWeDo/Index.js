import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg3.png'
import { H1, P } from '../AboutUs/AboutUsElement'
const WhatWeDO = ({mobile}
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id="whatwedo">
             <div style={{position:'absolute',left:'', width:'100%', height:'200%'}}>
               <img style={{position:'absolute', zIndex:-1 , width:'100%', height:'100vh', objectFit:'cover' }} src={bg}/>
                </div>
               {/* <div style={{height:'100%'}}> */}
               <div style={{position:'absolute', width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                  <div style={{display:'flex', flexDirection:'column', color:'#fff', width:'40%',textAlign:'justify',justifyContent:'center', marginTop:`${mobile?'15%':'0px'}`}}>
                  <H1>What We Do</H1>
                  <br/>
                  <P style={{maxWidth:'400px', marginRight:'20px'}}>We select worldwide providers with
focus on transfer of technology and
offset grants for the republic of
indonesia defence industry, paving the
way for future industrial growth.</P>
                  </div>
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default WhatWeDO
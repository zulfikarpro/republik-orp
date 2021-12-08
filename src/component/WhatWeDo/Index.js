import React from 'react'
import { Container, ContentDiv, DivText, Title, P } from '../Home/HomeElements'
import bg from '../../images/bg/bgwhatwedo.png'
const WhatWeDO = (
  ) => {
    return (
        <>
           <Container style={{height:'100vh',minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}} id="whatwedo">
             <ContentDiv style={{height:'100vh', minWidth:'100%',justifyContent:'center'}} id="whatwedo">
               <img style={{zIndex:-1 ,height:'90vh', maxWidth:'100%', minHeight:'auto', }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
               <DivText style={{height:'auto', width:'100%', margin:'auto', marginTop:'5%'}}>
                  <div style={{display:'flex', flexDirection:'column', justifyContent:'center', margin:'10%', color:'#fff', maxWidth:'40%'}}>
                  <Title style={{marginBottom:'10px', marginTop:'12%'}}>What We Do</Title>
                  <P style={{maxWidth:'400px', textAlign:'justify', lineHeight:''}}>
                  With several reliable subsidiaries in their respective fields, we support all national and international defense needs.
</P>
                  </div>
                 </DivText>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default WhatWeDO
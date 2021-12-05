import React from 'react'
import { Container, ContentDiv, DivText } from '../Home/HomeElements'
import bg from '../../images/bg/bgwhatwedo.png'
const WhatWeDO = (
  ) => {
    return (
        <>
           <Container style={{height:'100vh',minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}} id="whatwedo">
             <ContentDiv style={{height:'100vh', minWidth:'100%',justifyContent:'center'}} id="whatwedo">
               <img style={{zIndex:-1 ,height:'90vh', maxWidth:'100%', minHeight:'auto', }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
               <DivText style={{height:'60%', width:'100%', margin:'auto', marginTop:'5%'}}>
                  <div style={{display:'flex', flexDirection:'column', justifyContent:'center', margin:'10%', color:'#fff', maxWidth:'40%'}}>
                  <h1>What We Do</h1>
                  <br/>
                  <p style={{maxWidth:'400px', textAlign:'justify'}}>
                  With several reliable subsidiaries in their respective fields, we support all national and international defense needs.
</p>
                  </div>
                 </DivText>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default WhatWeDO
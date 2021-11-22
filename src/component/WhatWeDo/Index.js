import React from 'react'
import { Container, ContentDiv, DivText } from '../Home/HomeElements'
import bg from '../../images/bg/bgwhatwedo.png'
const WhatWeDO = (
  ) => {
    return (
        <>
           <Container style={{minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}} id="whatwedo">
             <ContentDiv style={{minWidth:'100%',justifyContent:'flex-start'}} id="whatwedo">
               <img style={{zIndex:-1 ,maxWidth:'100%', minHeight:'auto', }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
               <DivText>
                  <div style={{display:'flex', flexDirection:'column', margin:'10%', color:'#fff', maxWidth:'40%'}}>
                  <h1>What We Do</h1>
                  <br/>
                  <p style={{maxWidth:'400px', textAlign:'justify'}}>
                  Dengan beberapa anak perusahaan yang handal dibidang masing masing, 
kami mensupport segala kebutuhan pertahanan baik nasional dan internasional
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
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
                  <p style={{maxWidth:'400px'}}>Lorem ipsum dolor sit amet, et diceret volumus nam, nusquam gubergren quaerendum at vix. At nam audiam ullamcorper, consul laoreet te est. Ut vidisse dolorem mel, possim qualisque pertinacia mel ei, option qualisque usu an. Ne sint paulo congue usu, ne cibo salutandi constituam his, ne menandri hendrerit abhorreant eos. Primis quaerendum definitionem te vix, iuvaret nostrum voluptaria sea cu.</p>
                  </div>
                 </DivText>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default WhatWeDO
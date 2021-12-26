import React from 'react'
import { Container, ContentDiv, DivText, Title, P, DivTextWWD } from '../Home/HomeElements'
import bg from '../../images/bg/bgwhatwedo.png'
import bgMobile from '../../images/bg/bgwhatwedomobile.png'
const WhatWeDO = ( {mobile}
  ) => {

    const BackgroundOrnament = () =>{
      if(mobile){
        return (<img src={bgMobile} style={{objectFit:'cover', height:'100%'}} />)
      }else{
        return (
          <img style={{zIndex:-1 ,height:'90vh', maxWidth:'100%', minHeight:'auto', }} src={bg}/>
        )
      }
    }
    const DivTextContent = () =>{
      if(mobile){
        return(<div style={{paddingLeft:'10%', paddingRight:'10%'}}>
        <Title style={{marginBottom:'10px', marginTop:'120px'}}>What We Do</Title>
                  <P style={{maxWidth:'400px', textAlign:'justify', lineHeight:''}}>
                  With several reliable subsidiaries in their respective fields, we support all national and international defense needs.
                  </P>
                  </div>
                  )
      }else{
        return(
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', margin:'10%', color:'#fff', maxWidth:'40%'}}>
                  <Title style={{marginBottom:'10px', marginTop:'12%'}}>What We Do</Title>
                  <P style={{maxWidth:'400px', textAlign:'justify', lineHeight:''}}>
                  With several reliable subsidiaries in their respective fields, we support all national and international defense needs.
                  </P>
                  </div>
        )
      }
    }
    return (
        <>
           <Container style={{height:'100vh',minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}} id="whatwedo">
             <ContentDiv isMobile={mobile} style={{height:'100vh', minWidth:'100%',justifyContent:'center'}} id="whatwedo">
               <BackgroundOrnament/>
 
               {/* <div style={{height:'100%'}}> */}
               <DivTextWWD style={{height:'auto', width:'100%', margin:'auto', marginTop:'5%'}}>
                 <DivTextContent/>
                  
                 </DivTextWWD>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default WhatWeDO
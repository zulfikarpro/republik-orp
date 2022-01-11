import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg2.png'
import { H1,H2,P } from './AboutUsElement'
const AboutUsPage = ({mobile}
  ) => {
    return (
        <>
           <Container style={{minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',justifyContent:'flex-start'}} id='whoweare'>
               <div style={{position:'absolute',right:'', width:'100%', height:'100vh'}}>
               <img style={{position:'absolute', zIndex:1 , width:'100%', height:'100vh', objectFit:'cover', objectPosition:`${mobile? '-50vw' : ''}` }} src={bg}/>
                </div>
               {/* <div style={{height:'100%'}}> */}
                 <div style={{position:'absolute', width:'100%', height:'80%',display:'flex', flexDirection:'row', justifyContent:'end', zIndex:2, marginTop:`${mobile? '15%': '5%'}`, background:`${mobile? 'rgba(0,0,0,.7)' : ''}`, paddingBottom:'100px' }}>
                  <div style={{display:'flex', flexDirection:'column',justifyContent:'center', marginLeft:`${mobile?'auto':'10%'}`,marginRight:`${mobile?'auto':'10%'}`, color:'#fff', maxWidth:`${mobile? '50%': '35%'}`,maxHeight:'80%', textAlign:`${mobile? 'center' : 'justify'}`}}>
                  <H1 style={{marginBottom:'0px', marginTop:'25vh'}}>Who We Are</H1>
                  <P >We are private owned company with a
decade history and experience of supply 
and acquisitions of defence equipment for
the republic of indonesia armed forces.</P>
                  <H2 style={{marginBottom:'0px'}}>Vision</H2>
                  <P>To become indonesia’s top tier defence equipment
 manufacturer and maintainer in the fields of
 aerospace and naval mission systems &amp; Platform.</P>
                  <H2 style={{marginBottom:'0px'}}>Mission</H2>
                  <P>Providing indonesia with turn key solution in defence systems acquisitions from top quality equipment manufacturer worldwide.</P>
                 </div>
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default AboutUsPage

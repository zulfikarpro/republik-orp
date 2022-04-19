import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg2space.png'
import { Text1, Text2 } from './AboutUsElement'
import {Title, TitleShadow} from '../OurProducts/OurProductElements'
const AboutUsPage = ({mobile}
  ) => {
    return (
        <>
           <Container style={{minHeight:`${mobile?'110vh':'100%'}`, minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id='whoweare'>
               <img style={{ objectFit:'cover', objectPosition:'70%', zIndex:-1, minHeight:'60%'}} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
                <div style={{position:'absolute', width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'end', background:`${mobile?'rgba(0,0,0,.3)':''}`}}>
                  <div style={{width:`${mobile? '0%':'20%'}`,height:'100%'}}/>
                    <div style={{display:'flex', flexDirection:'column', color:'#fff', maxWidth:'90%', maxHeight:'100%', justifyContent:'flex-start', marginLeft:`${mobile? 'auto': ''}` , marginRight:`${mobile? 'auto': ''}` , marginTop:`${mobile?'20px':''}`}}>
                      <Title>Who We Are</Title>
                      <Text2 style={{marginBottom:'0'}}>Republik Aerospace Dirgantara Established to strengthen the Indonesian Defense ecosystem</Text2>
                      <Text2 style={{marginBottom:'0'}}>pushes aerospace innovation and technology for strategic advancements which will further drive Indonesia's global positioning. </Text2>
                      <Text1 style={{marginTop:`${mobile? '40px': ''}`}}>Vision</Text1>
                      <Text2 style={{marginBottom:'0'}}>provide integrated solutions through one stop logistics, modern technology, and a committed workforce.</Text2>   
                      <Text1>Mission</Text1>
                      <Text2 style={{marginBottom:'0'}}>combining strategic planning with modern technology and workforce commitment to provide the best logistics solutions.</Text2>
                      <div style={{height:'20%', width:'100%'}}></div>
                    </div>
                  
                  <div style={{width:`${mobile?'0%':'5%'}`,height:'100%'}}></div>
                </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default AboutUsPage

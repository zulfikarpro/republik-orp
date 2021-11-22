import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg2space.png'
import { Text1, Text2 } from './AboutUsElement'
import {Title, TitleShadow} from '../OurProducts/OurProductElements'
const AboutUsPage = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id='whoweare'>
               <img style={{ objectFit:'cover', objectPosition:'70%', zIndex:-1, minHeight:'60%' }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
                 <div style={{position:'absolute', width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'end'}}>
                 <div style={{width:'20%',height:'100%'}}>
                   
                 </div>
                  <div style={{display:'flex', flexDirection:'column', color:'#fff', maxWidth:'90%', justifyContent:'flex-start' , height:'100vh'}}>
                  <Title>Who We Are<TitleShadow>Who We Are</TitleShadow></Title>
                  <Text1>Republik Aerospace Dirgantara Established to strengthen the Indonesian Defense ecosystem</Text1>
                  <Text2>pushes aerospace innovation and technology for strategic advancements which will further drive Indonesia's global positioning. </Text2>
                  <div style={{height:'20%', width:'100%'}}></div>
                 </div>
                 
                 <div style={{width:'5%',height:'100%'}}></div>
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default AboutUsPage

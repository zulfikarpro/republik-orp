import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg2.png'
const AboutUsPage = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%'}}>
             <ContentDiv style={{backgroundImage:`url${bg}`}}>

             </ContentDiv>
           </Container>
        </>
    )
}

export default AboutUsPage

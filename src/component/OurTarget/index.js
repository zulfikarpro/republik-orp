import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import { DivBlue } from './OurTargetElements'

const OurTarget = () => {
    return (
        <>
          <Container style={{maxHeight:'200vh',minHeight:'100vh', width:'100%', marginTop:'0px'}} id='ourtarget'>
              <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'center', }}  >
                  <div style={{color:'white'}}>
                  <DivBlue >
                  </DivBlue>
                  
                  <h1 style={{width:'100%', textAlign:'center'}}>Vision</h1>
                  <p style={{width:'100%', textAlign:'center'}}>crafting Indonesia's national defense through meticulous and advantageous partnerships to create an effective aerospace ecosystem</p>
                  <h1 style={{width:'100%', textAlign:'center'}}>Mission</h1>
                  <p style={{width:'100%', textAlign:'center'}}>To become the leading aerospace industry capable of supporting local industries in achieving further integration </p>
                  </div>
              </ContentDiv>
              </Container>  
        </>
    )
}

export default OurTarget

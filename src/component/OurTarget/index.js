import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import { DivBlue } from './OurTargetElements'

const OurTarget = () => {
    return (
        <>
          <Container style={{maxHeight:'200vh',minHeight:'100vh', width:'100%', marginTop:'0px'}} id='ourtarget'>
              <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'center' }}  >  
                  <DivBlue >
                  <div style={{color:'white', transform:'rotate(180deg)',}}>
                  <h1 style={{width:'100%', textAlign:'center'}}>Vision</h1>
                  <p style={{width:'40%', alignSelf:'center', marginLeft:'auto', marginRight:'auto', textAlign:'center'}}>crafting Indonesia's national defense through meticulous and advantageous partnerships to create an effective aerospace ecosystem</p>
                  <h1 style={{width:'100%', textAlign:'center'}}>Mission</h1>
                  <p style={{width:'50%',alignSelf:'center', marginLeft:'auto', marginRight:'auto', textAlign:'center'}}>To become the leading aerospace industry capable of supporting local industries in achieving further integration </p>
                  </div>
                  </DivBlue>
              </ContentDiv>
              </Container>  
        </>
    )
}

export default OurTarget

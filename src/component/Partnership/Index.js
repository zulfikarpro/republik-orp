import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg4space.png'
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@material-ui/core'
const Partnership = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'200vh', justifyContent:'flex-start', }} id="ourproduct">
               <img style={{zIndex:-1 ,height:'100%', objectFit:'cover', position:'30%' }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
                 <div style={{position:'absolute', width:'100%', height:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                   <div style={{display:'flex', flexDirection:'column', color:'#fff',  height:'100%', justifyContent:'center'}}>
                     {/* <h1>Our Products</h1> */}
                     <br/>
                  </div>
                 </div>
               {/* </div> */}
             </ContentDiv>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'200vh', justifyContent:'flex-start', }} id="ourtarget">

             </ContentDiv>
           </Container>
        </>
    )
}

export default Partnership
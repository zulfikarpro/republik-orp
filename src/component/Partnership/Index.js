import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg4space.png'
import { Grid } from '@material-ui/core'
import brand1 from '../../images/brand/brand1.png'
import brand2 from '../../images/brand/brand2.png'
import brand3 from '../../images/brand/brand3.png'
import brand4 from '../../images/brand/brand4.png'
const Partnership = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'200vh', justifyContent:'flex-start', }} >
               <img style={{zIndex:-1 ,height:'100%', objectFit:'cover', position:'30%' }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
                <div style={{position:'absolute', width:'100%', height:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}  >
                  <div style={{display:'flex', flexDirection:'column', color:'#fff',  height:'100%', justifyContent:'flex-end'}}id="ourpartner">
                   <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                   <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <img src={brand1} style={{maxWidth:'600px'}}/>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        
                      <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <img src={brand2} style={{maxWidth:'600px'}}/>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        
                      <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <img src={brand3} style={{maxWidth:'600px'}}/>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        
                      <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <img src={brand4} style={{maxWidth:'600px'}}/>
                      </div>
                      </Grid>
                      </Grid>
                  </div>
                  </div> 
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default Partnership
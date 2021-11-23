import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg4.png'
import { Grid, } from '@material-ui/core'
import brand1 from '../../images/brand/brand1.png'
import brand2 from '../../images/brand/brand2.png'
import brand3 from '../../images/brand/brand3.png'
import brand4 from '../../images/brand/brand4.png'
const Partnership = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id='partnership'>
             <div style={{position:'absolute',left:'', width:'100%', height:'200%'}}>
               <img style={{position:'absolute', zIndex:-1 , width:'100%', height:'100vh', objectFit:'cover' }} src={bg}/>
                </div>
               <div style={{position:'absolute', width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'end'}}>
                  <div style={{display:'flex', flexDirection:'column', margin:'10%', color:'#fff', maxWidth:'40%'}}>
                  
                  <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <h1 style={{marginLeft:'5px'}}>Partnership</h1>
                      </Grid>
                    <Grid item xs={12}md={6} style={{ display:'flex', flexDirection:'column', justifyContent:'center'}}>

                    <img style={{maxWidth:'350px', margin:'auto', width:'100%'}}src={brand2}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display:'flex', flexDirection:'column', justifyContent:'flex-start'}}>
                      <img style={{maxWidth:'350px', width:'100%'}}src={brand1}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    
                    <img style={{maxWidth:'350px', margin:'auto', width:'100%'}}src={brand4}/>
                    </Grid>
                    <Grid item xs={12}md={6} style={{ display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    
                    <img style={{maxWidth:'350px', margin:'auto', width:'100%'}}src={brand3}/>
                    </Grid>
                  </Grid>
                  </div>
                 </div>
               </div>
             </ContentDiv>
           </Container>
        </>
    )
}

export default Partnership
import React from 'react'
import { Background, Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg4.png'
import { Grid, } from '@material-ui/core'
import brand1 from '../../images/brand/brand1.png'
import brand2 from '../../images/brand/brand2.png'
import brand3 from '../../images/brand/brand3.png'
import brand4 from '../../images/brand/brand4.png'
const Partnership = ({mobile}
  ) => {
    return (
        <>
           <Container style={{justifyContent:'flex-start'}}>
             <ContentDiv style={{justifyContent:'flex-start'}} id='partnership'>
             <div style={{position:'absolute',left:'', width:'100%', height:'200%'}}>
               <img style={{position:'absolute', zIndex:-1 , width:'100%', height:'100vh', objectFit:'cover' }} src={bg}/>
              </div>
               <div style={{width:'100%', height:'100%',display:'flex', flexDirection:'row', justifyContent:'flex-end', marginTop:'10%'}}>
                  
                  <div style={{width:'50%', color:'white', marginRight:`${mobile?'30px':'20px'}`, marginTop:`${mobile?'40px':''}`}}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                    <h1 style={{marginLeft:'5px'}}>Partnership</h1>
                    <div style={{height:'2px', width:'200px', backgroundColor:`${mobile?'white': '' }`}}></div>
                    </Grid>
                    <Grid item xs={12}md={6} style={{ display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                    <img style={{maxWidth:'350px', margin:'auto', width:'100%'}} src={brand2}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                      <img style={{maxWidth:'350px', margin:'auto', width:'100%'}} src={brand1}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
                    <img style={{maxWidth:'350px', width:'100%'}}src={brand4}/>
                    </Grid>
                    <Grid item xs={12}md={6} style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <img style={{maxWidth:'300px', margin:'', width:'100%'}} src={brand3}/>
                    </Grid>
                  </Grid>
                  </div>
               </div>
             </ContentDiv>
           </Container>
        </>
    )
}

export default Partnership
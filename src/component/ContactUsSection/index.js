import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import { ContactUsDiv } from './ContactUsElement'
// import bg from '../../images/bg/bg5.png'
import { Grid } from '@material-ui/core'
const ContactUsSection = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id='contactus'>
                 <ContactUsDiv style={{width:'100%', height:'auto', minHeight:'100%', display:'flex', flexDirection:'row', justifyContent:'center', color:'#fff'}}>
                   <div style={{display:'flex', flexDirection:'column', textAlign:'center', minWidth:'90%'}}>
                  <h1 style={{margin:'10%'}}>Contact Us</h1>
                  <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <Grid container spacing={2}>
                    <Grid item xs={8} md={6}>
                      <div style={{display:'flex', flexDirection:'column',width:'100%'}}>
                      <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'flex-start'}}>
                        <h2>Drop us a Line</h2>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                          <input placeholder='name' style={{padding:'10px', borderRadius:'30px', marginBottom:'10px', width:'100%'}}/>
                          </div>
                        <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                        <input placeholder='email' style={{padding:'10px', borderRadius:'30px', marginBottom:'10px', width:'100%'}}/>
                        </div>
                    
                        <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center', background:'red'}}>
                        <input placeholder='phone' style={{padding:'10px', borderRadius:'30px', marginBottom:'10px', width:'100%'}}/>
                        <input placeholder='subject' style={{padding:'10px', borderRadius:'30px', marginBottom:'10px', width:'100%'}}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                        <textarea rows='12' placeholder='' style={{padding:'10px', borderRadius:'10px', marginBottom:'10px', width:'100%'}}/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={8}md={6}>
                    <div style={{display:'flex', flexDirection:'column', minWidth:'400px'}}>
                      <div>
                        <h2>Contact Address</h2>
                        
                      </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
                          
                        <p style={{textAlign:'end'}}>RPX Building 7th floor,<br/>Jl. Ciputat Raya no.99  <br/>12310 DKI Jakarta, Indonesia 7th floor (021) 75918007<br/>REPUBLIC OF INDONESIA
<br/>
021 - xxx xxx<br/>
info@trimatraindustries.com
</p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  </div>
                  </div>
                 </ContactUsDiv>                
             </ContentDiv>
           </Container>
        </>
    )
}

export default ContactUsSection
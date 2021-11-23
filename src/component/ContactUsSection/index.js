import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import { ContactUsDiv } from './ContactUsElement'
import Footer from '../Footer'
import bg from '../../images/bg/bg5.png'
import { Grid } from '@material-ui/core'
const ContactUsSection = (
  ) => {
    return (
           <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end' ,minWidth:'100%',maxHeight:'200vh',height:'auto', background:'linear-gradient(270deg, #596B80 27.08%, #0C1A2B 112.98%)'}}>
             <ContentDiv style={{minWidth:'100%', justifyContent:'flex-end'}}>
                 <ContactUsDiv style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', color:'#fff', marginBottom:'100px'}}>
                   <div style={{display:'flex', flexDirection:'column',justifyContent:'flex-end', textAlign:'center', minWidth:'90%', height:'100vh'}}>
                  <h1   id='contactus'>Contact Us</h1>
                  <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <Grid container spacing={2} style={{margin:'auto', width:'100%'}}>
                    <Grid item xs={12}md={6} style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
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
                    
                        <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                        <input placeholder='phone' style={{padding:'10px', borderRadius:'30px', marginBottom:'10px', width:'100%'}}/>
                        <input placeholder='subject' style={{padding:'10px', borderRadius:'30px', marginBottom:'10px', width:'100%'}}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                        <textarea rows='12' placeholder='' style={{padding:'10px', borderRadius:'10px', marginBottom:'10px', width:'100%'}}/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}md={6} style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <div style={{display:'flex', flexDirection:'column', minWidth:'400px'}}>
                      <div>
                        <h2>Contact Address</h2>
                        
                      </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
                        <p style={{textAlign:'start'}}>OFFICE 8 BUILDING 18TH FLOOR<br/> UNIT A, JL. JENDERAL SUDIRMAN <br/>KAV.
52-53, DKI JAKARTA 12190 <br/>REPUBLIC OF INDONESIA
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
                      
                      <Footer style={{marginTop:'20px'}}/>   
             </ContentDiv>    
           </div>
    )
}

export default ContactUsSection
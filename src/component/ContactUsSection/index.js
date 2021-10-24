import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import { ContactUsDiv } from './ContactUsElement'
import bg from '../../images/bg/bg5.png'
import { Grid } from '@material-ui/core'
const ContactUsSection = (
  ) => {
    return (
        <>
           <Container style={{width:'100%', marginTop:'0px', justifyContent:'flex-start', }}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'auto', justifyContent:'flex-start'}} id='contactus'>
                 <ContactUsDiv style={{width:'100%', height:'auto', minHeight:'100%', display:'flex', flexDirection:'row', justifyContent:'center', color:'#fff'}}>
                   <div style={{display:'flex', flexDirection:'column', textAlign:'center', minWidth:'100%'}}>
                  <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <Grid container spacing={2} style={{margin:'auto', paddingLeft:'50px', paddingRight:'50px'}}>
                    <Grid item xs={12} md={6}>
                      <div style={{display:'flex', flexDirection:'column',width:'100%',}}>
                      <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                        <h1>Contact Us</h1>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                          <input placeholder='Your Name' style={{padding:'10px', borderRadius:'30px', marginBottom:'10px', width:'100%'}}/>
                          </div>
                          
                        <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                        <input placeholder='Your email' style={{padding:'10px', borderRadius:'30px', marginBottom:'10px', width:'100%'}}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                        <textarea rows='12' placeholder='' style={{padding:'10px', borderRadius:'10px', marginBottom:'10px', width:'100%'}}/>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}md={6}>
                    <div style={{display:'flex', flexDirection:'column', minWidth:'400px'}}>
                      <div>
                        <h2>Address</h2> 
                      </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
                        <p style={{textAlign:'center', maxWidth:'200px'}}>Lorem ipsum dolor sit amet, et diceret volumus nam, nusquam gubergren quaerendum at vix. At nam audiam ullamcorper, consul laoreet te est.
                        </p>
                        </div>
                        <div>
                        <h2>Contact</h2> 
                      </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
                        <p style={{textAlign:'center', maxWidth:'200px'}}>
                        (021) 777 888
                        info@republikorp.com
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
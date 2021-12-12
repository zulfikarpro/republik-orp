import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import { ContactUsDiv } from './ContactUsElement'
import Footer from '../Footer'
import bg from '../../images/bg/contactusbg.png'
import { Grid } from '@material-ui/core'
import {FaEnvelope, FaMailchimp, FaMapMarkerAlt, FaPhone} from 'react-icons/fa'
const ContactUsSection = (
  ) => {
    return (
        <>
           <Container style={{minWidth:'100%', height:'100vh'}}>
             <ContentDiv style={{minWidth:'100%', margin:'auto', justifyContent:'flex-start'}} id='contactus'>
                 <ContactUsDiv style={{width:'100%', minHeight:'100%', display:'flex', flexDirection:'row', justifyContent:'center', color:'#fff'}}>
                <div style={{position:'absolute',right:'', width:'100%', zIndex:'-1'}}>
                  <img style={{zIndex:-1 , width:'100%', objectFit:'cover' }} src={bg}/>
                </div>
                  
                   <div style={{height:'100%', display:'flex', flexDirection:'column',textAlign:'center', minWidth:'90%'}}>
                  <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                  <Grid container spacing={2} style={{margin:'auto', width:'100%', marginBottom:'10%'}}>
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
                    <div style={{display:'flex', flexDirection:'column', minWidth:'400px', justifyContent:'center'}}>
                      <div style={{background:'red'}}>
                        <h2>Contact Address</h2>
                        <FaMapMarkerAlt size={30} style={{margin:'0'}}/>
                        <p style={{textAlign:'center'}}>Sungai Lekop, Sagulung, <br/>
Batam, Indonesia</p>
                        <FaPhone size={30}/>
                        <p style={{textAlign:'center'}}>
                        (0778) 454543<br/>
                          Mon-Fri, 9am until 5pm
                        </p>
                        <FaEnvelope size={30}/>
                        <p>
                        info@palindomarine.co.id</p>
                      </div>
                        {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
                        
                        </div> */}
                      </div>
                    </Grid>
                  </Grid>
                  </div>
                  
             <Footer/>    
                  </div>
                  
                 </ContactUsDiv> 
             </ContentDiv>    
           </Container>
        </>
    )
}

export default ContactUsSection
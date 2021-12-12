import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import { ContactUsDiv } from './ContactUsElement'
import Footer from '../Footer'
import bg from '../../images/bg/contactusbg.png'
import { Grid } from '@material-ui/core'
import {FaEnvelope, FaMailchimp, FaMapMarkerAlt, FaPhone} from 'react-icons/fa'
import { ContentWrapper } from '../AboutUs/AboutUsElement'
const ContactUsSection = (
  ) => {
    return (
      <div id='contactus'style={{display:'flex', flexDirection:'column', justifyContent:'flex-end',backgroundImage:`url(${bg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',minHeight:'100vh', height:'100%', width:'100%'}}>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'center', color:'white', textAlign:'center', width:'90%', margin:'auto'}}>
      <Grid container spacing={2} style={{margin:'auto',marginTop:'80px', width:'100%'}}>
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
                    <Grid item xs={12}md={6} style={{display:'flex', flexDirection:'row', justifyContent:'center', justifyContent:'flex-end'}}>
                    <div style={{display:'flex', flexDirection:'column', minWidth:'400px', justifyContent:'center'}}>
                      <div>
                        <h2 style={{marginBottom:'10px'}}>Contact Address</h2>
                        <FaMapMarkerAlt size={30} style={{marginBottom:'0px'}}/>
                        <p style={{textAlign:'center', marginTop:'0px', marginBottom:'10px'}}>Sungai Lekop, Sagulung, <br/>
Batam, Indonesia</p>
                        <FaPhone size={30}/>
                        <p style={{textAlign:'center', marginTop:'0px', marginBottom:'10px'}}>
                        (0778) 454543<br/>
                          Mon-Fri, 9am until 5pm
                        </p>
                        <FaEnvelope size={30}/>
                        <p style={{marginTop:'0px'}}>
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
           
    )
}

export default ContactUsSection
import React from 'react'
import { Container, ContentDiv, } from '../Home/HomeElements'
import { ContactUsDiv } from './ContactUsElement'
import bg from '../../images/bg/bgcontactus.png'
import { Grid } from '@material-ui/core'
import Footer from '../Footer'
const ContactUsSection = (
  ) => {
    return (
        <>
           <Container style={{width:'100%',height:'100vh', marginTop:'0px', backgroundImage:`url(${bg})`}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100%'}} >
                 <ContactUsDiv style={{width:'100%', height:'auto', display:'flex', flexDirection:'row', justifyContent:'center', color:'#fff'}}>
                   <div style={{display:'flex', flexDirection:'column', textAlign:'center', minWidth:'100%'}}>
                  <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'10%'}}>
                  <Grid container spacing={2} style={{margin:'auto', paddingLeft:'50px', paddingRight:'50px'}} id='contactus'>
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
                        <p style={{textAlign:'center', maxWidth:'200px'}}>
                          RPX Center Building 9th floor, Jl. Ciputat Raya no. 99, tlp: (021) 75918007  
                        </p>
                        </div>
                        <div>
                        <h2>Contact</h2> 
                      </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
                        <p style={{textAlign:'center', maxWidth:'200px'}}>
                        (021) 75918007
                        info@republikorp.com
                        </p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  </div> 
                  </div>
                 </ContactUsDiv>
             <div style={{display:'flex', flexDirection:'column', zIndex:'4', width:'100%', marginTop:'5%'}}>
                    
                    <Footer style={{marginTop:'auto', background:'black'}}/>
                  </div>  
             </ContentDiv>      
           </Container>
        </>
    )
}

export default ContactUsSection
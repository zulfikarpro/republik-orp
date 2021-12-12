import React from 'react'
import { Container, ContentDiv, Title, P } from '../Home/HomeElements'
import { ContactUsDiv } from './ContactUsElement'
import bg from '../../images/bg/bgcontactus.png'
import { Grid } from '@material-ui/core'
import Footer from '../Footer'
const ContactUsSection = (
  ) => {
    return (
        <>
           <Container style={{height:'100vh', marginTop:'0px', backgroundImage:`url(${bg})`}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'60vh',flexDirection:'flex-end'}} >
                 <ContactUsDiv style={{width:'100%', height:'50vh', display:'flex', flexDirection:'row', justifyContent:'center', color:'#fff'}}>
                   <div style={{display:'flex', flexDirection:'column', textAlign:'center', minWidth:'100%'}}>
                  <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'10%'}}>
                  <Grid container spacing={2} style={{margin:'auto', paddingLeft:'50px', paddingRight:'50px'}}>
                    <Grid item xs={12} md={6}>
                      <div style={{display:'flex', flexDirection:'column',width:'100%',}}>
                      <div style={{display:'flex', flexDirection:'row', width:'100%' , justifyContent:'center'}}>
                        <Title id='contactus'>Contact Us</Title>
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
                    <Grid item xs={12} md={2}>
                    </Grid>
                    <Grid item xs={12}md={4}>
                    <div style={{display:'flex', flexDirection:'column', minWidth:'400px'}}>
                      <div>
                        <h2>Address</h2> 
                      </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
                        <p style={{textAlign:'center', maxWidth:'300px', fontSize:'1.2rem'}}>
                          RPX Center Building 9th floor, <br/>Jl. Ciputat Raya no. 99<br/>12310 DKI Jakarta, Indonesia 
                        </p>
                        </div>
                        <div>
                        <h2>Contact</h2> 
                      </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
                        <p style={{textAlign:'center', maxWidth:'200px', fontSize:'1.2rem'}}>
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
             </ContentDiv>      

             <div style={{marginTop:'6vh'}}>
                    
                    <Footer style={{marginTop:'auto', background:'black'}}/>
                  </div>  
           </Container>
        </>
    )
}

export default ContactUsSection
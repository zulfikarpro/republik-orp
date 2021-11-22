import React from 'react'
import { Grid } from '@material-ui/core'
import {FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'
import {Title, TitleShadow} from '../OurProducts/OurProductElements'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg4space.png'
import brand1 from '../../images/brand/brand1.png'
import brand2 from '../../images/brand/brand2.png'
import brand3 from '../../images/brand/brand3.png'
import brand4 from '../../images/brand/brand4.png'
import { Img, Input } from './PartnershipElements'
import zIndex from '@material-ui/core/styles/zIndex'
const Partnership = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'200vh', justifyContent:'flex-start', }} >
               <img style={{zIndex:-1 ,height:'100%', objectFit:'cover'}} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
                <div style={{position:'absolute', width:'100%', height:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}  >
                  <div style={{display:'flex', flexDirection:'column', color:'#fff',justifyContent:'space-evenly', height:'200%'}}>
                   <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', height:'20%'}}>
                    <Grid container spacing={2} style={{marginTop:'20%'}} id="ourpartner">
                      <Grid item xs={12} md={12}>
                        <div style={{width:'100%', textAlign:'center', zIndex:'-1'}}>
                        <Title>Our Partners<TitleShadow>Our Partners</TitleShadow></Title>
                        </div>
                        </Grid>
                        <Grid item xs={12} md={6} >
                          <div style={{width:'100%', maxWidth:'400px', margin:'auto', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                          <Img src={brand1}/>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          
                        <div style={{width:'100%', maxWidth:'400px', margin:'auto', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                          <Img src={brand2}/>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          
                        <div style={{width:'100%', maxWidth:'400px', margin:'auto', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                          <Img src={brand3}/>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          
                        <div style={{width:'100%', maxWidth:'400px', margin:'auto', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                          <Img src={brand4}/>
                        </div>
                        </Grid>
                      </Grid>
                    </div>

                    <div style={{height:'100%', marginTop:'400px'}}>
                      <Grid container spacing={2} style={{marginTop:'20%'}} id>
                        <Grid item xs={12} md={12} style={{zIndex:'-1'}}>
                          <div style={{width:'100%', textAlign:'center'}}>
                          <Title>Join Our Force<TitleShadow>Join Our Force</TitleShadow></Title>
                          </div>
                          </Grid>
                        <Grid item xs={12} md={6} style={{zIndex:'4',}}>
                          <div style={{height:'100%', maxWidth:'400px', display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingLeft:'12%', paddingRight:'12%', margin:'auto'}}>
                          <h2 style={{paddingLeft:'20px'}}>Drop Us a Line</h2>
                          <Input placeholder='Name' style={{paddingLeft:'10px', borderRadius:'20px', padding:'6px', marginBottom:'10px', width:'auto'}}/>
                          <Input placeholder='Email' style={{paddingLeft:'10px', borderRadius:'20px', padding:'6px', marginBottom:'10px', width:'auto'}}/>
                          <div style={{display:'flex', flexDirection:'row', maxWidth:'480px'}}>
                            <Input placeholder='Phone' style={{paddingLeft:'10px', borderRadius:'20px', padding:'6px', marginBottom:'10px', width:'auto', flex:1 }}/>
                            <Input placeholder='Subject' style={{paddingLeft:'10px', borderRadius:'20px', padding:'6px', marginBottom:'10px', width:'auto', flex:1}}/>
                          </div>
                          <textarea rows='3' placeholder='' style={{padding:'10px', borderRadius:'10px', marginBottom:'10px', width:'auto'}}/>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <div style={{ lineHeight:'1.2rem',height:'100%', maxWidth:'400px', display:'flex', flexDirection:'column', justifyContent:'center', paddingLeft:'14%', paddingRight:'14%', margin:'auto' ,textAlign:'right'}}>
                          <h2 id='contactus'>Contact Address</h2>
                          <p>
                            OFFICE 8 BUILDING 18th FLOOR<br/>
                            UNIT A, JL. JENDERAL SUDIRMAN<br/>
                            KAV.<br/>
                            52-53, DKI JAKARTA 12190<br/>
                            021-xxxxxxx<br/>
                            info@space.com
                          </p>
                          </div>
                        </Grid>
                      </Grid>
                      </div>
                  <div class={'socialmedia'} style={{maxWidth:'100%', paddingRight:'15%', paddingLeft:'15%', display:'flex', flexDirection:'row', justifyContent:'center', margin:'20px' }}>
                  <FaWhatsapp style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        <FaInstagram style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        <FaYoutube style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                  </div>
                  <div style={{maxWidth:'100%', paddingRight:'15%', paddingLeft:'15%', textAlign:'center', fontSize:'1rem'}}>
                  © 2021 Republik Space.  Trademarks and brands are the property of their respective owners.
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
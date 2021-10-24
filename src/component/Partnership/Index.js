import React from 'react'
import { Grid } from '@material-ui/core'
import {FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'
import { Container, ContentDiv, Title } from '../Home/HomeElements'
import bg from '../../images/bg/bgpartner.png'
import brand1 from '../../images/brand/brand1.png'
import brand2 from '../../images/brand/brand2.png'
import brand3 from '../../images/brand/brand3.png'
import brand4 from '../../images/brand/brand4.png'
import { Img, Bg } from './PartnershipElements'
const Partnership = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', height:'80%', justifyContent:'flex-start', }} >
                {/* <div style={{position:'absolute', width:'100%', height:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}  > */}
                  <div style={{display:'flex', flexDirection:'column', color:'#fff',justifyContent:'space-evenly', backgroundImage:`url(${bg})`, minHeight:'400px',}}id="ourpartner">
                    <h1 style={{width:'100%', textAlign:'center'}}>Our Partner</h1>
                   <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', height:'20%'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                          <div style={{width:'100%', maxWidth:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                          <Img src={brand1}/>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={3}>  
                        <div style={{width:'100%', maxWidth:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                          <Img src={brand2}/>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={3}>  
                        <div style={{width:'100%', maxWidth:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                          <Img src={brand3}/>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={3}>  
                        <div style={{width:'100%', maxWidth:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                          <Img src={brand4}/>
                        </div>
                        </Grid>
                      </Grid>
                    </div>

                
                  {/* <div class={'socialmedia'} style={{maxWidth:'100%', paddingRight:'15%', paddingLeft:'15%', display:'flex', flexDirection:'row', justifyContent:'center', margin:'20px' }}>
                  <FaWhatsapp style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        <FaInstagram style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        <FaFacebookF style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        <FaTwitter style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        <FaYoutube style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                  </div> */}
                  {/* <div style={{maxWidth:'100%', paddingRight:'15%', paddingLeft:'15%', textAlign:'center', fontSize:'0.6rem'}}>
                  © 2021 space.  Trademarks and brands are the property of their respective owners.
                  </div> */}
                  </div> 
                 {/* </div> */}
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default Partnership
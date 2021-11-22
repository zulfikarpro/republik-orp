import React from 'react'
import { Grid } from '@material-ui/core'
import {FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'
import { Container, ContentDiv, Title } from '../Home/HomeElements'
import bg from '../../images/bg/bgpartner.png'
import brand1 from '../../images/brand/brand1.png'
import brand2 from '../../images/brand/brand2.png'
import brand3 from '../../images/brand/brand3.png'
import brand4 from '../../images/brand/brand4.png'
import img1 from '../../images/brand/abc.png'
import img2 from '../../images/brand/ahm.png'
import img3 from '../../images/brand/archroma.png'
import img4 from '../../images/brand/jasindo.png'
import img5 from '../../images/brand/mitsubishi.png'
import img6 from '../../images/brand/ot.png'
import img7 from '../../images/brand/pli.png'
import img8 from '../../images/brand/reckitt.png'
import img9 from '../../images/brand/tam.png'
import img10 from '../../images/brand/ultrajaya.png'
import img11 from '../../images/brand/unilever.png'
import img12 from '../../images/brand/yamah.png'
import img13 from '../../images/brand/pindad.png'
import { Img, Bg } from './PartnershipElements'

const GridContent = ({pic}) =>{
  return (
      <div style={{margin:'auto'}}>
          <img src={pic} style={{height:'100%' ,maxHeight:'100px', margin:'auto'}}/>
      </div>
  )
}

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
                        <Grid item xs={12} md={3} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={brand1}/>
                          {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={3} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={brand2}/>
                          {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={3} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={brand3}/>
                          {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={3} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={brand4}/>
                        {/* </div> */}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img1}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img2}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img3}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img4}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img5}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img6}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img7}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img8}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img9}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img10}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img11}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img12}/>
                          </Grid>
                          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img13}/>
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
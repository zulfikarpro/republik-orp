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
const Partnership = ({mobile}
  ) => {
    // if(mobile){
    return (
           <Container style={{overflow:'hidden', maxWidth:'100vw', minHeight:'100%', minWidth:`${mobile?'':'100%'}`, marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'200vh', justifyContent:'flex-start', }} >
               <img style={{zIndex:-1 ,height:`${mobile?'200vh':'100%'}`, objectFit:'cover'}} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
                <div style={{position:'absolute', width:'100vw', height:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}  id="ourpartner">
                  <div style={{display:'flex', flexDirection:'column', color:'#fff',justifyContent:'space-evenly', height:'200%' , padding:'0px'}}>
                    <div style={{width:'100%', textAlign:'center', zIndex:'-1', marginTop:`${mobile? '0px': '15vh' }`, marginBottom:`${mobile? '0px': '10vh' }`}}>
                      <Title style={{maxWidth:'100vw', marginBottom:'0px'}}>Our Partners</Title>
                    </div>
                    <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', height:'20%', marginTop:'0px'}} >
                      <Grid container spacing={0} style={{maxWidth:'90vw'}}>
                        {/* <Grid item xs={12} md={12} style={{}}>
                          </Grid> */}
                        <Grid item xs={12} md={12}>
                            <div style={{width:'100%', maxWidth:`${mobile?'':'500px'}`, margin:'auto', marginLeft:`${mobile?'-10px':'auto'}`, display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <Img src={brand1}/>
                            </div>
                          </Grid>
                        <Grid item xs={12} md={12}>
                          <div style={{width:'100%', maxWidth:`${mobile?'':'500px'}`, margin:'auto', marginTop:`${mobile?'20px':''}`, marginLeft:'auto', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <Img src={brand2}/>
                            </div>
                          </Grid>
                        <Grid item xs={12} md={12}>
                          <div style={{width:'100%', maxWidth:`${mobile?'':'500px'}`, margin:'auto', marginTop:`${mobile?'20px':''}`, marginLeft:'auto', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <Img src={brand3}/>
                            </div>
                          </Grid>
                        <Grid item xs={12} md={12}>
                          <div style={{width:'100%', maxWidth:`${mobile?'':'500px'}`, margin:'auto', marginTop:`${mobile?'30px':''}`, marginLeft:'auto', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                              <Img src={brand4}/>
                          </div>
                        </Grid>
                      </Grid>
                    </div>

                    <div style={{height:`${mobile?'100vh' : '85vh'}`, width:`${mobile?'100vw':''}`}}>
                      <Grid container spacing={2} style={{marginTop:'25vh', maxWidth:'100vw', marginRight:'auto', marginLeft:'auto'}}  id='contactus'>
                        <Grid item xs={12} md={12} style={{zIndex:'-1'}}>
                          <div style={{width:'100%', textAlign:'center'}}>
                            <Title style={{marginBottom:`${mobile? '0px': ''}`}}>Join Our Force</Title>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6} style={{zIndex:'4',maxWidth:'100vw', margin:'auto'}}>
                          <div style={{height:'100%', maxWidth:`${mobile? '100vw':'400px'}`, display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingLeft:'12%', paddingRight:'12%', margin:'auto'}}>
                            <h2 style={{paddingLeft:`${mobile? '0px':'20px'}`, textAlign:`${mobile?'center':''}`}}>Drop Us a Line</h2>
                            <Input placeholder='Name' style={{paddingLeft:'10px', borderRadius:'20px', padding:'6px', marginBottom:'10px', width:'auto'}}/>
                            <Input placeholder='Email' style={{paddingLeft:'10px', borderRadius:'20px', padding:'6px', marginBottom:'10px', width:'auto'}}/>
                            <div style={{display:'flex', flexDirection:'row', maxWidth:`${mobile? '80vw':'480px'}`, justifyContent:'space-between'}}>
                              <Input placeholder='Phone' style={{paddingLeft:'10px', borderRadius:'20px', padding:'6px', marginBottom:'10px',  flex:1, width:'50%' }}/>
                              <Input placeholder='Subject' style={{paddingLeft:'10px', borderRadius:'20px', padding:'6px', marginBottom:'10px', flex:1, width:'50%' }}/>
                            </div>
                            <textarea rows='5' placeholder='' style={{padding:'10px', borderRadius:'10px', marginBottom:'10px', width:'auto'}}/>
                          </div>
                        </Grid>
                        <Grid item xs={12} md={6} style={{maxWidth:'90vw', margin:'auto'}}>
                          <div style={{marginTop:`${mobile?'80px':''}`,marginBottom:`${mobile?'0px':''}`, lineHeight:'1.2rem',height:'100%', maxWidth:`${mobile?'100vw':'400px'}`, display:'flex', flexDirection:'column', justifyContent:'center', paddingLeft:'14%', paddingRight:'14%', margin:'auto', marginLeft:'auto', marginRight:'auto', textAlign:`${mobile? 'center': 'right'}`}}>
                            <h2>Contact Address</h2>
                            <p>
                            RPX Building 7th floor,<br/>
                            Jl. Ciputat Raya no.99<br/>
                            12310 DKI Jakarta, Indonesia<br/>
                            (021) 75918007<br/>
                              info@space.com
                            </p>
                          </div>
                        </Grid>
                      </Grid>
                      <MobileFooter mobile={mobile}/>
                    </div>

                      {/* <TestingComponent mobile={mobile}/> */}
                  </div> 
                </div>
             </ContentDiv>
           </Container>
    )
  // }else
}

const MobileFooter = ({mobile}) =>{
  if(mobile){
    return(
      <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', width:'100vw'}}>
        <div class={'socialmedia'} style={{maxWidth:'100%', paddingRight:'15%', paddingLeft:'15%', display:'flex', flexDirection:'row', justifyContent:'center', margin:'20px' }}>
          <FaWhatsapp style={{width:'auto', height:'30px',marginRight:'8px'}}/>
          <FaInstagram style={{width:'auto', height:'30px',marginRight:'8px'}}/>
          <FaYoutube style={{width:'auto', height:'30px',marginRight:'8px'}}/>
        </div>

        <div style={{maxWidth:'100%', paddingRight:'15%', paddingLeft:'15%', textAlign:'center', fontSize:'.8rem'}}>
          © 2021 Republik Space.  <br/> Trademarks and brands are the property of their respective owners.
        </div>
      </div>
    )
  }else{
    return (
      <></>
    )
  }
}
const TestingComponent = ({mobile}) =>{
    if(mobile){
      return(
        <></>
      )
    }else{

  return(
  <div style={{height:'100%'}}>
                        <div class={'socialmedia'} style={{maxWidth:'100%', paddingRight:'15%', paddingLeft:'15%', display:'flex', flexDirection:'row', justifyContent:'center', margin:'20px' }}>
                          <FaWhatsapp style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                          <FaInstagram style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                          <FaYoutube style={{width:'auto', height:'30px',marginRight:'8px'}}/>
                        </div>
                        <div style={{maxWidth:'100%', paddingRight:'15%', paddingLeft:'15%', textAlign:'center', fontSize:'1rem'}}>
                        © 2021 Republik Space.  Trademarks and brands are the property of their respective owners.
                        </div>
                      </div>
                      )

    }
}

export default Partnership

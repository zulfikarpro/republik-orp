import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bgourproducts.png'
import Carousel from 'react-material-ui-carousel'
import produk1 from '../../images/products/produk1.png'
import produk2 from '../../images/products/produk2.png'
import { Grid } from '@material-ui/core'
const OurProducts = (
  ) => {
    return (
        <>
           <Container style={{maxHeight:'200vh',minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}} id="ourproduct">
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start', }}  >
               <img style={{zIndex:-1 ,height:'100%', objectFit:'cover', objectPosition:'20%', opacity:0 }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
                 <div style={{position:'absolute', width:'100%', height:'100%', display:'flex', flexDirection:'row', justifyContent:'center', backgroundImage:`url(${bg})`}}>
                   <div style={{display:'flex', flexDirection:'column', color:'#fff',  width:'100%', justifyContent:'center', paddingBottom:'10%'}}>
                   {/* <h1 style={{color:'transparent',fontSize: '120px', textShadow: '100px 200px 0px rgba(255, 255, 255, 0.2) '}}>Our Products</h1> */}
                     <h1 style={{width:'100%', paddingLeft:'10%'}}>Our Products</h1>
                     
                     <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <div style={{height:'80%', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                          <div style={{display:'flex', width:'100%', flexDirection:'row', justifyContent:'center'}}>
                             <div style={{display:'flex', flexDirection:'column', height:'60%', justifyContent:'flex-end'}}>
                              <h1 style={{lineHeight:'.8'}}>Telecomunication</h1>
                              <h1 style={{lineHeight:'.8', color:'#5B5B5B'}}>Wireless Telecomunication</h1>
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%'}}>
                          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'100%'}}>
                        <Carousel
                        style={{padding:'10%'}}
                        indicatorContainerProps={{
                          style: {
                              marginTop: '-40px', // 5
                              textAlign: 'center' // 4
                          }
                          }}
                        >
                          <img src={produk1} style={{maxWidth:'100%'}}></img>
                          <img src={produk2} style={{maxWidth:'100%'}}></img>
                        </Carousel>
                          </div>
                        </div>
                        </Grid> 
                      </Grid>
                      {/* <div style={{width:'100%', height:'20%'}}></div> */}
                    </div>
                  </div>
             </ContentDiv>
             
           </Container>
        </>
    )
}

export default OurProducts
import React from 'react'
import { Grid } from '@material-ui/core'
// import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bgourproducts.png'
import Carousel from 'react-material-ui-carousel'
import produk1 from '../../images/products/produk1.png'
import produk2 from '../../images/products/produk2.png'
import { DivBackground, Container, ContentDiv, Img, Title, TitleShadow } from './OurProductElements'
const OurProducts = (
  ) => {
    return (
        <>
           {/* <Container style={{maxHeight:'200vh',minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}} id="ourproduct">
             <ContentDiv style={{minHeight:'100vh', maxHeight:'200vh', justifyContent:'flex-start', }}  > */}
               <Container id="ourproduct">
                 <ContentDiv>
               {/* <img style={{zIndex:-1 ,height:'100vh', objectFit:'cover', objectPosition:'20%', opacity:0 }} src={bg}/> */}
               {/* <div style={{height:'100%'}}> */}
                 <DivBackground style={{ backgroundImage:`url(${bg})`}}>
                   <div style={{display:'flex', flexDirection:'column', color:'#fff',  width:'100%', height:'100%', justifyContent:'center'}}>
                   {/* <h1 style={{fontSize: '5rem', textShadow: '100px 200px 0px rgba(255, 255, 255, 0.2) '}}>Our Products</h1> */}
                     {/* <Title style={{width:'100%', textAlign:'center', textShadow: '0px -100px 0px rgba(255, 255, 255, 0.2) '}}>Our Products</Title> */}
                      <Title>Our Products<TitleShadow>Our Products</TitleShadow></Title>
                      <div style={{height:'100px'}}/>
                     <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <div style={{minHeight:'30vh' ,height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
                          <div style={{display:'flex', width:'100%', flexDirection:'row', justifyContent:'center'}}>
                             <div style={{display:'flex', flexDirection:'column', height:'60%', justifyContent:'flex-end'}}>
                              <h1 style={{lineHeight:'.8'}}>Telecomunication</h1>
                              <h1 style={{lineHeight:'.8', color:'#5B5B5B'}}>Wireless Telecomunication</h1>
                            </div>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6}>
                      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'100%', width:'100%',}}>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', width:'100%', alignItems:'center'}}>
                        <Carousel
                        style={{padding:'10%', justifySelf:'center'}}
                        indicatorContainerProps={{
                          style: {
                              marginTop: '-40px', // 5
                              textAlign: 'center' // 4
                          }
                          }}
                        >
                          <Img src={produk1}></Img>
                          <Img src={produk2}></Img>
                        </Carousel>
                          </div>
                        </div>
                        </Grid> 
                      </Grid>
                      <div style={{width:'100%', height:'20%'}}></div>
                    </div>
                  </DivBackground>
             </ContentDiv>
             
           </Container>
        </>
    )
}

export default OurProducts
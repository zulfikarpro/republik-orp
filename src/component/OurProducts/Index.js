import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg3space.png'
import Carousel from 'react-material-ui-carousel'
import produk1 from '../../images/products/produk1.png'
import produk2 from '../../images/products/produk2.png'
import { Grid } from '@material-ui/core'
const OurProducts = (
  ) => {
    return (
        <>
           <Container style={{maxHeight:'200vh',minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'200vh', justifyContent:'flex-start', }} id="ourproduct">
               <img style={{zIndex:-1 ,height:'100%', objectFit:'cover', position:'30%' }} src={bg}/>
               {/* <div style={{height:'100%'}}> */}
                 <div style={{position:'absolute', width:'100%', height:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                   <div style={{display:'flex', flexDirection:'column', color:'#fff',  height:'100%', justifyContent:'center'}}>
                     {/* <h1>Our Products</h1> */}
                     <br/>
                     <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <div style={{display:'flex', flexDirection:'column'}}>

                        </div>
                      </Grid>
                    <Grid item xs={12} md={6}>
                      <Carousel
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
                    </Grid>
                    </Grid>
                  </div>
                 </div>
               {/* </div> */}
               <div style={{minWidth:'100%', minHeight:'100%',height:'200vh', justifyContent:'flex-start', background:'green'}} id="ourtarget">
                <h1>Vision</h1>
                <p>crafting Indonesia's national defense through meticulous and advantageous partnerships to create an effective aerospace ecosystem</p>
                <h1>Mision</h1>
                <p>To become the leading aerospace industry capable of supporting local industries in achieving further integration </p>
             </div>
             </ContentDiv>
             
           </Container>
        </>
    )
}

export default OurProducts
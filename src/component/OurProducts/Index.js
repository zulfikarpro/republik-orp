import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg5.png'
import Carousel from 'react-material-ui-carousel'
import produk1 from '../../images/products/produk 1.png'
import produk2 from '../../images/products/produk 2.png'
import produk3 from '../../images/products/produk 3.png'
import produk4 from '../../images/products/produk 4.png'
import produk5 from '../../images/products/produk 5.png'
import produk6 from '../../images/products/produk 6.png'
import { Grid } from '@material-ui/core'

const CarouselItem = ({pic,pic2,pic3}) => {
  return (
    <div style={{width:'100vw', height:'75vh'}}>
    <Grid container spacing={2}>
      <Grid item xs={12}md={4} style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <img src={pic} style={{maxWidth:'100%'}}/>
      </Grid>
      <Grid item xs={12}md={4} style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <img src={pic2} style={{maxWidth:'100%', objectFit:'cover'}}/>
      </Grid>
      <Grid item xs={12}md={4} style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <img src={pic3} style={{maxWidth:'100%', objectFit:'cover'}}/>
      </Grid>
      </Grid>
    </div>
  )
}

const OurProducts = (
  ) => {
    return (
        <>
           <Container style={{minHeight:'100%', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start'}}>
             <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start'}} id="ourproducts">
             <div style={{position:'absolute',left:'', width:'100%', height:'200%'}}>
               <img style={{position:'absolute', zIndex:-1 , width:'100%', height:'100vh', objectFit:'cover' }} src={bg}/>
              </div>
               {/* <div style={{height:'100%'}}> */}
              <div style={{position:'absolute', width:'100%', height:'100%', display:'flex', flexDirection:'row', justifyContent:'center',}}>
                <div style={{display:'flex', flexDirection:'column', color:'#fff', textAlign:'center'}}>
                  <h1 style={{marginTop:'90px'}}>Our Products</h1>
                  <div stlye={{background:'red', width:'100%', height:'100%', background:'red'}}>
                  <Carousel 
                  indicatorContainerProps={{
                    style: {
                        marginTop: '-40px', // 5
                        textAlign: 'center' // 4
                    }
                    }}
                  >
                  <CarouselItem pic={produk1} pic2={produk2} pic3={produk3}/>
                  <CarouselItem pic={produk4} pic2={produk5} pic3={produk6}/>
                  
                  {/* <img src={produk2} style={{maxWidth:'100%'}}></img>
                  <img src={produk3} style={{maxWidth:'100%'}}></img> */}
                  </Carousel>
                  </div>
                  </div>
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default OurProducts
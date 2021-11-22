import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bg5.png'
import Carousel from 'react-material-ui-carousel'
import produk1 from '../../images/products/produk 1.png'
import produk2 from '../../images/products/produk 2.png'
import produk3 from '../../images/products/produk 3.png'
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
                 <div style={{position:'absolute', width:'100%', height:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
                   <div style={{display:'flex', flexDirection:'column', color:'#fff', textAlign:'center'}}>
                     <h1>Our Products</h1>
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
                  <img src={produk3} style={{maxWidth:'100%'}}></img>
                  </Carousel>
                  </div>
                 </div>
               {/* </div> */}
             </ContentDiv>
           </Container>
        </>
    )
}

export default OurProducts
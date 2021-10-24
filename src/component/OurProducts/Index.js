import React from 'react'
import { Grid } from '@material-ui/core'
// import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bgproduct.png'
import Carousel from 'react-material-ui-carousel'
import produk1 from '../../images/products/produk1.png'
import produk2 from '../../images/products/produk2.png'
import { DivBackground, Container, ContentDiv, Img, Title, TitleShadow } from './OurProductElements'
import { P } from '../Home/HomeElements'
const OurProducts = (
  ) => {
    return (
               <Container style={{height:'auto', paddingTop:'100px', paddingBotom:'100px'}}>
                 <ContentDiv style={{backgroundImage:`url(${bg})`, height:'80vh', paddingTop:'50px',objectFit:'contain', backgroundRepeat:'no-repeat'}}>
                 {/* <DivBackground style={{ backgroundImage:`url(${bg})`}}> */}
                   <div style={{display:'flex', flexDirection:'column', color:'#fff',  width:'100%', height:'100%', justifyContent:'center'}}>
                     <Grid container spacing={2}>
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
                        <Grid item xs={12} md={6}>
                        <div style={{width:'100%', height:'100%', style:'flex',display:'flex', flexDirection:'column', justifyContent:'center', }}>
                          <div style={{width:'100%', justifyContent:'center', display:'flex', flexDirection:'row'}}>
                          <h1>Product</h1>
                          </div>
                          <div style={{width:'100%', justifyContent:'center', display:'flex', flexDirection:'row'}}>
                          <p style={{maxWidth:'400px', fontSize:'.8rem'}}>Lorem ipsum dolor sit amet, et diceret volumus nam, nusquam gubergren quaerendum at vix. At nam audiam ullamcorper, consul laoreet te est. Ut vidisse dolorem mel, possim qualisque pertinacia mel ei, option qualisque usu an. Ne sint paulo congue usu, ne cibo salutandi constituam his, ne menandri hendrerit abhorreant eos. Primis quaerendum definitionem te vix, iuvaret nostrum voluptaria sea cu.</p>
                          </div>
                        </div>
                      </Grid>
                      </Grid>
                      <div style={{width:'100%', height:'20%'}}></div>
                    </div>
                  {/* </DivBackground> */}
             </ContentDiv>
             
           </Container>
    )
}

export default OurProducts
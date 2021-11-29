import React from 'react'
import { Grid } from '@material-ui/core'
// import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/bgproduct.png'
import logoaero from '../../images/products/logoaero.png'
import logospace from '../../images/products/logospace.png'
import logotrimatra from '../../images/products/logotrimatra.png'
import logopalindo from '../../images/products/logopalindo.png'
import logoexpres from '../../images/products/logoexpres.png'
import logoarmamen from '../../images/products/logoarmamen.png'
import logodefensindo from '../../images/products/logodefensindo.png'
// import Carousel from 'react-material-ui-carousel'
// import produk1 from '../../images/products/produk1.png'
// import produk2 from '../../images/products/produk2.png'
import { DivBackground, Container, ContentDiv, Img, Title, TitleShadow } from './OurProductElements'
import { P } from '../Home/HomeElements'
import { Link } from 'react-router-dom'

const test = (port) =>{
  alert(JSON.stringify(port))
}
const GridContent = ({pic}) =>{
  return (
      <div style={{margin:'auto'}}>
          <img src={pic} style={{width:'100%' ,maxWidth:'400px', margin:'auto'}}/>
      </div>
  )
}

const OurProducts = (
  ) => {
    return (
               <Container style={{height:'100vh', }} id='ourproduct'>
                 <ContentDiv style={{backgroundImage:`url(${bg})`, height:'100vh', paddingTop:'50px',objectFit:'contain', backgroundRepeat:'no-repeat'}}>
                 {/* <DivBackground style={{ backgroundImage:`url(${bg})`}}> */}
                   <div style={{display:'flex', flexDirection:'column', color:'#fff',  width:'100%', height:'100%', justifyContent:'center', background:'rgba(0,0,0,0.4)'}}>
                     <Grid container spacing={5}>
                       <Grid item xs={12} md={12}>
                       <h1 style={{textAlign:'center'}}>Products</h1>
                       </Grid>
                       <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                         <a href='http://170.187.226.245/' style={{margin:'auto'}}><GridContent pic={logoaero}/></a>
                       </Grid>
                       <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <a href='http://170.187.226.245:81/' style={{margin:'auto'}}><GridContent pic={logospace}/></a>
                       </Grid>
                       <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <a href='http://170.187.226.245/' style={{margin:'auto'}}><GridContent pic={logopalindo}/></a>
                       </Grid>
                       <Grid item xs={6} md={3} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <a href='http://170.187.226.245/' style={{margin:'auto'}}><GridContent pic={logoexpres}/></a>
                       </Grid>
                       <Grid item xs={6} md={3} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <a href='http://170.187.226.245:31/' style={{margin:'auto'}}><GridContent pic={logotrimatra}/></a>
                       </Grid>
                       <Grid item xs={6} md={3} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <GridContent pic={logoarmamen}/>
                       </Grid>
                       <Grid item xs={6} md={3} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <GridContent pic={logodefensindo}/>
                       </Grid>
                      {/* <Grid item xs={12} md={4}>
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
                        <Grid item xs={12} md={4}>
                        <div style={{width:'100%', height:'100%', style:'flex',display:'flex', flexDirection:'column', justifyContent:'center', }}>
                          <div style={{width:'100%', justifyContent:'center', display:'flex', flexDirection:'row'}}>
                          <h1>Product</h1>
                          </div>
                          <div style={{width:'100%', justifyContent:'center', display:'flex', flexDirection:'row'}}>
                          <p style={{maxWidth:'400px', fontSize:'.8rem', textAlign:'justify'}}>Lorem ipsum dolor sit amet, et diceret volumus nam, nusquam gubergren quaerendum at vix. At nam audiam ullamcorper, consul laoreet te est. Ut vidisse dolorem mel, possim qualisque pertinacia mel ei, option qualisque usu an. Ne sint paulo congue usu, ne cibo salutandi constituam his, ne menandri hendrerit abhorreant eos. Primis quaerendum definitionem te vix, iuvaret nostrum voluptaria sea cu.</p>
                          </div>
                        </div>
                      </Grid> */}
                      </Grid>
                      <div style={{width:'100%', height:'20%'}}></div>
                    </div>
                  {/* </DivBackground> */}
             </ContentDiv>
             
           </Container>
    )
}

export default OurProducts
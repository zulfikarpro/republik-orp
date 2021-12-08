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
import logodefensindo from '../../images/products/logodefenseindo.png'
// import Carousel from 'react-material-ui-carousel'
// import produk1 from '../../images/products/produk1.png'
// import produk2 from '../../images/products/produk2.png'
import { Container, ContentDiv, } from './OurProductElements'

const test = (port) =>{
  alert(JSON.stringify(port))
}
const GridContent = ({pic}) =>{
  return (
      <div style={{margin:'auto'}}>
          <img src={pic} style={{width:'100%' ,maxWidth:'400px', margin:'auto'}}/>
          <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <div style={{margin:'auto', marginTop:'0px', background:'white',padding:'2px', paddingLeft:'6px', paddingRight:'6px', borderRadius:'8px', color:'grey', fontSize:'.6rem'}}>Visit Now</div>
          </div>
      </div>
  )
}

const OurProducts = (
  ) => {
    return (
               <Container style={{height:'100vh', width:'100%' }} id='ourproduct'>
                 <ContentDiv style={{backgroundImage:`url(${bg})`, height:'100vh', paddingTop:'50px',objectFit:'contain', backgroundRepeat:'no-repeat'}}>
                 {/* <DivBackground style={{ backgroundImage:`url(${bg})`}}> */}
                   <div style={{display:'flex', flexDirection:'column', color:'#fff',  width:'100%', height:'100%', justifyContent:'center', background:'rgba(0,0,0,0.4)'}}>
                     <Grid container spacing={5} style={{maxWidth:'90%', margin:'auto'}}>
                       <Grid item xs={12} md={12}>
                       <h1 style={{textAlign:'center'}}>Our Companies</h1>
                       </Grid>
                       <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                         <a href='http://139.162.57.222:51/' style={{margin:'auto', textDecoration:'none'}} target="_blank"><GridContent pic={logoaero}/></a>
                       </Grid>
                       <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <a href='http://170.187.226.245:81/' style={{margin:'auto', textDecoration:'none'}} target="_blank"><GridContent pic={logospace}/></a>
                       </Grid>
                       <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <a href='http://139.162.57.222:33/' style={{margin:'auto', textDecoration:'none'}} target="_blank"><GridContent pic={logopalindo}/></a>
                       </Grid>
                       <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <a href='http://170.187.226.245/' style={{margin:'auto', textDecoration:'none'}} target="_blank"><GridContent pic={logoexpres}/></a>
                       </Grid>
                       <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <GridContent pic={logoarmamen}/>
                       </Grid>
                       <Grid item xs={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                        <GridContent pic={logodefensindo}/>
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
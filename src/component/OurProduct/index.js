import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/productbg.png'
import { H1, H2 } from '../AboutUs/AboutUsElement'
import content1 from '../../images/Group70.png'
import content2 from '../../images/Group71.png'
import content3 from '../../images/Group72.png'
import { Grid } from '@material-ui/core'


const Content = () => {
    return (
        <Grid container>
            <Grid item xs={12} md={4}>
                <img src={content1} style={{height:'360px'}}></img>
            </Grid>
            
            <Grid item xs={12} md={4}>
            <img src={content2} style={{height:'360px'}}></img>
            </Grid>
            <Grid item xs={12} md={4}>
            <img src={content3} style={{height:'360px'}}></img>
            </Grid>
        </Grid>
    )
}

const ProductsPage = () => {
    return (
        <Container style={{background: 'linear-gradient(79.99deg, #0A0F3E 22.79%, #362E66 101.06%)', color:'white', height:'98vh', paddingBottom:'80px', width:'100%', marginRight:'0px', overflowX:'hidden'}} id='product'>
            <ContentDiv style={{width:'100%'}}>
                <H1 style={{textAlign:'center', marginTop:'80px', marginBottom:'10px'}}>Our Products</H1>
                <div style={{height:'2px', width:'30%', background:'white', marginLeft:'auto', marginRight:'auto'}}/>
                {/* <br/> */}
                {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:'auto', width:'80%'}}>
                    <div style={{width:'300px'}}><H2 style={{textAlign:'center'}}>Air Cargo</H2></div>
                    <div style={{width:'300px'}}><H2 style={{textAlign:'center'}}>Airplanes repairs &amp; modernization</H2></div>
                    <div style={{width:'300px'}}><H2 style={{textAlign:'center'}}>Aviation industry &amp; components</H2></div>
                </div> */}
                
                <Grid container>
                    <Grid item xs={12} md={4}>
                    <div style={{width:'100%'}}><H2 style={{textAlign:'center'}}>Air Cargo</H2></div>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                    <div style={{width:'100%'}}><H2 style={{textAlign:'center'}}>Airplanes repairs &amp; modernization</H2></div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div style={{width:'100%'}}><H2 style={{textAlign:'center'}}>Aviation industry &amp; components</H2></div>
                    </Grid>
                </Grid>
                <br/>
                <Content>

                </Content>
            </ContentDiv>
        </Container>

    )
}

export default ProductsPage

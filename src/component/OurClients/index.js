import React from 'react'
import { Grid } from '@material-ui/core'
import { Container, RowWrapper } from '../HowWeWork/HowWeWorkElements'
// import { TitleShadow } from '../Visimisi/VisimisiElements'
import {Title, ContentWrapper, TitleShadow, ImageList } from './OurClientsElements'
import img1 from '../../images/brand/abc.png'
import img2 from '../../images/brand/ahm.png'
import img3 from '../../images/brand/archroma.png'
import img4 from '../../images/brand/jasindo.png'
import img5 from '../../images/brand/mitsubishi.png'
import img6 from '../../images/brand/ot.png'
import img7 from '../../images/brand/pli.png'
import img8 from '../../images/brand/reckitt.png'
import img9 from '../../images/brand/tam.png'
import img10 from '../../images/brand/ultrajaya.png'
import img11 from '../../images/brand/unilever.png'
import img12 from '../../images/brand/yamah.png'
import img13 from '../../images/brand/pindad.png'

const GridContent = ({pic}) =>{
    return (
        <div style={{margin:'auto'}}>
            <img src={pic} style={{height:'100%' ,maxHeight:'100px', margin:'auto'}}/>
        </div>
    )
}
const OurClients = () => {
    return (
        <>
        <Container style={{background:'white', paddingTop:'100px', minHeight:'100vh'}}>
        <ContentWrapper id={'ourclients'}>
                <div style={{width:'90%', display:'flex',flexDirection:'row', margin:'auto', marginBottom:'0px'}}>
                    {/* <Title style={{color:'#707070'}}>Our Clients</Title> */}
                </div>
            <RowWrapper >
                <Grid container spacing={2} style={{margin:'auto', marginBottom:'10%', marginTop:'5%', maxWidth:'90%'}} id="ourpartner">
                        <Grid item xs={12}>
                        <TitleShadow style={{color:'#707070', marginBottom:'60px'}}>Our Clients</TitleShadow> 
                            </Grid>
                <Grid item xs={12} sm={6} md={4}style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img9}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4}style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img12}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={4}style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img2}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={3} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img1}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img10}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img11}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={2} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img5}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={3}style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img8}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={3}style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img3}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={2}style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img13}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={2}style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img6}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={2}style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img7}/>
                          </Grid>
                        <Grid item xs={12} sm={6} md={3}style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          <GridContent pic={img4}/>
                          </Grid>
                </Grid>
            </RowWrapper>
            </ContentWrapper>
        </Container>
            
        </>
    )
}

export default OurClients

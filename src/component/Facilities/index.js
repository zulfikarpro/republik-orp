import React from 'react'
import { Grid } from '@material-ui/core'
import { Container, ContentDiv } from '../Home/HomeElements'
import {Title, P} from './FacilitiesElements'
import bg from '../../images/bg/facilitiesbg.png'
import img1 from '../../images/facilities/facilities1.png'
import img2 from '../../images/facilities/facilities2.png'
import img3 from '../../images/facilities/facilities3.png'
import img4 from '../../images/facilities/facilities4.png'
import img5 from '../../images/facilities/facilities5.png'
import img6 from '../../images/facilities/facilities6.png'
import img7 from '../../images/facilities/facilities7.png'
import img8 from '../../images/facilities/facilities8.png'

const GridContent = ({pic}) =>{
    return (
        <div style={{margin:'auto'}}>
            <img src={pic} style={{width:'100%', margin:'auto'}}/>
        </div>
    )
  }

const FacilitiesPage = () => {
    return (
        
        <Container style={{minHeight:'200vh', minWidth:'100%', marginTop:'0px', justifyContent:'flex-start', background:`url(${bg})`}}>
        <ContentDiv style={{minWidth:'100%', minHeight:'200vh',height:'auto', justifyContent:'flex-start'}} id='facilities'>
            {/* <div style={{height:'80px', }}/> */}
            <Title>Facilities</Title>
                  <div style={{width:'55%', height:'2px', background:'black'}}/>
            <P>With a land area of more than 7 hectares and supported by sophisticated production facilities, we are able to produce high quality vessels with different range of sizes. We have delivered various kind of vessels ranging from Patrol boat, Rescue boat, Combat boat, Ferry boat, RoRo boat and Leisure boat.  We are ready to meet every details and demand of our customers, in order to achieve the best result and our customers satisfaction.</P>
            <Grid container spacing={2} style={{width:'100%', margin:'auto'}}>
                        <Grid item xs={12} md={6} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={img1}/>
                          {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={6} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={img5}/>
                          {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={6} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={img2}/>
                          {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={6} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={img7}/>
                        {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={6} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={img3}/>
                          {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={6} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={img6}/>
                        {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={6} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={img4}/>
                          {/* </div> */}
                        </Grid>
                        <Grid item xs={12} md={6} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                          {/* <div style={{height: '250px', display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
                          <GridContent pic={img8}/>
                        {/* </div> */}
                        </Grid>
            </Grid>
        
        </ContentDiv>
        </Container>
    )
}

export default FacilitiesPage

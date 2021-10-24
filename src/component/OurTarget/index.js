import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Container, ContentDiv, Title } from '../Home/HomeElements'
import { DivBlue, DivMenu } from './OurTargetElements'
import content1 from '../../images/content/content1.png'
import content2 from '../../images/content/content2.png'
import content3 from '../../images/content/content3.png'

const OurTarget = () => {
    return (
        <>
          <Container style={{maxHeight:'100vh',minHeight:'100vh', width:'100%', marginTop:'60px'}} id='ourtarget'>
              <ContentDiv style={{minWidth:'100%', minHeight:'100%',height:'100vh', justifyContent:'flex-start' , color:'#7D4545'}}>
                  <div style={{width:'100%',display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <h1>Lorem Ipsum</h1>
                </div>
                <div style={{width:'100%',display:'flex', flexDirection:'row', justifyContent:'center',}}>
                    <DivMenu style={{display:'flex', flexDirection:'row', justifyContent:'space-around',textAlign:'center'}}>
                    <h3>Lorem Ipsum</h3>
                    <h3>Lorem Ipsum</h3>
                    <h3>Lorem Ipsum</h3>
                    <h3>Lorem Ipsum</h3>
                    </DivMenu>
                </div>
                <br/>
                <br/>
                <div style={{width:'100%',display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <Carousel
                        style={{padding:'10%', justifySelf:'center'}}
                        indicatorContainerProps={{
                          style: {
                              marginTop: '-40px', // 5
                              textAlign: 'center' // 4
                          }
                          }}
                        >
                            <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center'}}>
                          <img src={content1}/>
                          <img src={content2}/>
                          <img src={content3}/>
                          </div>
                          <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center'}}>
                          <img src={content1}/>
                          <img src={content2}/>
                          <img src={content3}/>
                          </div>
                          <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center'}}>
                          <img src={content1}/>
                          <img src={content2}/>
                          <img src={content3}/>
                          </div>
                </Carousel>
                </div>
              </ContentDiv>
              </Container>  
        </>
    )
}

export default OurTarget

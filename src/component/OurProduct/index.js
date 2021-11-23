import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/productbg.png'
import { H1, H2 } from '../AboutUs/AboutUsElement'
import content1 from '../../images/content.png'

const Content = () => {
    return (
        <div style={{margin:'auto'}}>
            <img src={content1}></img>
            </div>
    )
}

const ProductsPage = () => {
    return (
        <Container style={{background: `url(${bg})`, color:'white'}} id='product'>
            <ContentDiv style={{width:'100%'}}>
                <H1 style={{textAlign:'center'}}>Our Product</H1>
                <div style={{width:'200px', height:'1px', margin:'auto', background:'white'}}/>
                <br/>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:'auto', width:'80%'}}>
                    <div style={{width:'300px'}}><H2 style={{textAlign:'center'}}>Air Cargo</H2></div>
                    <div style={{width:'300px'}}><H2 style={{textAlign:'center'}}>Airplanes repairs &amp; modernization</H2></div>
                    <div style={{width:'300px'}}><H2 style={{textAlign:'center'}}>Aviation industry &amp; components</H2></div>
                </div>
                <br/>
                <Content>

                </Content>
            </ContentDiv>
        </Container>

    )
}

export default ProductsPage

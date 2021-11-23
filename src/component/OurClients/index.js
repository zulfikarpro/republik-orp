import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/partnersbg.png'
import client from '../../images/clients.png'
import { H1 } from '../AboutUs/AboutUsElement'

const OurClientsPage = () => {
    return (
        <Container style={{height:'100vh', width:'100%', background:`url(${bg})`}} id='partner'>
            <ContentDiv style={{width:'100%', height:'100%'}}>
                <div style={{display:'flex', flexDirection:'row',justifyContent:'flex-start'}}>
                    <div style={{display:'flex', flexDirection:'column',width:'50%'}}>
                        <H1 style={{width:'auto', textAlign:'center'}}>Our Partners</H1>
                        <img src={client} style={{maxWidth:'400px', margin:'auto'}}/>
                    </div>
                </div>
            </ContentDiv>
        </Container>
    )
}

export default OurClientsPage

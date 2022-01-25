import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/partnersbg.png'
import bgmobile from '../../images/bg/bgmobile2.png'
import client from '../../images/clients.png'
import clientmobile from '../../images/clientsmobile.png'
import { H1 } from '../AboutUs/AboutUsElement'

const OurClientsPage = ({mobile}) => {
const background = mobile? bgmobile: bg;
const clientImage = mobile? clientmobile: client; 
    return (
        <Container style={{background:`url(${background})`, backgroundSize:`${mobile?'80vh':'100vw'}`, backgroundPositionX:`${mobile? '110vw': ''}`, backgroundRepeat:`${mobile?'no-repeat':'no-repeat'}`}} id='partner'>
            <div style={{zIndex: 0, position:'absolute', backgroundColor:`${mobile?'rgba(10,15,62,.6)':''}`, width:'100vw', height:'100vh'}}/>
            <ContentDiv style={{zIndex:1, width:'100%', height:'100%',  backgroundSize:'100vh'}}>
                <div style={{display:'flex', flexDirection:'row',justifyContent:'flex-start'}}>
                    <div style={{display:'flex', flexDirection:'column',width:`${mobile?'100%':'50%'}`, background:`${mobile?'white':''}`, paddingBottom:`${mobile?'20px': ''}`}}>
                        <H1 style={{width:'auto', textAlign:'center', marginBottom:'10px', }}>Our Partners</H1>
                        <div style={{height:'2px', width:'40%', background:'black', marginLeft:'auto', marginRight:'auto', marginBottom:'20px'}}/>
                        <img src={clientImage} style={{maxWidth:`${mobile? '80vw': '400px'}`, margin:'auto'}}/>
                    </div>
                </div>
            </ContentDiv>
        </Container>
    )
}

export default OurClientsPage

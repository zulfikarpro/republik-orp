import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElement'
import backgroundImages from '../../images/bg/bgkelas.png'
import { Title } from '../AboutUs/AboutUsElement'

const KelasImport = () => {
    return (
        <>
            <Container id='kelas'>
             <ContentDiv style={{backgroundImages:`url(${backgroundImages})`}}> 
             <div style={{position:'absolute', display:'flex', flexDirection:'column', right:0, left:0, textAlign:'center', color:'#fff', justifyContent:'center'}}>

                <Title style={{color:'white'}}>KELAS IMPOR</Title>
                Ikuti kelas impor bagi anda yang ingin memulai impor
                <div style={{display: 'flex',flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <div style={{padding:'10px 20px',marginTop:'20px',borderRadius:'10px', background:'white', color:'#C0022D'}}>INFO SELENGKAPNYA</div>
                </div>
             </div>
             <img src={backgroundImages} style={{background:'transparent', width:'100%', height:'auto'}} alt='bg'>
                 
             </img>
             
             </ContentDiv>
             </Container>   
        </>
    )
}

export default KelasImport

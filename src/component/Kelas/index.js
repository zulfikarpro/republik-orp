import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElement'
import backgroundImages from '../../images/bg/bgkelas.png'
import { TestDiv, P, Title } from './KelasElements'
import bgKepuasan from '../../images/bg/bgkepuasan.png'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Img} from '../Navbar/NavbarElement'

const KelasImport = () => {
    return (
        <>
            <Container id='kelas' style={{marginTop:'0px'}}>
             {/* <ContentDiv style={{backgroundImage:`url(${backgroundImages})`, backgroundPosition:'center' ,backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundSize:'1080px',paddingBottom:'5vh', paddingTop:'5vh',width:'100%', height:'100%', minHeight:'200px'}}>  */}
                 <ContentDiv style={{paddingLeft:'0px', paddingRight:'0px'}}>
             <div style={{display:'flex' ,backgroundImages:`url(${backgroundImages})` ,minWidth:'100%',minHeight:'100%', display:'flex', flexDirection:'row', justifyContent:'center'}}>
             <img src={backgroundImages} style={{ position:'center', width:'100%', height:'auto'}} alt='bg'>   
             </img>
             </div>
             <div style={{position:'absolute', display:'flex', flexDirection:'column', right:0, left:0, textAlign:'center', color:'#fff', justifyContent:'center'}}>

                <Title style={{color:'white'}}>KELAS IMPOR</Title>
                <P>Ikuti kelas impor bagi anda yang ingin memulai impor</P>
                <NavLinks 
                            to='contactus'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='false'
                            offset={-80}
                            style={{margin:'auto'}}
                            >
                <div style={{display: 'flex',flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <TestDiv>INFO SELENGKAPNYA</TestDiv>
                </div>
                </NavLinks>
             </div>
             
             </ContentDiv>
             </Container>   
        </>
    )
}

export default KelasImport

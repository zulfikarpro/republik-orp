import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/ourworkbg.jpg'
import image from '../../images/bg/workimage.png'
import { H1, P } from '../AboutUs/AboutUsElement'
const OurWorksPage = () => {
    return (
        <Container style={{background:`url(${bg})`}} id='ourworks'>
            <ContentDiv>
                <div style={{width:'100vw', height:'100%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                    <div style={{width:'50%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <img src={image} style={{maxWidth:'60%'}} ></img>
                    </div>
                    <div style={{width:'50%', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', color:'white'}}>
                        <H1>Our Works</H1>
                        <div style={{height:'2px', width:'40%', background:'white'}}/>
                        <P style={{maxWidth:'50%'}}>
                        Color egregius, integra valitudo, summa gratia, vita denique conferta voluptatum omnium varietate. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Tum ille timide vel potius verecunde: Facio, inquit. Quis enim potest ea, quae probabilia videantur ei, non probare? 
                        </P>
                    </div>
                </div>

            </ContentDiv>
        </Container>
    )
}

export default OurWorksPage

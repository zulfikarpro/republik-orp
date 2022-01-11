import React from 'react'
import { Container, ContentDiv } from '../Home/HomeElements'
import bg from '../../images/bg/ourworksbg.png'
import bgmobile from '../../images/bg/ourworksbgmobile.png'
import image from '../../images/bg/workimage.png'
import { H1, P } from '../AboutUs/AboutUsElement'
const OurWorksPage = ({mobile}) => {
    const background = mobile? bgmobile: bg;
    return ( 
        <Container style={{background:`url(${background})`, backgroundSize: `${mobile?'70vh':'100vw'}`, backgroundRepeat:'no-repeat', height:'100vh'}} id='ourworks'>
            <ContentDiv>
                <div style={{width:'100%', height:'100%', display:'flex', flexDirection:`${mobile?'column':'row'}`, justifyContent:`${mobile?'center':'flex-end'}`}}>
                    <div style={{width:`${mobile?'100%':'40%'}`,height:`${mobile?'auto':'100vh'}`, background:`${mobile?'rgba(0,0,0,.8)':''}`,  display:'flex', flexDirection:'column', justifyContent:'center', color:'white', maxWidth:'100vw'}}>
                        <H1 style={{margin:`${mobile?'auto':''}`, marginBottom:'20px', marginTop:'20px'}}>Our Works</H1>
                        <div style={{height:'2px', width:'40%', margin:`${mobile?'auto':''}`, marginBottom:'10px', background:'white', marginTop:`${mobile?'20px':''}`}}/>
                        <P style={{maxWidth:'80%', margin:`${mobile?'auto':''}`, marginBottom:'30px', marginTop:`${mobile? '20px': ''}`}}>
                        Color egregius, integra valitudo, summa gratia, vita denique conferta voluptatum omnium varietate. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Tum ille timide vel potius verecunde: Facio, inquit. Quis enim potest ea, quae probabilia videantur ei, non probare? 
                        </P>
                    </div>
                </div>

            </ContentDiv>
        </Container>
    )
}

export default OurWorksPage

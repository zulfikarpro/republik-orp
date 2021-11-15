import React from 'react'
import {VisimisiContainer, VisimisiWrapper, VisimisiTextWrapper, VisimisiTitle, VisimisiParagraph, TitleShadow} from './VisimisiElements'
import bg from '../../images/grup101.png'
const Visimisi = () => {
    return (
        <>
            <VisimisiContainer id={"visimisi"} img={'../../images/bg1@2x.png'}>
            <div style={{position:'absolute', right:'',width:'100%', height:'200%', zIndex:-1}}>
                <img src={bg} style={{zIndex:'-1' ,objectFit:'cover', position:'absolute', width:'100%', height:'100vh'}}/>
            </div>
                <VisimisiWrapper>
                    <VisimisiTextWrapper>
                    <TitleShadow> Vision &amp; Mission </TitleShadow>
                        <VisimisiTitle> Vision &amp; Mission </VisimisiTitle>
                        <h2 style={{color:'#fff'}}> Vision </h2>
                        <VisimisiParagraph>provide quality services, experts and dedication to one stop logistics.</VisimisiParagraph>
                        <h2 style={{color:'#fff'}}> Mission </h2>
                        <VisimisiParagraph>provide integrated solutions through one stop logistics, modern technology, and a committed workforce.</VisimisiParagraph>
                        <VisimisiParagraph>combining strategic planning with modern technology and workforce commitment to provide the best logistics solutions.</VisimisiParagraph>
                    </VisimisiTextWrapper>
                    {/* <VisimisiTextWrapper>
                    </VisimisiTextWrapper> */}
                </VisimisiWrapper>
            </VisimisiContainer>
        </>
    )
}

export default Visimisi

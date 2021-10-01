import React from 'react'
import {VisimisiContainer, VisimisiWrapper, VisimisiTextWrapper, VisimisiTitle, VisimisiParagraph} from './VisimisiElements'

const Visimisi = () => {
    return (
        <>
            <VisimisiContainer id={"visimisi"} img={'../../images/bg1@2x.png'}>
                <VisimisiWrapper>
                    <VisimisiTextWrapper>
                        <VisimisiTitle> Vision &amp; Mission </VisimisiTitle>
                        <VisimisiParagraph></VisimisiParagraph>
                        <VisimisiParagraph></VisimisiParagraph>
                    </VisimisiTextWrapper>
                </VisimisiWrapper>
            </VisimisiContainer>
        </>
    )
}

export default Visimisi

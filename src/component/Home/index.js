import React from 'react'
import { Container, ContentDiv, Image } from './HomeElement'

import banner from '../../images/MainBanner.png'

const HomePage = () => {
    return (
        <>
        <Container id={'home'}>
           <ContentDiv>
               <img src={banner} style={{width:'auto', maxWidth:'100%', maxHeight:'100%'}}/>
               {/* <Image src={banner} alt={'banner'}/> */}
               </ContentDiv> 
        </Container>
        
        </>
    )
}

export default HomePage

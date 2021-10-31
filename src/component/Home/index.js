import React from 'react'
import { Container, ContentDiv, Image } from './HomeElement'

import banner from '../../images/MainBanner.png'
import bannerMobile from '../../images/MainBannerMobile.png'

const HomePage = () => {
    const [windowSize, setWindowSize] = React.useState(0)
    const [bannerFile, setBannerFile] = React.useState(banner)
    const handleResize = () =>{
        if(window.innerWidth<900){
            setBannerFile(bannerMobile)
        }

        // console.log('size', window.innerWidth)
    }
    
    
    React.useEffect(() => {
        window.addEventListener("resize", handleResize)
        if(window.innerWidth<900){
            setBannerFile(bannerMobile)
        }else{
            setBannerFile(banner)
        }
        // alert(window.innerWidth)

      })


    return (
        <>
        <Container id={'home'} >
           <ContentDiv style={{paddingLeft:'0px', paddingRight:'0px'}}>
               <img src={bannerFile} style={{width:'auto', maxWidth:'100%', maxHeight:'100%'}}/>
               {/* <Image src={banner} alt={'banner'}/> */}
               </ContentDiv> 
        </Container>
        
        </>
    )
}

export default HomePage

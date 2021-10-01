import React from 'react'
import { LandingContainer, LandingBg, VideoBg, LandingContent, Logo} from './LandingElement'
import Video from '../../videos/video.mp4'
import logo from '../../images/logo.svg'

const LandingSection = () => {
    return (
        <LandingContainer id='home'>
            {/* <LandingBg> */}
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
            {/* </LandingBg> */}
            <LandingContent>
                <Logo src={logo}/>
            </LandingContent>
        </LandingContainer>
    )
}

export default LandingSection

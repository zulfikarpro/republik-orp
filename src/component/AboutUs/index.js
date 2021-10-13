import React from 'react'
import { HeadingShadow,AboutUsContainer, AboutUsWrapper, AboutUsRow, AboutUsTextWrapper,AboutUsHeading, AboutUsColumn2, AboutUsColumn1, AboutUsSubtitle, AboutUsImage, DarkerBackground } from './AboutUsElement'
import { TopLine, Subtitle, Heading,} from '../InfoSection/InfoElements'
import truckImage from '../../images/Group89@2x.png'

const AboutUsPage = ({
    lightBg,
    imgStart,
    topLine,
    lightText,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    id,
    primary,
    darkText,
    dark,
    dark2,
    alignCenter,
    bgImage
  }) => {
    return (
        <>
            <AboutUsContainer img={bgImage} lightBg={lightBg} id={id}>
                <AboutUsWrapper>
                  
            <DarkerBackground/>
            <AboutUsRow imgStart={imgStart}>
            <AboutUsColumn1>
              <AboutUsImage src={truckImage}/>
              {/* <AboutUsTextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <AboutUsHeading lightText={lightText} alignCenter={alignCenter}>{headline}</AboutUsHeading>
                <div style={{height:'2px', width:'60%', background:'#FFF'}}/>
                <AboutUsSubtitle darkText={darkText} alignCenter={alignCenter}>{description}</AboutUsSubtitle>
              </AboutUsTextWrapper> */}
            </AboutUsColumn1>
            <AboutUsColumn2>
            <AboutUsTextWrapper>
                {/* <TopLine lightText={lightText}>{topLine}</TopLine> */}
                <HeadingShadow>{headline}</HeadingShadow>
                <AboutUsHeading lightText={lightText} alignCenter={alignCenter}>{headline}</AboutUsHeading>
                <div style={{height:'2px', width:'60%', background:'#FFF'}}/>
                <AboutUsSubtitle darkText={darkText} alignCenter={alignCenter}>{description}</AboutUsSubtitle>
              </AboutUsTextWrapper>
            </AboutUsColumn2>
            
          </AboutUsRow>
                </AboutUsWrapper>
            </AboutUsContainer>
        </>
    )
}

export default AboutUsPage

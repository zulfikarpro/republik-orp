import React from 'react'
import { Button } from '../ButtonElements';
import { Subtitle, TopLine, Heading, Column1, BtnWrap } from '../InfoSection/InfoElements'
import { CustomInfoContainer, CustomInfoWrapper, CustomInfoRow , CustomTextWrapper} from './CustomInfoElement'
const CustomInfoSection = ({
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
      console.log('test'+ bgImage);
    return (
        <>
            <CustomInfoContainer img={'../../images/bg1@2x.png'} lightBg={lightBg} id={id}>
                <CustomInfoWrapper>
                <CustomInfoRow imgStart={imgStart}>
            <Column1>
              <CustomTextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText} alignCenter={alignCenter}>{headline}</Heading>
                <hr class="rounded"/>
                <Subtitle darkText={darkText} alignCenter={alignCenter}>{description}</Subtitle>
                {/* <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap> */}
              </CustomTextWrapper>
            </Column1>
            {/* <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2> */}
          </CustomInfoRow>
                </CustomInfoWrapper>
            </CustomInfoContainer>
        </>
    )
}

export default CustomInfoSection

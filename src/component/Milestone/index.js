import React from 'react'
import { MilestoneImages, MilestoneContainer, MilestoneTitle, MilestoneTitleShadow, MilestoneWrapper,MilestoneTextWrapper  } from './MilestoneElements'
import MilestoneImage from'../../images/milestone.png'
import ImageMobile from'../../images/milestonemobile.png'
const Milestone = ({
    mobile,
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

    const background = mobile? ImageMobile : MilestoneImage
    return (
        <>
            <MilestoneContainer id={"milestone"} style={{marginTop:'0px'}} >
                <MilestoneWrapper>
                    <MilestoneTextWrapper style={{maxWidth:'1440px', margin:'auto'}}>
                        <MilestoneTitleShadow lightText={lightText} style={{marginBottom:'5px'}}>
                            Group Milestones
                        </MilestoneTitleShadow>
                        {/* <MilestoneTitle lightText={lightText}>
                            Group Milestones
                        </MilestoneTitle> */}
                    </MilestoneTextWrapper>
                    <MilestoneImages src={background} style={{marginTop:'0px'}}/>
                </MilestoneWrapper>
            </MilestoneContainer>
        </>
    )
}

export default Milestone
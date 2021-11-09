import React from 'react'
import { MilestoneImages, MilestoneContainer, MilestoneTitle, MilestoneTitleShadow, MilestoneWrapper,MilestoneTextWrapper  } from './MilestoneElements'
import MilestoneImage from'../../images/milestone.png'
const Milestone = ({
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
            <MilestoneContainer id={"milestone"}>
                <MilestoneWrapper>
                    <MilestoneTextWrapper>
                        <MilestoneTitleShadow lightText={lightText}>
                            Group Milestones
                        </MilestoneTitleShadow>
                        <MilestoneTitle lightText={lightText}>
                            Group Milestones
                        </MilestoneTitle>
                    </MilestoneTextWrapper>
                    
                    <MilestoneImages src={MilestoneImage}/>
                </MilestoneWrapper>
            </MilestoneContainer>
        </>
    )
}

export default Milestone
import styled from 'styled-components'

export const LandingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    max-width: 100%;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: -webkit-gradient(
        //     linear,
        //     left top,
        //     left bottom,
        //     from(rgba(0, 0, 0, 0.2)),
        //     to(rgba(0, 0, 0, 0.2))
        //   ),
        //   -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
        // background: linear-gradient(
        //     180deg,
        //     rgba(0, 0, 0, 0.2) 0%,
        //     rgba(0, 0, 0, 0.6) 100%
        //   ),
        /* background: linear-gradient(to right, #fff 20%, transparent); */
        opacity: 0.7;
        z-index: 2;
      }
`

export const LandingBg = styled.div`
  background: linear-gradient(to right, #fff, transparent);
    position: absolute;
    align-items: center;
    justify-content: center;
    width:auto;
    height:auto;
    overflow: hidden;
    z-index: 2;
`

export const VideoBg = styled.video`
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:1920px;
    height:1080px;
    align-self: center;
    -o-object-fit: cover;
    object-fit: cover;
    opacity: 0.7;
`

export const LandingContent = styled.div` 
    z-index: 2;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logo =styled.img`
    height:200%;
    width:200%;

    @media screen and (max-width: 768px){
      height:100%;
      width:100%;
    }
`
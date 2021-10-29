import styled from 'styled-components'

export const Nav = styled.div`
/* background: linear-gradient(to right, #fff, transparent); */
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  /* @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  } */
`

export const NavMenu = styled.div`
    border-radius: 20px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 960px) {
    /* display: none; */
  }
`;

export const NavItem = styled.div`
background: #C0022D;
text-align: center;
  height: 60px;
  width: 100%;
  @media screen and (max-width:960px){
    height: 60px;
  }
`;


export const NavLinks = styled.div`
/* color: white; */
text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 9rem;
  height: 100%;
    @media screen and (max-width:960px){
      width: 5rem;
      font-size: 0.8rem;
    }
`;

export const GridView = styled.div`
  display:flex ;
  flex-direction:row ;
  justify-content:space-evenly ;
  max-width:960px ;
  color:#C0022D;

  @media screen and (max-width:960px){
    flex-direction: column;
  }

`

export const ImageIcon = styled.img`
  max-width:200px;
  width:100% ;
  height:auto; 
  margin:auto;
`

export const DivItemRow = styled.div`
display:flex; 
flex-direction:column; 
max-width: 200px;
/* height: */

`

export const DivArrow = styled.div`
  /* position:absolute; */
  top:0;
  bottom:0;
  transform: rotate(90deg);
`

export const ArrowRight = styled.span`
/* position:absolute; */
  top:-0.3rem;
  bottom:0;
  height:1rem;
  border-right: 0.2rem solid red;
  display: inline-block;
  left:0.3rem;
  transform: rotate(-45deg);
`

export const ArrowLeft = styled.span`
/* position:absolute; */
  top:-0.3rem;
  bottom:0;
  height:1rem;
  border-right: 0.2rem solid red;
  display: inline-block;
  right:0.3rem;
  transform: rotate(45deg);
`

export const LineSpan = styled.span`
border-right: 0.2rem dashed red;
  display:inline-block;
  height:5rem;
` 

export const Number = styled.h1`
 font-size:'3rem'; line-height:'0';
`

export const BoldTitle = styled.h3`
font-size:.8rem; line-height:1.2;
@media screen and (max-width:960px){
  /* font-size: 0.4rem; */
};
`

export const Arrow = styled.p`
font-size:16px
  letter-spacing:8px;
  font-weight:900;


  @media screen and (max-width:960px){
    /* letter-spacing:3px */
  }

`
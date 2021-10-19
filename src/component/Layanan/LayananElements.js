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
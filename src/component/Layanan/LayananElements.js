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

    /* background: #C0022D; */
    border-radius: 20px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* @media screen and (max-width: 960px) {
    display: none;
  } */
`;

export const NavItem = styled.div`
background: #C0022D;
text-align: center;
  height: 80px;
  width: 100%;
`;


export const NavLinks = styled.div`
/* color: white; */
text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 8rem;
  height: 100%;
`;
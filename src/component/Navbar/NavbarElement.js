import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
/* background: linear-gradient(to right, #fff, transparent); */
  height: 80px;
  margin-top: -80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  /* box-shadow: 5px 10px #888888; */

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`

/* background: linear-gradient(to right, #fff, transparent); */
background: #fff;
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  // padding: 0 24px;
  max-width: 960px;

  @media screen and (max-width: 960px){
  justify-content: space-between;
  }
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  height:75%;
  width:auto;
  margin-top:10px;

  @media screen and (max-width: 768px) {
    height:50%;
    margin-top:20px;
    max-width:100px
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    color:'black';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  /* color: ${({ scrollNav }) => (scrollNav ? '#000' : '#fff')}; */
  display: flex;
  /* background: red; */
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  /* color: #fff; */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: .8rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #cfcfcf;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Img = styled.img`
  height:100%;
  width:100%;
`
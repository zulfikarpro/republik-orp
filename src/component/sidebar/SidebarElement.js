import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 40%;
    height: 100%;
    background: rgba(0,0,0,1);
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: all 0.6s ease-in-out;
    opacity: ${({ isOpen })=>(isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) =>(isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: fixed;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color:#fff;
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #cfcccf;
        transition: 0.2s ease-in-out;
    }
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and(max-width: 768px){
        grid-template-rows: repeat(6,60px)
    }
`

import React from "react"; 
import styled from "styled-components";

import RightNav from "./rightnav";

//hamburger menu 
const MenuIcon = styled.div `
  position: fixed; 
  top: 2rem; 
  right: 2rem; 
  width: 1.5rem; 
  height: 1.5rem;
  background: transparent; 
  border: none; 
  cursor: pointer; 
  z-index: 5; 
  display: none; 

  @media (max-width: 768px) {
    display: flex; 
    justify-content: space-around; 
    flex-direction: column; 
  }

  div {
    width: 1.5rem; 
    height: 0.2rem; 
    background: ${({ open }) => open ? '#ccc': '#333'}; 
    border-radius: 5px; 
    transform-origin: 1px; 
    position: relative;
    transition: all 300ms linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)': 'rotate(0)'}
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)': 'translateX(0)'};
      opacity: ${({ open }) => open ? 0: 1}
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)': 'rotate(0)'}
    }
  }
`

const Burger = ({ menuLinks }) => {
  const [open, SetOpen] = React.useState(false);

  return (
    <>
    <MenuIcon open={open} onClick={() => SetOpen(!open)} > 
      <div/>
      <div/>
      <div/>
    </MenuIcon>
    <RightNav menuLinks={menuLinks} open={open} onClick={() => SetOpen(!open)}/>
    </>
  )
  
}


export default Burger
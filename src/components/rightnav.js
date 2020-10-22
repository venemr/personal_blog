import React from "react"; 
import styled from "styled-components";
import { Link } from "gatsby";
import {Dropdown} from "react-bootstrap"


//right nav menu
const RightNavUl = styled.ul `
  list-style: none; 
  flex-flow: column wrap;
  display: none;

  li {
      padding: 1px 1px; 
  }

  @media (max-width: 768px) {
      flex-flow: column wrap; 
      background-color: lightpink; 
      position: fixed; 
      transform: ${({ open }) => open ? 'translateX(0)': 'translateX(100%)'};
      top: 0; 
      right: 0; 
      height: 100vh; 
      width: 300px; 
      padding-top: 3.5rem; 
      transition: all 300ms linear;
      display: flex;
  }
`

const RightNavItem = ({link}) => {
    // const [isShown, setIsShown] = React.useState(false);
  
    // the map is doing this...
    // [{name: "drama"}, {name:"game"}] => [<li>"drama"</li>, <li>"game"</li>]
    if (link.children) {
  
      const children = link.children.map((child) => {
        return(
        <>
          <div 
            style={{ color: `black`, 
            backgroundColor: `lightpink`, 
            boxSizing: `content-box`, 
            border: `1px black`, 
            borderRadius: `5px`,
            height:`30px`}}
          >
            <ul 
            style={{ color: `black`, 
            backgroundColor: `lightpink`, 
            listStyleType: `disc`, 
            textAlign: `left`,
            margin: `0 10px`,
          }}
            >
              <li  style={{display: 'inline'}}>
                <Link style={{ color: `black`, backgroundColor: `lightpink`, textAlign: `left`, fontSize: `1rem`, textDecoration: `None`, textTransform: `uppercase`}} to={child.childlink}>
                    {child.name}
                </Link>
              </li>
            </ul>
          </div>
        </>
        )} 
      )    
    
      return (
          <Dropdown className="rightnav-dropdown-menu">
              <Dropdown.Toggle className="rightnav-dropdown-toggle">{link.name}</Dropdown.Toggle>
              <Dropdown.Menu>{children}</Dropdown.Menu>
          </Dropdown>
      )
    }
  
  
    return (
      <li style={{display: 'inline'}} key={link.name} className="rightnav-bar">
        <Link to={link.link} className="rightnav">
          {link.name}
        </Link>
      </li>
    )
  }

const RightNav = ({ menuLinks, open }) => {

  return (
//     <RightNavUl open={open}>
//       {/* {menuLinks.map(link => (
//                 <li key={link.name}>
//                   <Link to={link.link} style={{color: `white`, textDecoration: `None`}}>{link.name}</Link>
//                 </li>
//               ))} */}
    <RightNavUl open={open}>
        {menuLinks.map(link => (
            <RightNavItem link={link}/>
        ))}
    </RightNavUl>       
  )
}


export default RightNav

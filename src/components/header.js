import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import {Dropdown} from "react-bootstrap"

import "../styles/styles.scss"
const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">
            {siteTitle}
          </Link>
        </div>
        <div className="navigation">
          <nav>
            <ul style={{ display: "flex", flex: 1}}> 
              {menuLinks.map(link => (
                <HeaderItem link={link} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Link
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </Link>
));


const HeaderItem = ({link}) => {
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
          border: `1px double white`, 
          borderRadius: `5px`}}
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
              <Link style={{ color: `black`, backgroundColor: `lightpink`, textAlign: `left`}} to={child.childlink}>{child.name}</Link>
            </li>
          </ul>
        </div>
      </>
      )} 
    )    
  
    return (
      <li style={{display: 'inline'}} key={link.name}>
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>{link.name}</Dropdown.Toggle>
            <Dropdown.Menu>{children}</Dropdown.Menu>
        </Dropdown>
      </li>
    )
  }


  return (
    <li style={{display: 'inline'}} key={link.name}>
      <Link to={link.link}>
        {link.name}
      </Link>
    </li>
  )
}
export default Header


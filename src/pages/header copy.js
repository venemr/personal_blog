import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import {Dropdown} from "react-bootstrap"

import "../styles/styles.scss"
const Header = ({ siteTitle, menuLinks }) => (
  <header
    // style={{
    //   background: `#cbbbdb`,
    //   marginBottom: `1.45rem`,
    // }}
  >
    <div className="container"
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 960,
      //   padding: `1.45rem 1.0875rem`,
      // }}
    >
    <div className="inner-header">
      <div className="logo">
 
      {/* <h1 style={{ margin: 0 }}> */}
        <Link
          to="/"
          // style={{
          //   color: `white`,
          //   textDecoration: `none`,
          // }}
         >
          {siteTitle}
        </Link>
      {/* </h1> */}
      <div className="navigation">
          <nav>
            <ul 
            // style={{ display: "flex", flex: 1}}
            >
              {menuLinks.map(link => (
                <HeaderItem link={link} />
              ))}
            </ul>
          </nav>
        </div>
        </div>
        </div>
    </div>
  </header>
  // <header>
  //   <div className="container">
  //     <div className="inner-header">
  //       <div className="logo">
  //         <Link to="/">{siteTitle}</Link>
  //       </div>
  //       <div className="navigation"> 
  //         <nav>
  //           {menuLinks.map(link => (<nav><HeaderItem link={link} /></nav>))}
  //         </nav>
  //       </div>
  //     </div>
  //   </div>
      
  // </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

const HeaderItem = ({link}) => {
  const [isShown, setIsShown] = React.useState(false);
 

  // the map is doing this...
  // [{name: "drama"}, {name:"game"}] => [<li>"drama"</li>, <li>"game"</li>]
  if (link.children) {
    // const children = (
    //   <Dropdown>
    //     <Dropdown.Toggle data-toggle="dropdown">
    //       <li>{link.children.map(child => <li>{child.name}</li>)}</li>
    //     </Dropdown.Toggle>
    //   </Dropdown>
    // )
    const children = link.children.map((child) => {
      return(
      <Dropdown>
        <Dropdown.Toggle 
          style={{ color: `black`, 
          backgroundColor: `lightpink`, 
          boxSizing: `content-box`, 
          width:`110px`, 
          border: `1px double white`, 
          borderRadius: `5px`}}
        >
          <ul 
          style={{ color: `black`, 
          backgroundColor: `lightpink`, 
          listStyleType: `disc`, 
          textAlign: `left`}}
          >
            <li>
              <Link style={{ color: `black`, backgroundColor: `lightpink`, textAlign: `left`}} to={child.childlink}>{child.name}</Link>
            </li>
          </ul>
        </Dropdown.Toggle>
      </Dropdown>
      )} 
    )
    
  
  return (
      <li
        key={link.name}
        // style={{
        //   listStyleType: `none`,
        //   padding: `1rem`,
        //   fontWeight: `bold`, 
        // }}
      >
        <Link style={{ color: `black` }} onMouseOver={() => setIsShown(true)} onFocus={() => setIsShown(true)}> 
        
          {link.name} 
  
          {isShown && children}
        </Link>
      </li>

    )
  }

  return (
    <li
      key={link.name}
      // style={{
      //   listStyleType: `none`,
      //   padding: `1rem`,
      //   fontWeight: `bold`, 
      // }}
    >
      <Link 
        // style={{ color: `black` }} 
        to={link.link}
      >
        {link.name}
      </Link>
      </li>
  )
}
export default Header


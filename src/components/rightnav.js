import React from "react"; 
import styled from "styled-components";
// import { useStaticQuery, graphql } from "gatsby"


const Ul = styled.ul `
  list-style: none; 
  display: flex; 
  flex-flow: row nowrap;

  li {
      padding: 18px 10px; 
  }

  @media (max-width: 768px) {
      flex-flow: column nowrap; 
      backgroud-color: lightpink; 
      position: fixed; 
      top: 0; 
      right: 0; 
      height: 100vh; 
      width: 300px; 
      padding-top: 3.5rem; 

      li {
          color: white; 
      }
  }
`

const RightNav = () => {
    // const data = useStaticQuery(graphql`
    // query MenuBarQuery {
    //     site {
    //       siteMetadata {
    //         menuLinks {
    //           link
    //           name
    //         }
    //       }
    //     }
    //   }
    // `)

    return (
        <Ul>
            <li>About</li>
            <li>Blog</li>
            <li>Categories</li>
            <li>Contact</li>
        </Ul>
                
    )
}

//export default RightNav

// <li>{data.site.siteMetadata.menuLinks.name}</li>
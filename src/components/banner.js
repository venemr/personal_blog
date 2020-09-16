import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      coverPageImage: file(relativePath: { eq: "guizhou.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <div className="banner">
            <div className="container"> 
                <div className="row">
                    <div className="main-image"><Img fluid={data.coverPageImage.childImageSharp.fluid}/></div>
                    <div className="main-text">Hey Friend</div>
                </div>
            </div>
            {/* <div style={{position: "absolute", bottom: "30px"}} onClick={() => {window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}}>
              CLICK ME
            </div> */}
        </div>
        )
}

export default Banner 
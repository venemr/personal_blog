import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      coverPageImage: file(relativePath: { eq: "white_coverpic.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
      <div className="banner">
        <Container>
          <Img fluid={data.coverPageImage.childImageSharp.fluid}/>
          <div data-sal="fade"
                     data-sal-delay="300"
                     data-sal-easing="ease"
          >
            <div className="block-reveal">
              <span>Hey </span>
              <span>there!</span>
            </div>  
          </div>
          <div 
              className='bottom-arrow'
              onClick={() => {window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}} 
              onKeyDown={() => {window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}}
              role="button"
              tabIndex="0"
            >
            </div>
        </Container>
      </div>
        
        )
}

export default Banner 
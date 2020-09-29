import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import Img from "gatsby-image"

export default function Template({data}) {
    let post = data.markdownRemark
    
    // let featuredImgFluid = data.imageSharp.fluid

    return (
    <Layout>
        <div>
            <hr></hr>
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date} |  In {post.frontmatter.tags} |  Last Updated on {post.frontmatter.updated_on}</h4>
            <div dangerouslySetInnerHTML={{__html: post.html}} />
            <Link to="/blog">Go Back</Link>
        </div>
    </Layout>
    )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }){
          html
          frontmatter {
              path 
              title
              author 
              date
              updated_on
              tags
          }
      }
  }
` 

// {/* <img src={post.frontmatter.featuredImage} /> */}
// {/* <Img fluid={featuredImgFluid}></Img> */}
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <img src={'/marble.jpg'} alt={"Title Background"} style={{opacity: 0.5, margin: '-190px auto 0'}}/>
    <SEO title="Blog" />
    <h1>My Personal Blog</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
            <h3>
              <Link className="text-link" to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </h3>
            <div><middle>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date} |  In {post.node.frontmatter.tags} |  Last Updated on {post.node.frontmatter.updated_on}</middle></div>
            <br /> 
            <div><img alt='cover pic' src={post.node.frontmatter.featuredImage}></img></div>
            <div>{post.node.excerpt}</div>
            <br />
            <br />
            <button className="read-more-link">
              <Link to={post.node.frontmatter.path} className="read-more-link">Read More &#62;&#62;</Link>
            </button>
            <br />
            <br />
            <br />
        </div>
    ))}
    <button className='button-link'><Link to="/" className='button-link'>&#60;&#60; Back to Homepage</Link></button>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date
            path
            title
            updated_on
            featuredImage
            tags
          }
          excerpt(pruneLength: 500)
        }
      }
    }
  }
  
`
export default BlogPage

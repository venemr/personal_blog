import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Hello and welcome to my personal blog</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <div><middle>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date} |  In {post.node.frontmatter.tags} |  Last Updated on {post.node.frontmatter.updated_on}</middle></div>
            <br /> 
            <div><img alt='cover pic' src={post.node.frontmatter.featuredImage}></img></div>
            <div>{post.node.excerpt}</div>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <br />
        </div>
    ))}
    <Link to="/">Go back to the homepage</Link>
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

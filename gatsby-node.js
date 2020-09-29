const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

    const result = await graphql(`
    {
        allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
          edges {
            node {
              frontmatter {
                author
                date
                path
                title
                updated_on
                featuredImage
                tags
              }
            }
          }
        }
      }
    `) 
    
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
        
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path, 
            component: blogPostTemplate,
            context: {}, 
        })
    })
}




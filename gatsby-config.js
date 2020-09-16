module.exports = {
  siteMetadata: {
    title: `Mengru's Blog`,
    description: `personal sites to share precious life moments.`,
    author: `Mengru Fu`,
    menuLinks: [
      // {
      //   name: 'home', 
      //   link: '/'
      // },
      {
        name: 'about', 
        link: '/about'
      }, 
      {
        name: 'blog',
        link: '/blog',
      },
      {
        name: 'categories', 
        link: '/categories', 
        children: [
          { name: "career", 
            childlink: "/career",
          }, 
          { name: "academic", 
          childlink: "/academic",
          },
          { name: "travel", 
          childlink: "/travel",
          }  
        ]
      }, 
      {
        name: 'contact', 
        link: '/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E6E6FA`,
        theme_color: `#E6E6FA`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`, 
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
  ],
}
  
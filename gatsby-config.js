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
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // In your gatsby-transformer-remark plugin array
      plugins: [{
        resolve: 'gatsby-remark-emojis',
        options: {
          // Deactivate the plugin globally (default: true)
          active : true,
          // Add a custom css class
          class  : 'emoji-icon',
          // In order to avoid pattern mismatch you can specify
          // an escape character which will be prepended to the
          // actual pattern (e.g. `#:poop:`).
          escapeCharacter : '#', // (default: '')
          // Select the size (available size: 16, 24, 32, 64)
          size   : 64,
          // Add custom styles
          styles : {
            display      : 'inline',
            margin       : '0',
            'margin-top' : '1px',
            position     : 'relative',
            top          : '5px',
            width        : '25px'
          }
        }
      }]
    }
  },
  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
    }
  }
  ]
}
  
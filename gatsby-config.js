module.exports = {
  siteMetadata: {
    title: `Mengru's Blog`,
    description: `A personal site to share precious life moments.`,
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
          { name: "leisure", 
          childlink: "/leisure",
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
    `gatsby-plugin-sass`, 
    `gatsby-plugin-styled-components`,
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
      },
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          // Class prefix for <pre> tags containing syntax highlighting;
          // defaults to 'language-' (e.g. <pre class="language-js">).
          // If your site loads Prism into the browser at runtime,
          // (e.g. for use with libraries like react-live),
          // you may use this to prevent Prism from re-processing syntax.
          // This is an uncommon use-case though;
          // If you're unsure, it's best to use the default value.
          classPrefix: "language-",
          // This is used to allow setting a language for inline code
          // (i.e. single backticks) by creating a separator.
          // This separator is a string and will do no white-space
          // stripping.
          // A suggested value for English speakers is the non-ascii
          // character '›'.
          inlineCodeMarker: null,
          // This lets you set up language aliases.  For example,
          // setting this to '{ sh: "bash" }' will let you use
          // the language "sh" which will highlight using the
          // bash highlighter.
          aliases: {},
          // This toggles the display of line numbers globally alongside the code.
          // To use it, add the following line in gatsby-browser.js
          // right after importing the prism color scheme:
          //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
          // Defaults to false.
          // If you wish to only show line numbers on certain code blocks,
          // leave false and use the {numberLines: true} syntax below
          showLineNumbers: false,
          // If setting this to true, the parser won't handle and highlight inline
          // code used in markdown i.e. single backtick code like `this`.
          noInlineHighlight: false,
          // This adds a new language definition to Prism or extend an already
          // existing language definition. More details on this option can be
          // found under the header "Add new language definition or extend an
          // existing language" below.
          languageExtensions: [
            {
              language: "superscript",
              extend: "javascript",
              definition: {
                superscript_types: /(SuperType)/,
              },
              insertBefore: {
                function: {
                  superscript_keywords: /(superif|superelse)/,
                },
              },
            },
          ],
          // Customize the prompt used in shell output
          // Values below are default
          prompt: {
            user: "root",
            host: "localhost",
            global: false,
          },
          // By default the HTML entities <>&'" are escaped.
          // Add additional HTML escapes by providing a mapping
          // of HTML entities and their escape value IE: { '}': '&#123;' }
          escapeEntities: {},
        }
      }
    ]
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
  
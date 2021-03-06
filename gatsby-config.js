module.exports = {
  siteMetadata: {
    title: `Wentworth Jewels`,
    description: `Wentworth Jewels online website.`,
    author: `mdurks@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-transition-link",
      // pass following option to tell transition link to maintain the layout from the following file so transition only affect the contents of the new page and not the surrounding layout
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wentworth Jewels`,
        short_name: `Wentworth Jewels`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/wentworth_symbol_large.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // The top level query type:
        typeName: "GCMS",
        // The field you'll query against:
        fieldName: "gcms",
        // The API endpoint:
        url:
          "https://api-eu-central-1.graphcms.com/v2/ckcgmjdl73ds501xrercafl4c/master",
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Playfair Display",
    //           variants: ["400"],
    //           fontDisplay: "swap",
    //           strategy: "selfHosted", // 'base64' || 'cdn'
    //         },
    //         {
    //           family: "Raleway",
    //           variants: ["400"],
    //           fontDisplay: "swap",
    //           strategy: "selfHosted", // 'base64' || 'cdn'
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Playfair Display`,
    //       },
    //       {
    //         family: `Raleway`,
    //         variants: [`400`, `700`],
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     google: {
    //       families: ["Playfair Display", "Raleway"],
    //       strategy: "selfHosted",
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-snipcartv3",
    //   options: {
    //     apiKey:
    //       "YmJkMDViNmYtYjg2MC00YTc0LTkwNDMtNGUzZGYwYTkyN2JjNjM3MzAzMTM2MDgxMjQzNzc0",
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

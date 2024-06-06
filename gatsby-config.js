/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata:{
    title: "Alchemy Design",
    description: "Transforming ideas and concepts into impactful designs and products",
    author: "Alchemy",
    siteUrl: "http://alchemydesign.xyz",
    social: {
      behance: "https://www.behance.net/alchemyglobalstudio",
      facebook: "https://www.facebook.com/people/Alchemy-Global-Design/61560205553275/",
      instagram: "https://www.instagram.com/alchemy_globaldesign/",
      linkedin: "https://www.linkedin.com/company/alchemydesigns/",
      dribble: "https://dribbble.com/alchemy_global",
    },
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
  ],
};

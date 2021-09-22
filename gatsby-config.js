const { ACTIVE_ENV, NODE_ENV } = process.env
const activeEnv = ACTIVE_ENV || NODE_ENV || 'development'
require('dotenv').config({ path: `.env.${activeEnv}` })
console.log(`Using environment config: '${activeEnv}'`)

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.bgrapes.com',
    title: 'Iron Man Landing Page',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Iron Man Landing Page`,
        short_name: `Iron Man`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cc3332`,
        display: `standalone`,
        icon: require.resolve('./static/favicon.png'),
      },
    },
  ],
  // Disable warnings about Gatsby experimental features
  flags: {
    DEV_SSR: false,
  },
}

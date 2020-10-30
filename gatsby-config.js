import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
  siteMetadata: {
    title: 'EME6208',
    siteUrl: '',
    description: 'EME6208 ePortfolio',
    twitter: '@philsinatra',
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
    ],
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components'],
}

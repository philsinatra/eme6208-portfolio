module.exports = {
  siteMetadata: {
    title: 'EME6208',
    description: 'EME6208 ePortfolio',
    twitter: '@philsinatra',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Image Editing',
        link: '/image-editing',
      },
      {
        name: 'Web Design',
        link: '/web-design',
      },
      {
        name: 'Drag n Drop',
        link: '/dnd',
      },
      {
        name: 'Video Production',
        link: '/video-production',
      },
      {
        name: 'Digital Animation',
        link: '/digital-animation',
      },
      {
        name: 'Screencast',
        link: '/screencast',
      },
    ],
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-styled-components'],
}

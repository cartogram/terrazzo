module.exports = {
  siteMetadata: {
    title: 'terrazzo',
    description: 'Toronto based javascript creative',
    url: 'https://terrazzo.com',
    keywords: 'javascript, toronto',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['inconsolata:300,700'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-93349937-2',
      },
    },
  ],
};

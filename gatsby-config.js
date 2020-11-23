module.exports = {
  siteMetadata: {
    title: 'Blog Do Jorge',
    description: 'Desenvolvendo com Gatsby',
    author: 'Jorge Augusto Bertolo Zupirolli'
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    }
  ]
}

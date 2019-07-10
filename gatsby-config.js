module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-mdx`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `writing`,
        path: `src/pages/writing`
      }
    }
  ]
};

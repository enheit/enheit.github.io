module.exports = {
  siteMetadata: {
    title: "enheits' title",
  },
  plugins: [
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/utils/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/utils/theme.js`).darkTheme,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
  
};

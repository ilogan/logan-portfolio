module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat Alternates\:400,500,600,700`,
          `Montserrat\:400,500,600`,
          `Raleway\:400,500,600`
        ],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/portfolio/*`] }
    }
  ]
};

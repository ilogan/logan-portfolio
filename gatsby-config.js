module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat Alternates\:400,700`, `Montserrat`, `Raleway`],
        display: "swap"
      }
    }
  ]
};

require("dotenv").config();
module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Bitter\:400,500,600,700,800`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/portfolio/*`] }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Fauna`,
        fieldName: `fauna`,
        url: `https://graphql.fauna.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.FAUNA_SECRET}`
        }
      }
    }
  ]
};

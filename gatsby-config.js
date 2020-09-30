require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Ian Logan`,
    siteUrl: `https://ianlogan.dev`,
    description: `Hey! I’m a full stack software engineer. Check out my projects and learn in public with me.`,
    image: `https://res.cloudinary.com/drpb2s0r0/image/upload/dpr_2.0/v1600799926/portfolio/ian-logan-landing-page.jpg`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layouts/GlobalLayout.js")
        }
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
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
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: "portfolio"
      }
    }
  ]
};

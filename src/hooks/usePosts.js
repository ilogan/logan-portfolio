import { useStaticQuery, graphql } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            frontmatter {
              title
              slug
              author
              date(formatString: "MMMM DD, YYYY")
            }
            excerpt
          }
        }
      }
    `
  );
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    date: post.frontmatter.date,
    excerpt: post.excerpt
  }));
};

export default usePosts;

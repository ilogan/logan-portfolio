import { useStaticQuery, graphql } from "gatsby";

const usePosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              author
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
    author: post.frontmatter.slug,
    excerpt: post.excerpt
  }));
};

export default usePosts;

import { useStaticQuery, graphql } from "gatsby";

const useTags = () => {
  const data = useStaticQuery(
    graphql`
      query {
        fauna {
          allTags {
            data {
              name
              type {
                backgroundColor
                color
                name
              }
            }
          }
        }
      }
    `
  );

  // note the use of reduce
  // returns a dictionary where the key is the tag name
  return data.fauna.allTags.data.reduce((tags, tag) => {
    tags[tag.name] = {
      type: tag.type.name,
      backgroundColor: tag.type.backgroundColor,
      color: tag.type.color
    };
    return tags;
  }, {});
};

export default useTags;

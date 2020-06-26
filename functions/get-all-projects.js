const sendQuery = require("./utils/send-query");

const GET_ALL_PROJECTS = `
  query {
    allProjects {
      data {
        title
        summary
        date
        siteUrl
        githubUrl
        keyTasks
        tech
      }
    }
  }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_PROJECTS);
  if (errors)
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };

  return {
    statusCode: 200,
    body: JSON.stringify({ projects: data.allProjects.data })
  };
};

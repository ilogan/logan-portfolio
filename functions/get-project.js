const sendQuery = require("./utils/send-query");

const GET_PROJECT = `
  query($id: ID!) {
    findProjectByID(id: $id) {
      title
      summary
      siteUrl
      githubUrl
      keyTasks
      tech
      date
      asset {
        id
        url
        type
        cloudName
      }
    }
  }
`;

exports.handler = async event => {
  // todo grab the id off of the event
  // console.log(event);
  // const { id } = JSON.parse(event.body);
  const { data, errors } = await sendQuery(GET_PROJECT, {
    id: "269410580739129874"
  });

  if (errors)
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };

  return {
    statusCode: 200,
    body: JSON.stringify({ project: data })
  };
};

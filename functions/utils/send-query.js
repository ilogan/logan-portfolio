require("dotenv").config();
const axios = require("axios");

const sendQuery = async (query, variables) => {
  const { data } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET}`
    },
    data: {
      query,
      variables
    }
  });
  return data;
};

module.exports = sendQuery;

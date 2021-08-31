const fetch = require('node-fetch');

const getScores = async (url) => {
  const result = await fetch(url);
  return result.json();
};

export default getScores;
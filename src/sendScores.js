const fetch = require('node-fetch');

const sendScores = async (url) => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: 'Zeenat Lawal',
      score: 87,
    }),
  });
  return result.json();
};

export default sendScores;

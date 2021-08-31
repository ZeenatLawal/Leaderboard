const fetch = require('node-fetch');

const gameID = async (url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', data = { name: 'mycafe' }) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export default gameID;

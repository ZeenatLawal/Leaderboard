const fetch = require('node-fetch');

const inputName = document.getElementById('inputName');
const inputScore = document.getElementById('inputScore');

const sendScores = async (url) => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: inputName.value,
      score: inputScore.value,
    }),
  });

  inputName.value = '';
  inputScore.value = '';
  return result.json();
};

export default sendScores;

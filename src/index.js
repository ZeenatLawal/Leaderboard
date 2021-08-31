import './style.css';
import getScores from './getScores.js';
import sendScores from './sendScores.js';
import displayScores from './displayScores.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GdLxJPvwrtFQVZGkA1hP/scores/';

const refreshBtn = document.getElementById('refreshBtn');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendScores(url);
});

refreshBtn.addEventListener('click', () => {
  getScores(url).then((data) => { displayScores(data.result); });
});

window.onload = getScores(url).then((data) => { displayScores(data.result); });
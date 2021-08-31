import './style.css';

const board = document.getElementById('board');

const myScores = [{
  name: 'Zeenat',
  score: 100,
},
{
  name: 'Safa',
  score: 100,
},
{
  name: 'Aleks',
  score: 100,
}];

function displayScores() {
  board.innerHTML = '';
  myScores.forEach((myScore) => {
    const content = `${myScore.name}: ${myScore.score}`;

    const listItem = document.createElement('li');
    listItem.innerText = content;
    listItem.className = 'list-item';
    board.appendChild(listItem);
  });
}

window.addEventListener('load', () => {
  displayScores();
});
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
  for (let i = 0; i < myScores.length; i += 1) {
    const content = `${myScores[i].name}: ${myScores[i].score}`;

    const listItem = document.createElement('li');
    listItem.innerText = content;
    listItem.className = 'list-item';
    board.appendChild(listItem);
  }
}

window.addEventListener('load', () => {
  displayScores();
});
const board = document.getElementById('board');

function displayScores(myScores) {
  board.innerHTML = '';
  myScores.forEach((myScore) => {
    const content = `${myScore.user}: ${myScore.score}`;

    const listItem = document.createElement('li');
    listItem.innerText = content;
    listItem.className = 'list-item';
    board.appendChild(listItem);
  });
}

export default displayScores;
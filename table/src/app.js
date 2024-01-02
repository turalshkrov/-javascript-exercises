import data from "./data.json" assert { type: 'json' };

const tableHead = [
  "Rank", "Player", "rating"
]

const root = document.getElementById("root");

const table = document.createElement('table');
table.classList.add('table');

const thead = document.createElement('thead');
const theaddRow = document.createElement('tr');
tableHead.map(head => {
  const th = document.createElement('th');
  th.setAttribute("scope", "col")
  th.innerText = head;
  theaddRow.appendChild(th);
});

thead.appendChild(theaddRow);

const tbody = document.createElement('tbody');
for (const player of data) {
  const tr = document.createElement('tr');
  const rankTd = document.createElement('td');
  const playerTd = document.createElement('td');
  const ratingTd = document.createElement('td');
  const playerImg = document.createElement('img');
  const playerFlag = document.createElement('img');

  playerImg.setAttribute("src", player.img);
  playerFlag.setAttribute("src", player.flag);
  playerFlag.setAttribute("width", "15px");
  playerImg.className = 'me-3';
  playerFlag.className = 'ms-2';

  rankTd.innerText = "#" + player.rank;
  playerTd.appendChild(playerImg);
  playerTd.innerHTML += player.player;
  playerTd.appendChild(playerFlag);
  ratingTd.innerText = player.rating;
  
  tr.append(rankTd, playerTd, ratingTd);
  tbody.appendChild(tr);
  console.log(tr);
  
}

thead.appendChild(theaddRow);

table.appendChild(thead);
table.appendChild(tbody);

root.appendChild(table);
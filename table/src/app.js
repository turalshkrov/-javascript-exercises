import data from "./data.json" assert { type: 'json' };

const root = document.getElementsByTagName("root")[0];
const tableHead = Object.keys(data[0]);
const table = document.createElement('table');
table.className = 'table table-striped';

const thead = document.createElement('thead');
const theadRow = document.createElement('tr');
tableHead.map(head => {
  const th = document.createElement('th');
  th.setAttribute("scope", "col");
  th.innerText = head;
  theadRow.appendChild(th);
});

const tbody = document.createElement('tbody');
for (const person of data) {
  const tr = document.createElement('tr');
  for (const key in person) {
    const td = document.createElement('td');
    td.innerText = person[key];
    tr.append(td);
  }
  tbody.appendChild(tr);
}

thead.appendChild(theadRow);
table.appendChild(thead);
table.appendChild(tbody);
root.appendChild(table);
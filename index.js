let table = document.createElement("table");
let x = 9;
document.body.appendChild(table);
for (let i = 1; i <= x; i++) {
  let row = document.createElement('tr');
  table.appendChild(row);
  for (let k = 1; k <= x; k++){
    let E = document.createElement('td');
    E.innerHTML = k * i;
    row.appendChild(E);
  }
}
let alltd = document.querySelectorAll("td");
let alltr = document.querySelectorAll("tr");
for (let td of alltd) {
  td.style = "border: 1px solid black;width:20px;text-align:center;";
}

for (let td of alltd) {
  td.onmouseover = function () {
    this.parentElement.style.backgroundColor = "lime";
    let i = this.cellIndex;
    for (let tr of alltr) {
      tr.children[i].style.backgroundColor = "lime";
    }
    this.style.backgroundColor = "blue";
  }
  td.onmouseout = function () {
    this.parentElement.style.backgroundColor = "";
    let i = this.cellIndex;
    for (let tr of alltr) {
      tr.children[i].style.backgroundColor = "";
    }
    this.style.backgroundColor = "";
  }
}

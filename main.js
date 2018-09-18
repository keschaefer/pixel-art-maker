let grid = document.querySelector('.grid');

function createGrid() {
    for (let i = 0; i < 30; i++) {
      let row = grid.appendChild(document.createElement('tr'));
      row.classList.add('row'); 
        for (let j = 0; j < 50; j++) {
          let cell = row.appendChild(document.createElement('td'));
          cell.classList.add('cell');
        } 
    }
}
createGrid();

let colorsAll = document.querySelectorAll(".color");
let brush = ""
let tempColor = document.querySelector(".tempColor");

for (let i = 0; i < colorsAll.length; i++) {
    colorsAll[i].addEventListener ('click', function(e){
    brush= e.target.id;
    tempColor.setAttribute('id', brush);
    console.log(e.target.id); 
    console.log(tempColor);
    console.log(e);
 })
}

let cells = document.querySelectorAll(".cell");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function(e){
        e.target.style.backgroundColor = tempColor.style.backgroundColor;
        console.log(tempColor.style.backgroundColor);
    })
}
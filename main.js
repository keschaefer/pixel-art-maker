document.addEventListener('DOMContentLoaded', function (event) {

    let grid = document.querySelector('.grid');

    function createGrid() {
        for (let i = 0; i < 30; i++) {
            let row = grid.appendChild(document.createElement('tr'));
            row.classList.add('row');
            for (let j = 0; j < 50; j++) {
                let cell = row.appendChild(document.createElement('td'));
                cell.classList.add('cell');
                cell.setAttribute('id', 'backgroundPlain');
            }
        }
    }

    createGrid();

    let colorsAll = document.querySelectorAll('.color');
    let tempColor = document.querySelector('.tempColor');
    let brush = '';

    for (let i = 0; i < colorsAll.length; i++) {
        colorsAll[i].addEventListener('click', brushColor)
    }

    function brushColor(e) {
        brush = e.target.id;
        tempColor.setAttribute('id', brush);
    }

    let cells = document.querySelectorAll('.cell');

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', cellColor)
    }

    function cellColor(e) {
        if (e.target.id !== brush) {
            e.target.setAttribute('id', brush);
        } else {
            e.target.setAttribute('id', 'backgroundPlain');
        }  
    }

})
'use strict'

// ВАЖНЫЕ СТИЛИ
// table {
//     border - collapse: collapse;
// }
// th, td {
//     border: 1px solid black;
//     padding: 4px;
// }
// th {
//     cursor: pointer;
// }
// th:hover {
//     background: yellow;
// }


grid.onclick = function (e) {
    if (e.target.tagName != 'TH') return;
    let th = e.target;
    sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');
    let rowsArray = Array.from(tbody.rows);
    let compare;

    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }


    rowsArray.sort(compare);
    tbody.append(...rowsArray);
}
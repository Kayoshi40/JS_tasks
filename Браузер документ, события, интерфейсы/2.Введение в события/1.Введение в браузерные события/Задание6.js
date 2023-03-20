'use strict'
// ОБЯЗАТЕЛЬНЫЕ СТИЛИ
// .pane {
//     background: #edf5e1;
//     padding: 10px 20px 10px;
//     border-top: solid 2px #c4df9b;
//     position: relative;
// }
  
// .remove-button {
//     position: absolute;
//     font-size: 110%;
//     top: 0;
//     color: darkred;
//     right: 10px;
//     display: block;
//     width: 24px;
//     height: 24px;
//     border: none;
//     background: transparent;
//     cursor: pointer;
// }

let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  pane.firstChild.onclick = () => pane.remove();
}
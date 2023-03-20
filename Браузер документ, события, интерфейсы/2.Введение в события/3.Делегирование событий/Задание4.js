'use strict'
// ВАЖНЫЕ СТИЛИ  
//   .tooltip {
//     position: fixed;
//     padding: 10px 20px;
//     border: 1px solid #b3c9ce;
//     border - radius: 4px;
//     text - align: center;
//     font: italic 14px / 1.3 sans - serif;
//     color: #333;
//     background: #fff;
//     box - shadow: 3px 3px 3px rgba(0, 0, 0, .3);
// }


let tooltipElem;

document.onmouseover = function (event) {
    let target = event.target;

    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }

};
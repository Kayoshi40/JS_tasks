'use strict'
// ВАЖНЫЕ СТИЛИ
// #largeImg {
//     border: solid 1px #ccc;
//     width: 550px;
//     height: 400px;
//     padding: 5px;
// }

// #thumbs a {
//     border: solid 1px #ccc;
//     width: 100px;
//     height: 100px;
//     padding: 3px;
//     margin: 2px;
//     float: left;
// }

// #thumbs a:hover {
//     border - color: #FF9900;
// }

// #thumbs li {
//     list - style: none;
// }

// #thumbs {
//     margin: 0;
//     padding: 0;
// }

// Нужно указывтать title на картинках

thumbs.onclick = function (event) {
    let thumbnail = event.target.closest('a');

    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
}

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}
var title = document.getElementById('title').innerHTML;

document.getElementById('titleShown').innerHTML = title;

const { remote } = require('electron');

win = remote.getCurrentWindow();
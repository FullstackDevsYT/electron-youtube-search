const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

var IMG_DIR = '/img/';
var APP_DIR = '/app/';

function createWindow(){

    win = new BrowserWindow({ 
        width: 1000,
        height: 600,
        icon: path.join(__dirname, IMG_DIR, 'icon.png'),
        frame: false
     });

     win.loadURL(url.format({
         pathname: path.join(__dirname, APP_DIR, 'index.html'),
         protocol: 'file:',
         slashes: true
     }));

     win.maximize();

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

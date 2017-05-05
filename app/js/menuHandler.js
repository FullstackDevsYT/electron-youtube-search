const $ = require('jquery');

$('#minimize').click(function(){
    win.minimize();
});

$('#maximize').click(function(){
    if(!win.isMaximized()){
        win.maximize();
    }else{ 
        win.unmaximize();
    }
});

$('#close').click(function() {
    win.close();
});
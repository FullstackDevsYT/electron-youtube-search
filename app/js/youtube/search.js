const search = require('youtube-search');
var api = require('./res/json/api.json');

var key = api.key;
var button = document.getElementById('submit');
var output = document.getElementById('results');

button.addEventListener('click', find, false);

window.addEventListener('keypress', function(e) {
    if(e.keyCode == '13'){
        find();
    }
}, false);

opts = {
    maxResults: 50,
    key: key
}

function find(){

    output.innerHTML = null;

    var query = document.getElementById('query').value;

    search(query, opts, (err, results) => {
        
        if(err){
            throw err;
        }

        for(i = 0; i < results.length; i++){
            
            output.innerHTML += `
                <div class="width-100 height-20">
                    <img src="${results[i].thumbnails.default.url}"> <a href="${results[i].link}"><p>${results[i].title} by ${results[i].channelTitle}</p></a>
                </div>
            `;

        }

    });

}
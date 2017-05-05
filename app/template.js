var createPage = function(title, head, body){

    var page = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css/reset.css" rel="stylesheet">
    <link href="css/menu.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    ${head}
    <title id="title">${title}</title>
</head>
<body id="body">
    <div id="container">
        <nav>
            <div id="titleShown">
            </div>
            <div id="buttons">
                <div id="minimize">
                    <span>-</span>
                </div>
                <div id="maximize">
                    <span>+</span>
                </div>
                <div id="close">
                    <span>&times;</span>
                </div>
            </div>
        </nav>
        <main>
            ${body}
        </main>
    </div>
<script src="js/init.js"></script>
<script src="js/menuHandler.js"> </script>
<script src="js/youtube/search.js"> </script>
</body>
</html>
    `;

    document.write(page);
}

module.exports.createPage = createPage;
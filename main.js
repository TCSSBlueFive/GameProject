var AM = new AssetManager();


AM.queueDownload("./img/RobotUnicorn.png");
AM.queueDownload("./img/guy.jpg");
AM.queueDownload("./img/mushroomdude.png");
AM.queueDownload("./img/runningcat.png");
AM.queueDownload("./img/background2.jpg");
AM.queueDownload("./img/button.png")
AM.queueDownload("./img/working2.png");
AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background2.jpg")));
    gameEngine.addEntity(new PlayerCharacter(gameEngine, AM.getAsset("./img/working2.png")));
    gameEngine.addEntity(new Enemy(gameEngine, AM.getAsset("./img/runningcat.png")));
    gameEngine.addEntity(new Button(gameEngine, AM.getAsset("./img/button.png")));


    console.log("All Done!");
});

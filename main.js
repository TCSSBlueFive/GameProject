var AM = new AssetManager();



AM.queueDownload("./img/slime_sprite.png");
AM.queueDownload("./img/background2.jpg");
AM.queueDownload("./img/button.png")
AM.queueDownload("./img/idle blink 2.png");
AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background2.jpg")));
    gameEngine.addEntity(new Enemy(gameEngine, AM.getAsset("./img/slime_sprite.png")));

    gameEngine.addEntity(new PlayerCharacter(gameEngine, AM.getAsset("./img/idle blink 2.png")));
    gameEngine.addEntity(new Button(gameEngine, AM.getAsset("./img/button.png")));


    console.log("All Done!");
});

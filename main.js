var AM = new AssetManager();



AM.queueDownload("./img/slime_sprite.png");
AM.queueDownload("./img/background2.jpg");
AM.queueDownload("./img/cards.png")
AM.queueDownload("./img/idle blink.png");
AM.queueDownload("./img/16_omnimagesheet.png")
AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();
    var myEnemyDataBase = new EnemyDatabase(gameEngine, AM.getAsset("./img/slime_sprite.png"));
    var myCardDataBase = new CardDataBase(gameEngine, AM.getAsset("./img/cards.png"));
    var player = new PlayerCharacter(gameEngine, AM.getAsset("./img/16_omnimagesheet.png"), Enemy, myCardDataBase)
    var enemy = new Enemy(gameEngine, myEnemyDataBase.monsters[0]);
    var dungeon = new Dungeon(gameEngine, null, player, enemy)

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background2.jpg")));
    gameEngine.addEntity(enemy);
    gameEngine.addEntity(player);
    gameEngine.addEntity(dungeon)
    dungeon.loadDungeon();


    //gameEngine.addEntity(new Button(gameEngine, AM.getAsset("./img/button.png"), 200, 600, 75, 25, gameEngine.init));


    console.log("All Done!");
});

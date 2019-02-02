var AM = new AssetManager();


AM.queueDownload("./img/RedHealthBar.png");
AM.queueDownload("./img/GreenHealthBar.png");
AM.queueDownload("./img/slime_sprite.png");
AM.queueDownload("./img/background2.jpg");
AM.queueDownload("./img/cards.png");
AM.queueDownload("./img/idle blink.png");
AM.queueDownload("./img/player/16_omnimagesheet.png");
AM.queueDownload("./img/player/attack.png");
AM.queueDownload("./img/player/death.png");
AM.queueDownload("./img/player/dodge.png");
AM.queueDownload("./img/player/walking-right.png");
AM.queueDownload("./img/player/walking-left.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();
    var myEnemyDataBase = new EnemyDataBase(gameEngine, AM.getAsset("./img/slime_sprite.png"));
    var myCardDataBase = new CardDataBase(gameEngine, AM.getAsset("./img/cards.png"));
    var player = new PlayerCharacter(gameEngine, 
        [AM.getAsset("./img/player/16_omnimagesheet.png"), AM.getAsset("./img/player/attack.png"), AM.getAsset("./img/player/walking-right.png"), AM.getAsset("./img/player/walking-left.png"), AM.getAsset("./img/player/death.png"), AM.getAsset("./img/player/dodge.png")], myCardDataBase)
    var enemy = new Enemy(gameEngine, myEnemyDataBase.monsters[0]);
    var dungeon = new Dungeon(gameEngine, null, player, enemy)
    var cards = new CardHand(gameEngine, AM.getAsset("./img/cards.png"), player);
    var HPBar = new HealthBar(gameEngine,AM.getAsset("./img/RedHealthBar.png"), AM.getAsset("./img/GreenHealthBar.png"), 130, 13, player);

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/background2.jpg")));
    gameEngine.addEntity(enemy);
    gameEngine.addEntity(player);
    gameEngine.addEntity(dungeon);
    gameEngine.addEntity(cards);
    gameEngine.addEntity(HPBar)
    dungeon.loadDungeon();


    //gameEngine.addEntity(new Button(gameEngine, AM.getAsset("./img/button.png"), 200, 600, 75, 25, gameEngine.init));


    console.log("All Done!");
});

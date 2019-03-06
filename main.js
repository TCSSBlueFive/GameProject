var AM = new AssetManager();


AM.queueDownload("./img/RedHealthBar.png");
AM.queueDownload("./img/GreenHealthBar.png");
AM.queueDownload("./img/scrollbar.png");
AM.queueDownload("./img/scrollbar_horizontal.png")
AM.queueDownload("./img/time_sprite.png")
AM.queueDownload("./img/heart_sprite.png")
AM.queueDownload("./img/class_sprite.png")
AM.queueDownload("./img/gold_sprite.png")
AM.queueDownload("./img/floor_sprite.png")


AM.queueDownload("./img/viewing_deck_bg.png")
AM.queueDownload("./img/cards/deck_discard.png")
AM.queueDownload("./img/cards/deck_draw.png")
AM.queueDownload("./img/cards/full_deck.png")

AM.queueDownload("./img/mana_circle.png")
AM.queueDownload("./img/mana_bar.png")
AM.queueDownload("./img/mana_empty.png")

AM.queueDownload("./img/slime_sprite.png");
AM.queueDownload("./img/background2.jpg");
AM.queueDownload("./img/attack.png")

AM.queueDownload("./img/cards/fireball-card.png");
AM.queueDownload("./img/cards/ice-card.png");
AM.queueDownload("./img/cards/heal-card.png");

AM.queueDownload("./img/cards/frost_nova-card.png");
AM.queueDownload("./img/cards/conjure_refreshment-card.png");
AM.queueDownload("./img/cards/ice_block-card.png");
AM.queueDownload("./img/cards/blink-card.png");
AM.queueDownload("./img/cards/arcane_intellect-card.png");
AM.queueDownload("./img/cards/time_warp-card.png");
AM.queueDownload("./img/cards/counterspell-card.png");
AM.queueDownload("./img/cards/polymorph-card.png");


AM.queueDownload("./img/shop/shop.png");
AM.queueDownload("./img/shop/shop_background.png")


AM.queueDownload("./img/idle blink.png");
AM.queueDownload("./img/player/16_omnimagesheet.png");
AM.queueDownload("./img/player/attack.png");
AM.queueDownload("./img/player/death.png");
AM.queueDownload("./img/player/dodge.png");
AM.queueDownload("./img/player/walking-right.png");
AM.queueDownload("./img/player/walking-left.png");
AM.queueDownload("./img/reward/rewards_background.png");
AM.queueDownload("./img/reward/gold.png");
AM.queueDownload("./img/reward/addCardToDeck.png")
AM.queueDownload("./img/travel/travelBackground.png");
AM.queueDownload("./img/travel/travelBackground2.png");


AM.queueDownload("./img/travel/top banner.png");
AM.queueDownload("./img/end-turn-button.png");
AM.queueDownload("./img/proceed.png")

AM.queueDownload("./img/travel/enemy_node.png");
AM.queueDownload("./img/travel/shop_node.png");
AM.queueDownload("./img/travel/treasure_node.png");
AM.queueDownload("./img/travel/event_node.png");
AM.queueDownload("./img/travel/elite_node.png");
AM.queueDownload("./img/travel/gamble_node.png");

AM.queueDownload("./img/bridge.png");
AM.queueDownload("./img/background3.png");

AM.queueDownload("./img/succubus_basic.png");
AM.queueDownload("./img/chicken.png");
AM.queueDownload("./img/doomcluck.png");
AM.queueDownload("./img/earthelemental.png");
AM.queueDownload("./img/taurus.png");
AM.queueDownload("./img/wraith.png");
AM.queueDownload("./img/gargoyle.png");
AM.queueDownload("./img/treasure_chest.png");

AM.queueDownload("./img/enemy/boss/boss_sprite_idle.png");
AM.queueDownload("./img/enemy/boss/ygg_Idle_00-Sheet.png");
AM.queueDownload("./img/enemy/boss/ygg_Attack A_00-Sheet.png");
AM.queueDownload("./img/enemy/boss/ygg_Damage_00-Sheet.png");


AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillStyle = "#ff0000";

    
    adjustCanvasSize(canvas);

    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();
    gameEngine.width = canvas.width;
    gameEngine.height = canvas.height;

    var myManaBar = new ManaBar(gameEngine, [AM.getAsset("./img/mana_bar.png"),AM.getAsset("./img/mana_empty.png"),
                                             AM.getAsset("./img/mana_circle.png")], 100, 100, 1);
    
    var myBanner = new TopBanner(gameEngine, 1);

    var myEnemyDataBase = new EnemyDataBase(gameEngine, AM.getAsset("./img/slime_sprite.png"));
    
    var HPBar = new HealthBar(gameEngine,AM.getAsset("./img/RedHealthBar.png"), AM.getAsset("./img/GreenHealthBar.png"), 100, 200, 25);
    var player = new PlayerCharacter(gameEngine, 
        [AM.getAsset("./img/player/16_omnimagesheet.png"), AM.getAsset("./img/player/attack.png"), AM.getAsset("./img/player/walking-right.png"), AM.getAsset("./img/player/walking-left.png"), AM.getAsset("./img/player/death.png"), AM.getAsset("./img/player/dodge.png")], HPBar, myManaBar, 1)
    
    var enemy = new Enemy(gameEngine, myEnemyDataBase.bosses[0],  1);
    var dungeon = new Dungeon(gameEngine, player, enemy, myEnemyDataBase, myBanner)
    
    gameEngine.currentDungeon = dungeon;
    
    gameEngine.addEntity(new AnimatedBackground(gameEngine, AM.getAsset("./img/background3.png"), AM.getAsset("./img/bridge.png"), 1, 0, 0, -50));
    gameEngine.addEntity(myBanner);
    //console.log(AM.getAsset("./img/enemy/boss/boss_sprite_idle.png"))
    //console.log(enemy.IdleAnimation)

    gameEngine.addEntity(enemy);
    gameEngine.addEntity(player);
    gameEngine.addEntity(dungeon);


    dungeon.loadDungeon();
    console.log("All Done!");
});

function adjustCanvasSize(canvas) {

  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }

  canvas.width = myWidth - 25;
  canvas.height = myHeight - 25;
}
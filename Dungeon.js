var AM = new AssetManager();

function Dungeon(game, PlayerCharacter, Enemies, myEnemyDataBase, myBanner) {
  this.game = game;
  this.PlayerCharacter = PlayerCharacter;
  this.Enemies = Enemies;
  this.BattleOngoing = true;
  this.battle;
  this.width = 75;
  this.x = 500;
  this.currentCardCount = 5;
  this.myEnemies = myEnemyDataBase;
  this.height = 25;
  this.y = 600;
  this.banner = myBanner;
  this.rewardScene = false;
  this.travelScene = false;
  this.roomSelected = false;
  this.nextRoom = 'temp';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Dungeon.prototype.addBackMonsterRewards = function () {
  this.removeAllEntities();
  this.game.addEntity(new AnimatedBackground(this.game, AM.getAsset("./img/background3.png"), AM.getAsset("./img/bridge.png"), 1, 0, 0, -50));
  this.game.addEntity(new Background(this.game, AM.getAsset("./img/reward/rewards_background.png"), 1 ));
  this.game.addEntity(this.currentMonsterRewards);
  this.game.addEntity(new Proceed(this.game, AM.getAsset("./img/proceed.png"), this));
  this.game.addEntity(this.banner);
  this.game.addEntity(this);
}

Dungeon.prototype.setCardSelection = function () {
  this.removeAllEntities();
  this.state = 'card selection'
  this.game.addEntity(new AnimatedBackground(this.game, AM.getAsset("./img/background3.png"), AM.getAsset("./img/bridge.png"), 1, 0, 0, -50));
  this.game.addEntity(this.banner)
  this.game.addEntity(new Proceed(this.game, AM.getAsset("./img/proceed.png"), this));
  myCardSelection = new CardSelectionScene(this.game, this);
  myCardSelection.generateCards();
  this.game.addEntity(myCardSelection);  
  this.game.addEntity(this);

}

Dungeon.prototype.loadDungeon = function () {
  this.game.entities.pop();
  var cards = new CardHand(this.game, this, this.PlayerCharacter, 1);

  
  cards.generateInitialHand();

  var my_viewer = new deck_viewer(this.game, this, cards, 'fullDeck');
  this.game.addEntity(my_viewer);
  
  var turnButton = new TurnButton(this.game, cards, AM.getAsset("./img/end-turn-button.png"), 1);
  this.turnButton = turnButton;
  this.game.addEntity(cards);
  this.game.addEntity(turnButton);
  var battle = new Battle(this.game, this.Enemies, this, this.PlayerCharacter, cards);
  //this.myTravelScene = new TravelScene(this.game, this, 1);
  this.myTravelScene = new TravelScene2(this.game, this, 1);

  this.myTravelScene.generatePaths();
  this.myTravelScene.generateEncounters();
  this.myTravelScene.connectPaths();
  this.myTravelScene.test();


  //this.myTravelScene.generateBars();
  this.game.addEntity(this);
  this.battle = battle;
  
}

Dungeon.prototype.transitionToTravelScene = function () {
  this.removeAllEntities();
  this.game.addEntity(new AnimatedBackground(this.game, AM.getAsset("./img/background3.png"), AM.getAsset("./img/bridge.png"), 1, 0, 0, -50));
  this.game.addEntity(new Background(this.game, AM.getAsset("./img/travel/travelBackground2.png"), 1))
  this.banner.opacity = 1;
  this.game.addEntity(this.banner);
  this.game.addEntity(this.myTravelScene);
  this.game.addEntity(this);
}

Dungeon.prototype.removeAllEntities = function() {
  this.game.entities = [];
  

  }

//once a battle starts, add all new entities
Dungeon.prototype.addNewEntitiesBattle = function() {
  this.removeAllEntities();
  this.BattleOngoing = true;
  this.game.addEntity(new AnimatedBackground(this.game, AM.getAsset("./img/background3.png"),AM.getAsset("./img/bridge.png"), 1, 0, 0, -50));

  this.PlayerCharacter.opacity = 1;
  this.game.addEntity(this.PlayerCharacter);
  this.game.addEntity(this.banner);
  var newCardHand = new CardHand(this.game, this, this.PlayerCharacter, 1);
  newCardHand.generateInitialHand();

  this.game.addEntity(newCardHand);
  var enemy = new Enemy(this.game, this.myEnemies.monsters[this.myTravelScene.currentRoom], 1);

  //var enemy = new Enemy(this.game, this.myEnemies.monsters[getRandomInt(this.myEnemies.monsters.length)], 1);
  var battle = new Battle(this.game, enemy, this, this.PlayerCharacter, newCardHand);
  this.PlayerCharacter.Manabar.reset();
  this.battle = battle;
  this.game.addEntity(enemy);
  this.turnButton.opacity = 1;
  this.game.addEntity(this.turnButton);
  this.turnButton.cardHand = newCardHand;

  this.game.addEntity(this);
 

}

Dungeon.prototype.addNewEntitiesReward = function() {
  
  this.removeAllEntities();
  this.game.addEntity(new AnimatedBackground(this.game, AM.getAsset("./img/background3.png"), AM.getAsset("./img/bridge.png"), 1, 0, 0, -50));
  this.game.addEntity(new Background(this.game, AM.getAsset("./img/reward/rewards_background.png"), 1 ));
  console.log("transitioning to rewards")

  
  myRewards = new MonsterRewards(this.game, this, 1);
  myRewards.generateRewardsEnemy();
  this.currentMonsterRewards = myRewards; 
  this.game.addEntity(this.banner);
  this.game.addEntity(myRewards);
  this.game.addEntity(new Proceed(this.game, AM.getAsset("./img/proceed.png"), this));

  this.game.addEntity(this);

/*
  console.log("transitioning to rewards")
    opacity = .4;
    var entitiesCount = this.game.entities.length;
    for (var i = 0; i < entitiesCount; i++) {
      var entity = this.game.entities[i];
      entity.opacity = opacity;
    }
  this.BattleOngoing = false;
  this.battle.PlayerTurn = false;
  this.rewardScene = false;

  this.game.entities.pop(); //pops dungeon as currently dungeon always needs to be last thing updated
  this.game.addEntity(new Background(this.game, AM.getAsset("./img/reward/rewards_background.png"), 1 ));
  myRewards = new MonsterRewards(this.game, this, 1);
  myRewards.generateRewardsEnemy();
  this.currentMonsterRewards = myRewards;
  this.game.addEntity(myRewards);
  this.game.addEntity(this);

  */
}
Dungeon.prototype.addNewEntitiesTreasure = function() {
  this.removeAllEntities();
  this.state = 'rewards';
  this.game.addEntity(new AnimatedBackground(this.game, AM.getAsset("./img/background3.png"),AM.getAsset("./img/bridge.png"), 1, 0, 0, -50));
  this.game.addEntity(this.banner);
  this.game.addEntity(this.PlayerCharacter);
  this.PlayerCharacter.opacity = 1;
  this.game.addEntity(new TreasureChest(this.game, this, this.PlayerCharacter, AM.getAsset("./img/treasure_chest.png"), 1));
  this.game.addEntity(new Proceed(this.game, AM.getAsset("./img/proceed.png"), this));
  this.game.addEntity(this);

}


Dungeon.prototype.addNewEntitiesShop= function () {
  this.removeAllEntities();
  myShop = new shop_scene(this.game, AM.getAsset("./img/shop/shop_background.png"), this, 1 );
  this.game.addEntity(myShop);
  myShop.generateShopCards();
  this.game.addEntity(new Proceed(this.game, AM.getAsset("./img/proceed.png"), this));
  this.game.addEntity(this.banner);
  this.game.addEntity(this);
}


Dungeon.prototype.update = function () 
{

  if (this.state === 'battle_finished' && this.stateChanged) {
    this.game.entities.pop();
    this.game.addEntity(new Proceed(this.game, AM.getAsset("./img/proceed.png"), this));
    this.BattleOngoing = false;
    this.battle.PlayerTurn = false;
    this.game.addEntity(this);
    this.stateChanged = false;
  }
  if (this.state === 'rewards' && this.stateChanged) {
    this.addNewEntitiesReward();
    this.BattleOngoing = false;
    this.battle.PlayerTurn = false;
    this.stateChanged = false;
  } 
  if (this.state === 'travel' && this.stateChanged) {
    console.log("transitioning to travel")
    this.transitionToTravelScene();
    this.stateChanged = false;
  }
  if (this.roomSelected) {
    if (this.nextRoom === "setDungeonToEnemy") {
      this.addNewEntitiesBattle();
      console.log("init new enemy");

    } else if (this.nextRoom === "setDungeonToShop") {
      this.addNewEntitiesShop();
      console.log("init new shop");
      this.state = 'shop';
    } else if (this.nextRoom === "setDungeonToTreasure") {
      this.addNewEntitiesTreasure();
      console.log("init new treasure");
    } else if (this.nextRoom === "setDungeonToBoss") {
      //this.addNewEntitiesBoss();
      console.log("Init new boss");
    } else if (this.nextRoom === "setDungeonToElite") {
      //this.addNewEntitiesElite();
      console.log("Init new Elite");
    } else if (this.nextRoom === "setDungeonToGamble") {
      //this.addNewEntitiesGamble();
      console.log("init new gamble")
    }
    
    this.roomSelected = false;
  }
  if (this.cardRewards === true) {
    this.setCardSelection();
    this.cardRewards = false;
  }
  if (this.cardChosen === true) {
    this.addBackMonsterRewards();
    this.cardChosen = false;
  }
}

Dungeon.prototype.GameOver = function () {
  this.PlayerCharacter.died();
}

Dungeon.prototype.draw = function () {
}
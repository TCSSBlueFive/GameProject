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
  this.playCount = 0;
  this.banner = myBanner;
  this.rewardScene = false;
  this.travelScene = false;
  this.roomSelected = false;
  this.nextRoom = 'temp';
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


Dungeon.prototype.loadDungeon = function () {
  var battle = new Battle(this.game, this.Enemies, this, this.PlayerCharacter);
  this.myTravelScene = new TravelScene(this.game, this, 1);
  this.myTravelScene.generateBars();
  this.battle = battle;
  
}

Dungeon.prototype.transitionToTravelScene = function () {
  this.removeAllEntities();
  this.game.addEntity(new Background(this.game, AM.getAsset("./img/background2.jpg"), .5 ));
  this.game.addEntity(new Background(this.game, AM.getAsset("./img/travel/travelBackground.png"), 1))
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
  this.game.addEntity(new Background(this.game, AM.getAsset("./img/background2.jpg"), 1));
  this.PlayerCharacter.opacity = 1;
  this.game.addEntity(this.PlayerCharacter);
  this.game.addEntity(this.banner);
  var newCardHand = new CardHand(this.game, this, this.PlayerCharacter, 1);
  this.playCount = 0;
  console.log(newCardHand);
  newCardHand.generateInitialHand();
  console.log(newCardHand);


  this.game.addEntity(newCardHand);
  
  console.log(this.myEnemies);
  var enemy = new Enemy(this.game, this.myEnemies.monsters[getRandomInt(this.myEnemies.monsters.length)], 1);
  console.log(enemy);
  var battle = new Battle(this.game, enemy, this, this.PlayerCharacter);
  this.battle = battle;
  this.game.addEntity(enemy);
  this.turnButton.opacity = 1;
  this.game.addEntity(this.turnButton);
  this.turnButton.cardHand = newCardHand;

  this.game.addEntity(this);
 
  //add hp bars


}
//once a travel starts, add travel entities
Dungeon.prototype.addNewEntitiesTravel = function() {

}

Dungeon.prototype.addNewEntitiesReward = function() {
  this.game.entities.pop();
  this.game.addEntity(new Background(this.game, AM.getAsset("./img/reward/rewards_background.png"), 1 ));
  
  this.game.addEntity(new MonsterRewards(this.game, AM.getAsset("./img/reward/gold.png"), this, 1))
  this.game.addEntity(this);

}

Dungeon.prototype.update = function () {

  if (!this.BattleOngoing && this.rewardScene) {
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
  this.addNewEntitiesReward();
  } 
  if (!this.rewardScene && !this.BattleOngoing && this.travelScene) {
    console.log("transitioning to travel")

    this.transitionToTravelScene();
    this.travelScene = false;
  }
  if (this.roomSelected) {
    console.log(this.nextRoom);
    console.log(this.rewardScene);
    console.log(this.BattleOngoing);
    console.log(this.travelScene);
  if (this.nextRoom === "setDungeonToEnemy") {
    this.addNewEntitiesBattle();
    console.log("init new enemy");

  } else if (this.nextRoom === "setDungeonToShop") {
    console.log("init new shop");
  } else if (this.nextRoom === "setDungeonToTreasure") {
    console.log("init new treasure");
  } else if (this.nextRoom === "setDungeonToBoss") {
    console.log("Init new boss");
  } else if (this.nextRoom === "setDungeonToElite") {
    console.log("Init new Elite");
  } else if (this.nextRoom === "setDungeonTo")

  this.roomSelected = false;
  }
}

Dungeon.prototype.GameOver = function () {
  this.PlayerCharacter.died();
}

Dungeon.prototype.draw = function () {
  //scene manager does not need to be drawn
}
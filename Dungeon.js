var AM = new AssetManager();

function Dungeon(game, PlayerCharacter, Enemies, myBanner) {
  this.game = game;
  this.PlayerCharacter = PlayerCharacter;
  this.Enemies = Enemies;
  this.BattleOngoing = true;
  this.battle;
  this.width = 75;
  this.x = 500;
  this.currentCardCount = 5;
  this.height = 25;
  this.y = 600;
  this.playCount = 0;
  this.banner = myBanner;
  this.rewardScene = false;
  this.travelScene = false;
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
  if (this.BattleOngoing) {
    if (this.game.click) {
      if ((this.game.click['x'] > this.x && this.game.click['x'] < this.x + (this.width * this.currentCardCount))
      && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
          this.playCount++;
          
          console.log(this.PlayerCharacter.selectedMove);
          this.battle.playerMove();    
          this.game.click = false;    
      }
    }

    if(this.playCount === 3) {
      console.log("Enemies Turn");
      this.battle.enemyMoves();
      this.playCount = 0;
    }
  }
  if (!this.BattleOngoing && this.rewardScene) {
    opacity = .4;
    var entitiesCount = this.game.entities.length;
    console.log(entitiesCount);
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
    this.transitionToTravelScene();
    console.log("omegalul")
    this.travelScene = false;
  }

}

Dungeon.prototype.draw = function () {
  //scene manager does not need to be drawn
}
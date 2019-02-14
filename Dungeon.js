var AM = new AssetManager();

function Dungeon(game, PlayerCharacter, Enemies) {
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
}


Dungeon.prototype.loadDungeon = function () {
  var battle = new Battle(this.game, this.Enemies, this.PlayerCharacter);
  this.battle = battle;
  
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
  this.game.addEntity(new Background(this.game, AM.getAsset("./img/reward/rewards_background.png"), 1));


}

Dungeon.prototype.update = function () {
  if (this.BattleOngoing) {
    if (this.game.click) {
      if ((this.game.click['x'] > this.x && this.game.click['x'] < this.x + (this.width * this.currentCardCount))
      && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
          this.playCount++;
          
          console.log(this.PlayerCharacter.selectedMove);
          this.battle.playerMove();        
      }
    }
    this.game.click = false;

    if(this.playCount === 3) {
      console.log("Enemies Turn");
      this.battle.enemyMoves();
      this.playCount = 0;
    }
  }
  if (this.battle.isBattleOver) {
    //this.removeAllEntities();
    opacity = .4;
    var entitiesCount = this.game.entities.length;
    console.log(entitiesCount);
    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.game.entities[i];
        entity.opacity = opacity;
    }
    this.battle.isBattleOver = false;
    this.battle.PlayerTurn = false;
    this.addNewEntitiesReward();
  } 
}

Dungeon.prototype.draw = function () {
  //scene manager does not need to be drawn
}
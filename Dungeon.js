function Dungeon(game, background, PlayerCharacter, Enemies) {
  this.game = game;
  this.background = background;
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
  //scene manager will be entity 0
  for( let i = 1; i < this.game.entities.length; i++) {
      this.game.entities.pop();
  }
}
//once a battle starts, add all new entities
Dungeon.prototype.addNewEntitiesBattle = function() {

}
//once a travel starts, add travel entities
Dungeon.prototype.addNewEntitiesTravel = function() {

}

Dungeon.prototype.update = function () {
  if (this.BattleOngoing) {
    if (this.game.click) {
  
      if ((this.game.click['x'] > this.x && this.game.click['x'] < this.x + (this.width * this.currentCardCount))
      && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
          this.playCount++;
          
          //console.log(this.PlayerCharacter.selectedMove);
          this.battle.playerMove();        
      }
    }
    if(this.playCount === 3) {
      console.log("Enemies Turn");
      this.battle.enemyMoves();
      this.playCount = 0;
    }
  }
}
Dungeon.prototype.draw = function () {
  //scene manager does not need to be drawn
}
function Dungeon(game, background, PlayerCharacter, Enemies) {
  this.game = game;
  this.background = background;
  this.PlayerCharacter = PlayerCharacter;
  this.Enemies = Enemies;
}

Dungeon.prototype.loadDungeon = function () {
  var battle = new Battle(this.game, this.Enemies, this.PlayerCharacter);

  var count = 0
  while (!battle.isBattleOver && count < 2) {
    battle.enemyMoves();
    battle.playerMove();
    count++;
  }
}

Dungeon.prototype.update = function () {
  //needs to be added
}

Dungeon.prototype.draw = function () {
  // just a place holder because of the way we are doing the game engine
}
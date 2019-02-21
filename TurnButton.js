function TurnButton(game, spritesheet, opacity) {
  this.x = 1000;
  this.y = 550;
  this.dimensions = 65;
  this.opacity = opacity;
  this.spritesheet = spritesheet;
  this.game = game;
  this.ctx = game.ctx;
};



TurnButton.prototype.draw = function () {
  this.ctx.drawImage(this.spritesheet,
                 this.x, this.y);
};

TurnButton.prototype.update = function () {
  if (this.game.click) {
    if ((this.game.click['x'] > this.x - this.dimensions && this.game.click['x'] < this.x + this.dimensions  )
        && (this.game.click['y'] > this.y - this.dimensions && this.game.click['y'] < this.y + this.dimensions)) {
        if (this.game.currentDungeon && this.game.currentDungeon.BattleOngoing && this.game.currentDungeon.battle.getPlayerTurn()) {
          this.game.currentDungeon.battle.endPlayerTurn();
        }
    }
  }
};
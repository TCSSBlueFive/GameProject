function TurnButton(game, cardHand, spritesheet, opacity) {
  this.x = 1250;
  this.y = 400;
  this.dimensions = 125;
  this.opacity = opacity;
  this.spritesheet = spritesheet;
  this.game = game;
  this.ctx = game.ctx;
  this.cardHand = cardHand;
};



TurnButton.prototype.draw = function () {
  this.ctx.drawImage(this.spritesheet,
                 this.x, this.y);
};

TurnButton.prototype.update = function () {
  if (this.game.click) {
    if ((this.game.click['x'] > this.x + 30 && this.game.click['x'] < this.x + this.dimensions  )
        && (this.game.click['y'] > this.y + 30 && this.game.click['y'] < this.y + this.dimensions)) {


        if (this.game.currentDungeon && this.game.currentDungeon.BattleOngoing && this.game.currentDungeon.battle.getPlayerTurn()) {
          this.game.currentDungeon.battle.endPlayerTurn();
          this.cardHand.useAll();

          this.cardHand.generateNewHand();
          this.game.currentDungeon.battle.enemyMoves();
          this.game.currentDungeon.playCount = 0;
          this.game.currentDungeon.PlayerCharacter.Manabar.reset();
          this.game.currentDungeon.PlayerCharacter.block = 0;

      }
      this.game.click = false;

    }
  }
}

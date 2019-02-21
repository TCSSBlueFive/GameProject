function TurnButton(game, cardHand, spritesheet, opacity) {
  this.x = 1000;
  this.y = 550;
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
        console.log("this.game.currentDungeon" + this.game.currentDungeon) 
        console.log("ongoing battle" + this.game.currentDungeon.BattleOngoing) 
        console.log("playerturn" + this.game.currentDungeon.battle.getPlayerTurn) 

        if (this.game.currentDungeon && this.game.currentDungeon.BattleOngoing && this.game.currentDungeon.battle.getPlayerTurn()) {
          this.game.currentDungeon.battle.endPlayerTurn();
          this.cardHand.generateNewHand();
          console.log("Enemies Turn");
          this.game.currentDungeon.battle.enemyMoves();
          this.game.currentDungeon.playCount = 0;
      }
      this.game.click = false;

    }
  }
}

function TurnButton(game, cardHand, spritesheet, opacity) {
  this.y = game.height * .73;
  this.x = game.width * .82;
  this.dimensions = 130;
  this.opacity = opacity;
  this.spritesheet = spritesheet;
  this.game = game;
  this.ctx = game.ctx;
  this.cardHand = cardHand; 
};



TurnButton.prototype.draw = function () {
  this.ctx.drawImage(this.spritesheet,
                 this.x, this.y, this.dimensions, this.dimensions);
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

TurnButton.prototype.rotateAndCache = function (image, angle) {
  var offscreenCanvas = document.createElement('canvas');
  var size = Math.max(image.width, image.height);
  offscreenCanvas.width = size;
  offscreenCanvas.height = size;
  var offscreenCtx = offscreenCanvas.getContext('2d');
  offscreenCtx.save();
  offscreenCtx.translate(size / 2, size / 2);
  offscreenCtx.rotate(angle);
  offscreenCtx.translate(0, 0);
  offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));
  offscreenCtx.restore();
  //offscreenCtx.strokeStyle = "red";
  //offscreenCtx.strokeRect(0,0,size,size);
  return offscreenCanvas;
}
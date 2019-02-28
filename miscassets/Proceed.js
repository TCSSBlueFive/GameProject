function Proceed(game, spritesheet, dungeon) {
  this.x = 1170;
  this.y = 535;
  this.dimensions = 125;
  this.opacity = 1;
  this.spritesheet = spritesheet;
  this.game = game;
  this.ctx = game.ctx;
  this.dungeon = dungeon;
};



Proceed.prototype.draw = function () {
  this.ctx.drawImage(this.spritesheet,
                 this.x, this.y);
};

Proceed.prototype.update = function () {
    
  if (this.game.click) {
    if ((this.game.click['x'] > this.x + 15 && this.game.click['x'] < this.x + 170  )
    && (this.game.click['y'] > this.y + 50 && this.game.click['y'] < this.y + 120)) {
    
        var userState = this.dungeon.state;
        console.log(userState)
        if (userState === 'card selection') {
            this.dungeon.cardChosen = true;
            this.dungeon.state = 'rewards'
        } else if (userState === 'shop') {
            
        } else if (userState === 'rewards') {
            this.dungeon.state = 'travel';
            this.dungeon.stateChanged = true;
        } else if (userState === 'battle_finished') {
          this.dungeon.state = 'rewards';
          this.dungeon.stateChanged = true;
        }
        this.game.click = false;

        }

    }
}

function Proceed(game, spritesheet, dungeon) {
  this.x = game.width * .875;
  this.y = game.height * .5;
  this.dimensions = 125;
  this.opacity = 1;
  this.spritesheet = spritesheet;
  this.game = game;
  this.width = game.width * .108475;
  this.height = game.height * .139393939;
  this.ctx = game.ctx;
  this.dungeon = dungeon;
};



Proceed.prototype.draw = function () {
  this.ctx.drawImage(this.spritesheet,
                 this.x, this.y, this.width, this.height);
};

Proceed.prototype.update = function () {
    
  if (this.game.click) {
    if ((this.game.click['x'] > this.x + 10 && this.game.click['x'] < this.x + this.width  )
    && (this.game.click['y'] > this.y + 50 && this.game.click['y'] < this.y + this.height)) {
    
        var userState = this.dungeon.state;
        console.log(userState)
        if (userState === 'card selection') {
            this.dungeon.cardChosen = true;
            this.dungeon.state = 'rewards'
        } else if (userState === 'before_travel') {
            this.dungeon.state = 'travel'
            this.dungeon.stateChanged = true;
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

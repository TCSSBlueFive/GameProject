function deck_viewer(game, spritesheet, dungeon) {
    this.x = 0;
    this.y = 0;
    this.dimensions = 125;
    this.opacity = 1;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
    this.dungeon = dungeon;
  };
  
  
  
  deck_viewer.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
  };
  
  deck_viewer.prototype.update = function () {
      
    if (this.game.click) {
      if ((this.game.click['x'] > this.x + 15 && this.game.click['x'] < this.x + 170  )
      && (this.game.click['y'] > this.y + 50 && this.game.click['y'] < this.y + 120)) {
      
          this.game.click = false
          }
  
      }
  }
  
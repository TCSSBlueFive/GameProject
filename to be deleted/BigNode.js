// no inheritance
/*outdated code used for travel
function BigNode(game, travelScene, dungeon, position, spritesheet, fn, x, y, opacity) {
    this.x = x;
    this.y = y;
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.game = game;
    this.fn = fn;
    this.ctx = game.ctx;
    this.position = position;
    this.width = 170;
    this.height = 175;;
    this.dungeon = dungeon;
    this.travelScene = travelScene;

};

BigNode.prototype.draw = function () {

    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
    this.ctx.restore();

};

BigNode.prototype.update = function () {
    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width  )
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            if (this.position === this.travelScene.currentRoom) {
                this.dungeon.roomSelected = true;
                this.dungeon.nextRoom = this.fn;
                this.game.click = false;
                this.travelScene.currentRoom += 1;
                this.opacity = 0;
            }
            
            
        }
    }
};*/
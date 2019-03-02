// no inheritance
function travel_node2(game, travelScene, dungeon, position, spritesheet, fn, x, y) {
    this.x = x;
    this.y = y;
    this.yOrig = y;
    this.opacity = 1;
    this.xOrig = x;
    this.spritesheet = spritesheet;
    this.game = game;
    this.fn = fn;
    this.ctx = game.ctx;
    this.position = position;
    this.width = 89;
    this.height = 118;
    this.dungeon = dungeon;
    this.travelScene = travelScene;
    this.linked = [];


};

travel_node2.prototype.draw = function () {

    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
    this.ctx.restore();

};

travel_node2.prototype.update = function () {
    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width  )
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            
            this.dungeon.roomSelected = true;
            this.dungeon.nextRoom = this.fn;
            this.game.click = false;
            //this.travelScene.currentRoom += 1;
        }
    }
};
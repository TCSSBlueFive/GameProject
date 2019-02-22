// no inheritance
function travel_node(game, travelScene, travelBar, dungeon, position, spritesheet, fn, x, y, opacity) {
    this.x = x;
    this.y = y;
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.game = game;
    this.fn = fn;
    this.ctx = game.ctx;
    this.position = position;
    this.width = 89;
    this.height = 118;
    this.travelBar = travelBar;
    this.dungeon = dungeon;
    this.travelScene = travelScene;

};

travel_node.prototype.draw = function () {

    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
    this.ctx.restore();

};

travel_node.prototype.update = function () {
    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width  )
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {

            
            if (this.position === this.travelScene.currentRoom) {
                this.dungeon.roomSelected = true;
                this.dungeon.nextRoom = this.fn;
                this.game.click = false;
                this.travelScene.currentRoom += 1;
                for(let i = 0; i < this.travelBar.travelnodes.length; i++) {
                    this.travelBar.travelnodes[i].opacity = 0;
                }
            }
            
            
        }
    }
};
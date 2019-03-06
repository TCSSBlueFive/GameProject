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
    this.width = game.width * .03016;
    this.height = game.height *.071515;
    this.dungeon = dungeon;
    this.travelScene = travelScene;
    this.linked = [];


};

travel_node2.prototype.draw = function () {

    this.ctx.save();
    this.ctx.globalAlpha = this.opacity;
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y, this.width, this.height);
    this.ctx.restore();

};

travel_node2.prototype.update = function () {
    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width  )
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            if (this.travelScene.currentNode === 'none') {
                if (this.travelScene.encounters[0].includes(this)) {
                    this.travelScene.currentNode = this;
                    this.clicked = true;
                    this.dungeon.roomSelected = true;
                    this.dungeon.nextRoom = this.fn;
                    this.game.click = false;
                }
            } else {
                for (let i = 0; i < this.travelScene.currentNode.linked.length; i++) {
                    if (this.travelScene.currentNode.linked[i] === this) {
                        this.travelScene.currentNode.linkedto = this;
                        this.clicked = true;
                        this.travelScene.currentNode = this;
                        this.dungeon.roomSelected = true;
                        this.dungeon.nextRoom = this.fn;
                        this.game.click = false; 
                    }
                }
            }

            //this.travelScene.currentRoom += 1;
        }
    }
};
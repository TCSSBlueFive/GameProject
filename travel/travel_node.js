// no inheritance
function travel_node(game, spritesheet, fn, x, y, opacity) {
    this.x = x;
    this.y = y;
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.game = game;
    this.fn = fn;
    this.ctx = game.ctx;
};

travel_node.prototype.draw = function () {

    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

travel_node.prototype.update = function () {

};
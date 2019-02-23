// no inheritance
function Background(game, spritesheet, opacity, x, y, speed) {
    this.animation = new Animation(spritesheet, 1, 1, 1, 1, 1, true, 1, 0, 0);
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

Background.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x <= -1400) this.x = 1390; // weird things going on with image positioning after it loops around
};
//frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
// inheritance 
function Enemy(game, spritesheet) {
    this.animation = new Animation(spritesheet, 256, 256, 1, .075, 18, true, 0.5);
    this.x = 1000;
    this.y = 400;
    this.health = 100;
    this.attack = 20;
    this.speed = 0;
    this.game = game;
    this.ctx = game.ctx;
   // Entity.call(this, game, 1000, 400);
}


Enemy.prototype.update = function () {
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;
    if (this.x > 1400) this.x = -230;   
}

Enemy.prototype.draw = function () {
    this.animation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 1);
   // Entity.prototype.draw.call(this);
}

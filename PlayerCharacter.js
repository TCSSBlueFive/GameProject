//frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
function PlayerCharacter(game, spritesheet) {
    this.animation = new Animation(spritesheet, 200, 300, 5, 0.10, 1, true, 1);
    this.x = 200;
    this.y = 250;
    this.health = 100;
    this.attack = 30;

    this.speed = 0;
    this.game = game;
    this.ctx = game.ctx;
}

PlayerCharacter.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
   // this.ctx.drawImage(this.spritesheet,this.x, this.y);
}

PlayerCharacter.prototype.update = function () {
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;
    if (this.x > 1400) this.x = -230;
}

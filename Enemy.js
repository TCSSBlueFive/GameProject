//frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
// inheritance 
function Enemy(game, EnemyFromDatabase) {
    this.animation = EnemyFromDatabase.animation;
    this.x = 1000;
    this.y = 400;
    this.health = EnemyFromDatabase.health;
    this.attack = EnemyFromDatabase.attack;
    this.speed = 0;
    console.log(this.attack);
    console.log(EnemyFromDatabase)
    this.game = game;
    this.ctx = game.ctx;
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


// inheritance 
function Enemy(game, spritesheet) {
    this.animation = new Animation(spritesheet, 512, 256, 2, 0.05, 8, true, 0.5);
    this.x = 200;
    this.y = 300;
    this.health = 100;
    this.attack = 20;
    this.speed = 0;
    this.ctx = game.ctx;
    Entity.call(this, game, 1000, 400);
}

Enemy.prototype = new Entity();
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 1400) this.x = -230;
    Entity.prototype.update.call(this);
}

Enemy.prototype.draw = function () {
    this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
    Entity.prototype.draw.call(this);
}

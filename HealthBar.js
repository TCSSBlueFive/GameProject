function HealthBar(game, spritesheet, spritesheet2, health, width, height) {

    this.spritesheet = spritesheet;
    this.spritesheet2 = spritesheet2;
    this.game = game;
    this.width = width;
    this.height = height;
    this.ctx = game.ctx;
    this.health = health;
    this.maxHealth = health;
    this.healthPCNT = 1;
};

HealthBar.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.width, this.height);
    this.ctx.drawImage(this.spritesheet2,
                   this.x, this.y, ((this.health/this.maxHealth)* this.width), this.height);
};

HealthBar.prototype.update = function (health) {
    this.health = health;
    if (health <= 0) {
        this.health = 0;
    }
};
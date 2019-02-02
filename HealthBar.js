function HealthBar(game, spritesheet, spritesheet2, width, height, creature, x, y) {
    
    this.x = creature.healthBarX;
    this.y = creature.healthBarY;
    this.spritesheet = spritesheet;
    this.spritesheet2 = spritesheet2;
    this.game = game;
    this.width = width;
    this.height = height;
    this.creature = creature;
    this.health = creature.health;
    this.ctx = game.ctx;
};

HealthBar.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y);
    this.ctx.drawImage(this.spritesheet2,
                   this.x, this.y, (this.health/ 100) * this.width, this.height);
};

HealthBar.prototype.update = function () {
    this.health = this.creature.health;
};
function HealthBar(game, spritesheet, spritesheet2, width, height) {

    this.spritesheet = spritesheet;
    this.spritesheet2 = spritesheet2;
    this.game = game;
    this.width = width;
    this.height = height;
    this.ctx = game.ctx;
    this.health = 100;
};

HealthBar.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y);
    this.ctx.drawImage(this.spritesheet2,
                   this.x, this.y, (this.health/ 100) * this.width, this.height);
};

HealthBar.prototype.update = function () {
};
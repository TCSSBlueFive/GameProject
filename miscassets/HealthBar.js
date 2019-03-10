function HealthBar(game, spritesheet, spritesheet2, spritesheet3, health, width, height) {

    this.spritesheet = spritesheet;
    this.spritesheet2 = spritesheet2;
    this.spritesheet3 = spritesheet3;
    console.log(spritesheet3)
    this.game = game;
    this.width = width;
    this.height = height;
    this.ctx = game.ctx;
    this.health = health;
    this.block = 0;
    this.maxHealth = health;
    this.healthPCNT = 1;
};

HealthBar.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.width, this.height);
    this.ctx.drawImage(this.spritesheet2,
                   this.x, this.y, ((this.health/this.maxHealth)* this.width), this.height);

    this.ctx.drawImage(this.spritesheet3,
                    this.x, this.y, ((this.block/this.maxHealth)* this.width), this.height);
 
     
    this.ctx.save();
    this.ctx.font = "30px Impact";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText(this.health + " / " + this.maxHealth , this.x + 35, this.y + 25 ); 
    this.ctx.restore();

    if (this.block > 0) {
        this.ctx.save();
        this.ctx.font = "30px Impact";
        this.ctx.fillStyle = "#FFA500";
        this.ctx.fillText("Block: " + this.block , this.x, this.y); 
        this.ctx.restore();
    }
};

HealthBar.prototype.update = function (health, maxhealth, block) {
    this.health = health;
    this.block = block;
    this.maxHealth = maxhealth;
    if (health <= 0) {
        this.health = 0;
    }
    if (block <= 0) {
        this.block = 0;
    }
};




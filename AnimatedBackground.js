// no inheritance
function AnimatedBackground(game, spritesheet, staticsprite, opacity, x, y, speed) {
    this.animation = new Animation(spritesheet, 1, 1, 1, 1, 1, true, 1, 0, 0);
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.staticsprite = staticsprite;
    this.staticspritex = 0;
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
    this.staticspritey = this.height *.625;
    this.ctx = game.ctx;
};

AnimatedBackground.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y, this.width, this.height);
    this.ctx.drawImage(this.spritesheet,
                    this.x + this.width, this.y, this.width, this.height);

    this.ctx.drawImage(this.staticsprite,
                    this.staticspritex, this.staticspritey)                
};

AnimatedBackground.prototype.update = function () {
    this.x += this.game.clockTick * this.speed;
    if (this.x <= - this.width) 
        this.x = 0; // weird things going on with image positioning after it loops around

};
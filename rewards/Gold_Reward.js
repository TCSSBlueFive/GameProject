function Gold_Reward(game, spritesheet, x, y, width, height, opacity){
    //this.x = 520;// each card will be 75 units wide for now
    //this.y = 200; //w was 350 h was 110
    this.x = x;
    this.y = y;
    this.width = width 
    this.height = height
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

 

Gold_Reward.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet, this.x, this.y);
        
};

Gold_Reward.prototype.update = function () {

};
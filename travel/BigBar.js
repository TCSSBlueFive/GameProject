var AM = new AssetManager();


function BigBar(game, spritesheet, x, y, opacity){
    this.x = x;
    this.y = y;
    this.opacity = opacity;
    this.game = game;
    this.ctx = game.ctx;
    this.spritesheet = spritesheet;

    this.NodeDataBase = new NodeDataBase();
};


BigBar.prototype.generateNode = function () {
     
}

BigBar.prototype.draw = function () {

    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};
BigBar.prototype.update = function () {     

    
};



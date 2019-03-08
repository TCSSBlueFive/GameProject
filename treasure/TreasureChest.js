function TreasureChest(game, dungeon, PlayerCharacter, spritesheet, opacity){
    this.x = game.width * .65;
    this.y = game.height * .5;
    this.width = game.width * .1186; 
    this.dungeon = dungeon;
    this.height = game.height * .166; 
    this.opacity = opacity;
    this.PlayerCharacter = PlayerCharacter;

    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};



TreasureChest.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.width, this.height);
    
};

TreasureChest.prototype.update = function () {
    if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
    && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
        var index = this.game.entities.indexOf(this);
        if (index > -1) {
            this.game.entities.splice(index, 1);
        }        
        this.game.click = false;
        this.game.entities.pop();
        myRewards = new MonsterRewards(this.game, this.dungeon, 1);
        myRewards.generateRewardsEnemy();
        this.dungeon.currentMonsterRewards = myRewards;
        this.game.addEntity(myRewards);  
        this.game.addEntity(this.dungeon)
    }
};
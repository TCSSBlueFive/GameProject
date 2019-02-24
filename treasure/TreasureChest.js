function TreasureChest(game, dungeon, PlayerCharacter, spritesheet, opacity){
    this.x = 1000;
    this.y = 420;
    this.width = 175; //card width
    this.dungeon = dungeon;
    this.height = 137; //card height
    this.opacity = opacity;
    this.PlayerCharacter = PlayerCharacter;

    this.spritesheet = spritesheet;

    
    this.game = game;
    this.ctx = game.ctx;
    //this.fn = fn; 
};



TreasureChest.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y);
    
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
        this.game.addEntity(new Background(this.game, AM.getAsset("./img/reward/rewards_background.png"), 1 ));
        myRewards = new MonsterRewards(this.game, this.dungeon, 1);
        myRewards.generateRewardsEnemy();
        this.dungeon.currentMonsterRewards = myRewards;
        this.game.addEntity(myRewards);  
        this.game.addEntity(this.dungeon)
    }
};
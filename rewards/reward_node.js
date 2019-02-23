function reward_node(game, rewardFromDatabase, MonsterRewards, x, y){
    //this.x = 520;// each card will be 75 units wide for now
    //this.y = 200; //w was 350 h was 110
    this.x = x;
    this.y = y;
    this.MonsterRewards= MonsterRewards;
    this.width = rewardFromDatabase.width 
    this.height = rewardFromDatabase.height
    this.opacity = rewardFromDatabase.opacity;
    this.spritesheet = rewardFromDatabase.spritesheet;
    this.game = game;
    this.fn = rewardFromDatabase.fn;
    this.ctx = game.ctx;
};

 

reward_node.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet, this.x, this.y);
        
};

reward_node.prototype.update = function () {

        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.game.click = false;

            var index = this.MonsterRewards.rewards.indexOf(this);
            if (index > -1) {
                this.MonsterRewards.rewards.splice(index, 1);
            }
            MonsterRewards.fn = this.fn
        
        
    }
    
};
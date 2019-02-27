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
    this.value = rewardFromDatabase.value;
    this.game = game;
    this.text = rewardFromDatabase.text;
    this.fn = rewardFromDatabase.fn;
    this.ctx = game.ctx;
    this.value = rewardFromDatabase.value
    this.yOffset = 75;
    this.xOffset = 50;
};

 

reward_node.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet, this.x, this.y);

    this.ctx.save();
    this.ctx.font = "30px Impact";
    this.ctx.textAlign = "start";
    this.ctx.textBaseline = "bottom";
    this.ctx.fillStyle = "#ffffff";

    this.ctx.fillText((this.text), this.x + 50, this.y + this.yOffset); 
    
    
    //this.ctx.restore();
        
};

reward_node.prototype.update = function () {

        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.game.click = false;
            var index = this.MonsterRewards.rewards.indexOf(this);
            if (index > -1) {
                this.MonsterRewards.rewards.splice(index, 1);
            }
            if (this.fn === 'addGoldToPlayer') {
                this.MonsterRewards.userChoseGold(this.value);
            } else if (this.fn === 'addCardToDeck') {
                this.MonsterRewards.userChoseCard();
            }
           
    }
};
var AM = new AssetManager();


function MonsterRewards(game,dungeon, opacity){
    this.dungeon = dungeon;
    this.x = game.width * .42;// each card will be 75 units wide for now
    this.y = 700;
    this.width = 620;
    this.height = 195;
    this.rewards = [];
    this.opacity = opacity;
    this.currentRewardCount = 4;
    this.action = 'none';
    this.rewardFromDatabase = new RewardDatabase();
    this.game = game;
    this.ctx = game.ctx;

    this.topbannerx = this.x - 60
    this.topbannery = this.y - 300;
};

MonsterRewards.prototype.generateRewardsEnemy = function () {

    this.rewards[0] = new reward_node(this.game, this.rewardFromDatabase.rewards[0], this, this.x, this.y)
    this.rewards[1] = new reward_node(this.game, this.rewardFromDatabase.rewards[1], this, this.x, this.y + this.height)
    this.rewards[2] = new reward_node(this.game, this.rewardFromDatabase.rewards[0], this, this.x, this.y + (this.height * 2))
    this.rewards[3] = new reward_node(this.game, this.rewardFromDatabase.rewards[0], this, this.x, this.y + (this.height *3))

}

MonsterRewards.prototype.generateRewardsBoss = function () {

}

MonsterRewards.prototype.generateRewardsTreasure = function () {

}

MonsterRewards.prototype.draw = function () {
    this.ctx.fillStyle = '#808080'
    this.ctx.fillRect(this.x - 60, this.y - 60, this.width + 110, this.height * 4 + 120);
    this.ctx.fillRect(this.topbannerx -40, this.topbannery - 40, this.width + 190, 190);

    this.ctx.fillStyle = '#000000'
    this.ctx.fillRect(this.x - 40, this.y - 40, this.width + 70, this.height * 4 + 80);
    this.ctx.fillRect(this.topbannerx -20, this.topbannery - 20, this.width + 150, 150);
    this.ctx.fillStyle = '#808080'
    this.ctx.fillRect(this.x - 15, this.y - 15, this.width + 20, this.height * 4 + 30);
    this.ctx.fillRect(this.topbannerx, this.topbannery, this.width + 110, 110);

    
  //  

    this.ctx.fillStyle = "#FFFFFF"
    this.ctx.font = '55px Impact'
    this.ctx.fillText('Monster Loot!', this.topbannerx  + 200, this.topbannery + 80);

    for (let i = 0; i < this.rewards.length; i++) {
        this.rewards[i].draw();
    }
    
};
MonsterRewards.prototype.userChoseGold = function (num) {
    this.dungeon.PlayerCharacter.gold += num;

}
MonsterRewards.prototype.userChoseCard = function () {
    this.dungeon.cardRewards = true;

}

MonsterRewards.prototype.update = function () {    
    for (let i = 0; i < this.rewards.length; i++) {
        
        this.rewards[i].update();
    }

};

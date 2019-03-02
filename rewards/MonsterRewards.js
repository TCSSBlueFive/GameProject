var AM = new AssetManager();


function MonsterRewards(game,dungeon, opacity){
    this.dungeon = dungeon;
    this.x = 878;// each card will be 75 units wide for now
    this.y = 340;
    this.width = 620;
    this.height = 195;
    this.rewards = [];
    this.opacity = opacity;
    this.currentRewardCount = 4;
    this.action = 'none';
    this.rewardFromDatabase = new RewardDatabase();
    this.game = game;
    this.ctx = game.ctx;
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

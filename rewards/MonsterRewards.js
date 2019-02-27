var AM = new AssetManager();


function MonsterRewards(game,dungeon, opacity){
    this.dungeon = dungeon;
    this.x = 520;// each card will be 75 units wide for now
    this.y = 200;
    this.width = 350;
    this.height = 110;
    this.rewards = [];
    this.opacity = opacity;
    this.currentRewardCount = 4;
    this.action = 'none';
    this.rewardFromDatabase = new RewardDatabase();
    //this.rewards = [new Gold_Reward(game, spritesheet, 520, 200, 350, 110, 1), new Gold_Reward(game, spritesheet, 540, 310, 350, 110, 1),
       // new Gold_Reward(game, spritesheet, 560, 420, 350, 110, 1), new Gold_Reward(game, spritesheet, 580, 530, 350, 110, 1) ];

    this.game = game;
    this.ctx = game.ctx;
    //this.fn = fn; 
};

MonsterRewards.prototype.generateRewardsEnemy = function () {

    this.rewards[0] = new reward_node(this.game, this.rewardFromDatabase.rewards[0], this, this.x, this.y)
    this.rewards[1] = new reward_node(this.game, this.rewardFromDatabase.rewards[1], this, this.x, this.y + this.height)
    this.rewards[2] = new reward_node(this.game, this.rewardFromDatabase.rewards[0], this, this.x, this.y + (this.height * 2))
    this.rewards[3] = new reward_node(this.game, this.rewardFromDatabase.rewards[0], this, this.x, this.y + (this.height *3))

    console.log(this.rewards[3])

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

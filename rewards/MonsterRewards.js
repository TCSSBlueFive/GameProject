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

MonsterRewards.prototype.update = function () {    
    for (let i = 0; i < this.rewards.length; i++) {
        
        this.rewards[i].update();
        if (this.action === 'addGoldToPlayer') {
            console.log("goooold");
            this.action = 'none';
        } else if (this.action === 'addCardToDeck') {
            console.log("caaaaard");
            this.dungeon.cardRewards = true;
            //remove monster rewards
            //add card selection
            //add back monster rewards
            // i suppose
            this.action = 'none';

        }
    } 
    if (this.game.click) {
        if((this.game.click['x'] > 1145 && this.game.click['x'] < 1330)
        && (this.game.click['x'] > 520 && this.game.click['y'] < 607)) {
            this.game.click = false;
            console.log(this.dungeon);
            this.dungeon.rewardScene = false;
            this.dungeon.travelScene = true;
            console.log(this.dungeon);

            var entitiesCount = this.game.entities.length;
                for (var i = 0; i < entitiesCount; i++) {
                    var entity = this.game.entities[i];
                    entity.opacity = 1;
                }

        }
    }
};

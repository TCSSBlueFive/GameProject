var AM = new AssetManager();


function MonsterRewards(game, spritesheet,dungeon, opacity){
    this.dungeon = dungeon;
    this.x = 520;// each card will be 75 units wide for now
    this.y = 200;
    this.width = 350;
    this.height = 110;
    this.opacity = opacity;
    this.currentRewardCount = 4;
    this.spritesheet = spritesheet;
    this.rewards = [new Gold_Reward(game, spritesheet, 520, 200, 350, 110, 1), new Gold_Reward(game, spritesheet, 540, 310, 350, 110, 1),
        new Gold_Reward(game, spritesheet, 560, 420, 350, 110, 1), new Gold_Reward(game, spritesheet, 580, 530, 350, 110, 1) ];

    this.game = game;
    this.ctx = game.ctx;
    //this.fn = fn; 
};

 

MonsterRewards.prototype.draw = function () {
    for (let i = 0; i < this.rewards.length; i++) {
        this.rewards[i].y = this.y + (this.height * i)
        this.rewards[i].draw();
    }
    
};

MonsterRewards.prototype.update = function () {     
    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + (this.height* this.currentRewardCount))) {
            console.log("You've selected item" + Math.floor((this.game.click['y'] - this.y) / 110));
            var reward = this.rewards[Math.floor((this.game.click['y'] - this.y) / 110)];
            this.game.click = false;
            var index = this.rewards.indexOf(reward);
            if (index > -1) {
                this.rewards.splice(index, 1);
            }
            this.currentRewardCount -= 1;
            console.log(this.rewards);
            var reward = this.rewards[Math.floor((this.game.click['y'] - this.y) / 110)];
        }
        if((this.game.click['x'] > 1145 && this.game.click['x'] < 1330)
        && (this.game.click['x'] > 520 && this.game.click['y'] < 607)) {
            this.dungeon.rewardScene = false;
            this.dungeon.travelScene = true;
        }
    }
    
};

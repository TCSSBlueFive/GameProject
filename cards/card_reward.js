function card_reward(game, dungeon, cardFromDatabase, x, y){
    
    this.x = x;
    this.y = y;
    this.width = cardFromDatabase.width 
    this.height = cardFromDatabase.height
    this.opacity = 1;
    this.spritesheet = cardFromDatabase.spritesheet;
    this.cardFromDatabase = cardFromDatabase;
    this.game = game;
    this.ctx = game.ctx;
    this.dungeon = dungeon;
};

 

card_reward.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet, this.x, this.y);
        
};

card_reward.prototype.update = function () {

        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.dungeon.PlayerCharacter.DeckList.push(this.cardFromDatabase);
            this.dungeon.cardChosen = true;
            this.game.click = false;
    }
    
};
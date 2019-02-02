function CardHand(game, spritesheet, PlayerCharacter){
    this.x = 500;// each card will be 75 units wide for now
    this.y = 600;
    this.width = 75;
    this.height = 25;
    //this.maxCard = 9;
    this.currentCardCount = 5;
    this.PlayerCharacter = PlayerCharacter;
    this.DeckList = this.PlayerCharacter.DeckList;
    this.spritesheet = spritesheet;
    this.currentHand = this.DeckList.slice(0, 5);
    

    this.game = game;
    this.ctx = game.ctx;
    //this.fn = fn; 
};



CardHand.prototype.draw = function () {
    for (let i = 0; i < this.currentCardCount; i++) {
        this.ctx.drawImage(this.spritesheet, this.x + (i * 75), this.y);
    }
    
};

CardHand.prototype.update = function () {
    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + (this.width * this.currentCardCount))
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            console.log("You've selected card" + Math.floor((this.game.click['x'] - this.x) / 75));
            this.PlayerCharacter.selectedMove = this.currentHand[Math.floor((this.game.click['x'] - this.x) / 75)];
        }
    }
    this.game.click = false;
};
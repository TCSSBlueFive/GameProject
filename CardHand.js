/* button prototype */

function CardHand(game, PlayerCharacter){
    this.x = 200;// each card will be 75 units wide for now
    this.y = 600;
    this.width = 75;
    this.height = 25;
    this.maxCard = 9;
    this.currentCardCount = 4;
    this.PlayerCharacter = PlayerCharacter;
    this.abilities = PlayerCharacter.abilities;
    

    this.game = game;
    this.ctx = game.ctx;
    this.fn = fn; 
};



CardHand.prototype.draw = function () {
    for (let i = 0; i < currentCardCount; i++) {
this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
    }
    
};

CardHand.prototype.update = function () {
    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width) 
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            console.log(this.game.click['x']);
        }
    }
    this.game.click = false;
};

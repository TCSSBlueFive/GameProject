/* button prototype */

function Card(game, cardFromDatabase, PlayerCharacter) {
    this.width = 75;
    this.height = 25;
    
    this.spritesheet = cardFromDatabase.spritesheet;
    this.game = game;
    this.ctx = game.ctx;
    this.PlayerCharacter = PlayerCharacter;
    this.fn = cardFromDatabase.ability;
};

Card.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   100, 100);
};

Card.prototype.update = function () {
    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width) 
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.PlayerCharacter.selectedMove = this.fn;
        }
    }
    this.game.click = false;
};

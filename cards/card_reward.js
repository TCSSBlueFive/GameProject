function card_reward(game, dungeon, card, x, y){
    card_inheritance.call(this, game, dungeon, card, x, y);

};

 
card_reward.prototype = Object.create(card_inheritance.prototype);

card_reward.prototype.draw = function () {
    //image
    card_inheritance.prototype.draw.call(this); 


};

card_reward.prototype.update = function () {

        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.dungeon.PlayerCharacter.DeckList.push(this.cardFromDatabase);
            this.dungeon.cardChosen = true;
            this.dungeon.state = 'rewards'
            this.game.click = false;
    }
    
};
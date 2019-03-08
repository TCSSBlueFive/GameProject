function card_removal(game, dungeon, card, x, y, index){
    card_inheritance.call(this, game, dungeon, card, x, y);
    this.index = index;
};

card_removal.prototype = Object.create(card_inheritance.prototype);

card_removal.prototype.draw = function () {
    card_inheritance.prototype.draw.call(this); 
};

card_removal.prototype.update = function () {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.dungeon.PlayerCharacter.DeckList.splice(this.index, 1)
            this.dungeon.state = 'restore';
            this.dungeon.stateChanged = true;
            this.game.click = false;
    }
    
};
function card_upgradable(game, dungeon, card, x, y, index){
    card_inheritance.call(this, game, dungeon, card, x, y);
    this.index = index;
    this.CardDataBase = new CardDataBase(game);
    this.dungeon = dungeon;
};

card_upgradable.prototype = Object.create(card_inheritance.prototype);

card_upgradable.prototype.draw = function () {
    card_inheritance.prototype.draw.call(this); 
};

card_upgradable.prototype.update = function () {

        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            console.log(this.dungeon.PlayerCharacter.DeckList)
            var chosencard = this.dungeon.PlayerCharacter.DeckList[this.index]
            console.log(this.index)
            console.log(chosencard);
           // this.dungeon.PlayerCharacter.DeckList[this.index] = this.CardDataBase.upgraded_cards[chosencard.index]
           this.dungeon.PlayerCharacter.DeckList.splice(this.index, 1);
           this.dungeon.PlayerCharacter.DeckList.push(this.CardDataBase.upgraded_cards[chosencard.index])
            console.log(this.dungeon.PlayerCharacter.DeckList)


            this.dungeon.state = 'restore';
            this.dungeon.stateChanged = true;
            this.game.click = false;
    }
    
};
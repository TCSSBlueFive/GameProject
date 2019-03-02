function Card(game, dungeon, cardHand, card, x, y) {

    card_inheritance.call(this, game, dungeon, card, x, y);
    this.cardHand = cardHand;
    this.mana = card.mana;

};

Card.prototype = Object.create(card_inheritance.prototype);

Card.prototype.draw = function () {
    card_inheritance.prototype.draw.call(this); 
};

Card.prototype.update = function () {
    if (this.game.click && this.dungeon.BattleOngoing) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width  )
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.game.click = false;    
            console.log("asd?")
            if (this.dungeon.battle.getPlayerTurn() && this.dungeon.battle.notOnCooldown()
                && this.dungeon.battle.sufficientMana(this)) {
                this.dungeon.battle.playerMove(this.fn);    
                var index = this.cardHand.cardsInHand.indexOf(this);
                if (index > -1) {
                    this.cardHand.cardsInHand.splice(index, 1);
                    this.cardHand.DeckListCardsUsed.push(this.card)
                }      
            }

            console.log(this.dungeon.state === 'battle_finished')
            if (this.dungeon.state === 'battle_finished') {
                console.log("sad?sadsd")
                this.cardHand.useAll();
                this.cardHand.reshuffle();
                this.cardHand.cardsInHand = [];

            }

        }
    }
};
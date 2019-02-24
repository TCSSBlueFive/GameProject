// no inheritance
function Card(game, dungeon, cardHand, card, x, y, opacity) {
    this.game = game;
    this.dungeon = dungeon;
    this.x = x;
    this.cardHand = cardHand;
    this.y = y;
    this.opacity = opacity;
    this.fn = card;

    this.width = card.width;
    this.spritesheet = card.spritesheet;
    this.height = card.height;
    this.ctx = game.ctx;
};

Card.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);

};

Card.prototype.update = function () {

    if (this.game.click) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width  )
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.game.click = false;    
            if (this.dungeon.BattleOngoing && this.dungeon.battle.getPlayerTurn() && this.dungeon.battle.notOnCooldown()) {
                this.dungeon.playCount++;
                
                this.dungeon.battle.playerMove(this);    

                var index = this.cardHand.cardsInHand.indexOf(this);
                if (index > -1) {
                    this.cardHand.cardsInHand.splice(index, 1);
                }      
            }

            if (!this.dungeon.BattleOngoing) {
                this.cardHand.reshuffle();
            }

        }
    }
};
function Card(game, dungeon, cardHand, card, x, y, opacity) {
    this.game = game;
    this.dungeon = dungeon;
    this.x = x;
    this.cardHand = cardHand;
    this.y = y;
    this.opacity = opacity;
    this.fn = card;
    this.mana = card.mana;

    this.width = card.width;
    this.spritesheet = card.spritesheet;
    this.height = card.height;
    this.ctx = game.ctx;
    this.name = card.name;
    this.nameXOffset = 35;
    this.nameYOffset = 27;
    this.textXOffset = 25;
    this.textYOffset = 120;
    this.text = card.text;
};

Card.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);

    //name
    this.ctx.save();
    this.ctx.font = "15px Impact";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText(this.name , this.x + this.nameXOffset, this.y + this.nameYOffset); 

    //card text effect
    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "#ffffff";
    var x = 30;
    var y = 30;
    var lineheight = 10;
    var lines = this.text.split('\n');

    for (var i = 0; i<lines.length; i++)
        this.ctx.fillText(lines[i], this.x + this.textXOffset, (this.y + this.textYOffset) + (i*lineheight) );
    this.ctx.restore();

        
};

Card.prototype.update = function () {

    if (this.game.click && this.dungeon.BattleOngoing) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width  )
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.game.click = false;    
            if (this.dungeon.battle.getPlayerTurn() && this.dungeon.battle.notOnCooldown()
                && this.dungeon.battle.sufficientMana(this)) {
                this.dungeon.battle.playerMove(this.fn);    
                var index = this.cardHand.cardsInHand.indexOf(this);
                if (index > -1) {
                    this.cardHand.cardsInHand.splice(index, 1);
                    this.cardHand.DeckListCardsRemaining.push(this.fn)
                }      
            }

            console.log(this.dungeon.state === 'battle_finished')
            if (this.dungeon.state === 'battle_finished') {
                console.log("sad?sadsd")
                this.cardHand.useAll();
                this.cardHand.reshuffle();
            }

        }
    }
};
function Card(game, dungeon, cardHand, card, x, y, pos) {
    this.pos = pos;

    card_inheritance.call(this, game, dungeon, card, x, y);
    //this.slot = pos;
    this.origX = this.x;
    this.origY = this.y;
    this.cardHand = cardHand;
    this.mana = card.mana;
    this.yOffset= 40;
    this.updateable = card.updateable;
    this.type = card.type;
    this.value = card.value;

    //below are arc charge attributes
    this.drawback = card.drawback;
    this.drawback_value = card.drawback_value;

    this.charge_div_value = card.charge_div_value;
    this.generate = card.generate;
    this.charge_gen_num = card.charge_gen_num;
    this.update_type = card.update_type;
    this.charge_consumption =card.charge_consumption
    this.effect = card.effect;
    this.card_to_add = card.card_to_add;

    this.playcount_mod = card.playcount_mod;
    this.turns_limit = card.turns_limit;

};

Card.prototype = Object.create(card_inheritance.prototype);


Card.prototype.drawIrregular = function(num, angle) {

    if ( num % 2 == 0) { 
        if (this.pos < num /2 - 1) {         
            this.Rotate((-(num/2 - 1) + this.pos) * angle)        
            this.y = this.origY + ((num/2) - (this.pos + 1)) * this.yOffset; //0 1     or 0 1 2
        } 
        if (this.pos > num/2 - 2 && this.pos < num/2 + 1) {  
            this.drawNormal();

        } 
        if (this.pos > num/ 2)  {             
            this.Rotate((-(num/2) + this.pos) *angle)                               // 4 5 or 4 5 6
            this.y = this.origY + ( this.pos - (num/2)) * this.yOffset; 
        }
    }
    else if (num % 2 == 1) {    
        if (this.pos < Math.floor(num /2)) {      //less than 3 or 4   
            this.Rotate((-(Math.floor(num/2)) + this.pos) * angle)   
            this.y = this.origY + ((Math.floor(num/2)) - this.pos) * this.yOffset; 
        } 
        else if (this.pos < Math.floor(num/2) + 1) { //gets 3 or gets 4
            this.drawNormal();
        } 
        else {             

            this.Rotate((-(Math.floor(num/2)) + this.pos) *angle) 
            
            this.y = this.origY + ( this.pos - (Math.floor(num/2))) * this.yOffset; 

        }
    }
}


Card.prototype.drawNormal = function () {
    this.cardHand.normalize();
    this.y = this.origY +30;

    card_inheritance.prototype.draw.call(this); 
}

Card.prototype.Rotate = function (angle) {
    this.ctx.fillStyle = "#f0ff0f";
    //this.ctx.fillRect(0,0,100,100);
    this.ctx.save();
    
    this.ctx.translate(this.x + this.width/2, this.y + this.height/2);
  
    this.ctx.rotate(angle * Math.PI / 180);
    this.ctx.drawImage(this.spritesheet, -this.width/2, -this.height/2, this.width, this.height);
    var fontSize = this.game.width * .01

    this.ctx.font = fontSize + "px Arial";
    if (this.card.upgraded) {
        this.ctx.fillStyle = "#00FF00"
    }
    this.ctx.fillText(this.name , -this.width/2 + this.game.width * .0375, -this.height/2 + this.game.height * .0282); 

    this.ctx.fillStyle = "#f0ff0f";
    var textFontSize = this.game.width * .0075;
    this.ctx.font = textFontSize + "px Arial";
    var lineheight = textFontSize;
    var lines = this.text.split('\n');
    if (this.card.upgraded) {
        this.ctx.fillStyle = "#00FF00"
    };
    for (var i = 0; i<lines.length; i++)
        this.ctx.fillText(lines[i], -this.width/2 + this.game.width * .0209 ,-this.height/2 +  this.game.height * .183 + i * lineheight);


    //mana
    this.ctx.fillStyle = "#0000FF"
    this.ctx.font = this.game.width * .016+ "px Impact";
    this.ctx.fillText(this.mana,  -this.width/2 + this.game.width * .005, -this.height/2 + this.game.height * .027); 

    this.ctx.restore();
  };

Card.prototype.draw = function (numOfCards) {

    var angle = 10;
    if (numOfCards <= 5) {
        this.drawNormal();
    }  else {
        this.drawIrregular(numOfCards, 10)

    }

};

Card.prototype.update = function () {
    if (this.updateable) {
        var charges =  this.dungeon.PlayerCharacter.ArcChargeBar.ArcCharges;
        if(this.update_type === "damage x arc charges")
            this.value = this.fn.value + this.fn.mult_value * Math.floor(charges/this.charge_div_value);
        
        if (this.drawback === 'costs_per_charge') {
            this.mana = this.fn.mana + Math.floor(charges/this.drawback_value)
        }

        if(this.update_type === "block x arc charges") {
            this.value = this.fn.value + this.fn.mult_value * charges;
        }
    
    }

    if (this.game.click && this.dungeon.BattleOngoing) {
        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width  )
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.game.click = false;    
            if (this.dungeon.battle.getPlayerTurn() && this.dungeon.battle.notOnCooldown()
                && this.dungeon.battle.sufficientMana(this)) {
                this.dungeon.battle.playerMove(this);    
                var index = this.cardHand.cardsInHand.indexOf(this);
                if (index > -1) {
                    this.cardHand.cardsInHand.splice(index, 1);
                    if (!this.card.exhaust) {
                        this.cardHand.DeckListCardsUsed.push(this.card)
                    } else {
                        if (!this.card.temporary){
                            this.cardHand.exhaustedCards.push(this.card)
                            console.log("exhausted")
                        }
                    }
                }      
            }

            if (this.dungeon.state === 'battle_finished') {
                this.cardHand.restoreExhausted();
                this.cardHand.useAll();
                this.cardHand.reshuffle();
                this.cardHand.removeTemporary();

                this.cardHand.cardsInHand = [];

            }

        }
    }
};
function card_shop_item(game, dungeon, shop, goldcost, card, x, y){
    
    card_inheritance.call(this, game, dungeon, card, x, y);
    this.goldcost = goldcost;
    this.shop = shop;

    this.goldXOffset = this.width * .18;;
    this.goldYOffset = this.height * 1.1;
};




card_shop_item.prototype.draw = function () {
    card_inheritance.prototype.draw.call(this); 
    //gold cost
    this.ctx.save();
    this.ctx.fillStyle = "#ffff00";
    this.ctx.font = "40px Impact";
    this.ctx.fillText("Costs: ", this.x + this.goldXOffset, this.y + this.goldYOffset); 

    if (this.canAfford()) {
        this.ctx.fillStyle = "#00ff00";
    } else {
        this.ctx.fillStyle = "#ff0000";
    }
    this.ctx.fillText(this.goldcost , this.x + this.goldXOffset + 108, this.y + this.goldYOffset); 
    this.ctx.restore();
};

card_shop_item.prototype.canAfford = function() {
    return this.dungeon.PlayerCharacter.gold >= this.goldcost;
}
card_shop_item.prototype.update = function () {

        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {

            if (this.canAfford()) {
                this.dungeon.PlayerCharacter.DeckList.push(this.card);
                this.dungeon.PlayerCharacter.gold -= this.goldcost;
                this.shop.remove(this);
                
            }
            this.game.click = false;
    } 
};
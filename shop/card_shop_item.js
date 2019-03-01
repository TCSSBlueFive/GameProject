function card_shop_item(game, dungeon, shop, goldcost, cardFromDatabase, x, y){
    
    this.x = x;
    this.y = y;
    this.width = 250;
    this.height = 327;

    this.opacity = 1;
    this.spritesheet = cardFromDatabase.spritesheet;
    this.cardFromDatabase = cardFromDatabase;
    this.game = game;
    this.ctx = game.ctx;
    this.goldcost = goldcost;
    this.dungeon = dungeon;
    this.shop = shop;
    this.name = cardFromDatabase.name;
    this.nameXOffset = 60;
    this.nameYOffset = 43;
    this.textXOffset = 45;
    this.textYOffset = 220;

    this.goldXOffset = 45;
    this.goldYOffset = 360;
    this.text = cardFromDatabase.text;
};

 

card_shop_item.prototype.draw = function () {
    //image
    this.ctx.drawImage(this.spritesheet, this.x, this.y, this.width, this.height);

    this.ctx.save();

    

    //name
    this.ctx.save();
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText(this.name , this.x + this.nameXOffset, this.y + this.nameYOffset); 

    //card text effect
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "#ffff00";
    var x = 30;
    var y = 30;
    var lineheight = 20;
    var lines = this.text.split('\n');

    for (var i = 0; i<lines.length; i++)
        this.ctx.fillText(lines[i], this.x + this.textXOffset, (this.y + this.textYOffset) + (i*lineheight) );

    //gold cost
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
                this.dungeon.PlayerCharacter.DeckList.push(this.cardFromDatabase);
                this.dungeon.PlayerCharacter.gold -= this.goldcost;
                this.shop.remove(this);
                
            }
            this.game.click = false;
    } 
};
function card_shop_item(game, dungeon, shop, goldcost, cardFromDatabase, x, y){
    
    this.x = x;
    this.y = y;
    this.width = cardFromDatabase.width 
    this.height = cardFromDatabase.height
    this.opacity = 1;
    this.spritesheet = cardFromDatabase.spritesheet;
    this.cardFromDatabase = cardFromDatabase;
    this.game = game;
    this.ctx = game.ctx;
    this.goldcost = goldcost;
    this.dungeon = dungeon;
    this.shop = shop;
    this.name = cardFromDatabase.name;
    this.nameXOffset = 35;
    this.nameYOffset = 27;
    this.textXOffset = 25;
    this.textYOffset = 120;

    this.goldXOffset = 20;
    this.goldYOffset = 200;
    this.text = cardFromDatabase.text;
    //this.cardX = cardFromDatabase.x
    //this.cardY = cardFromDatabase.y
};

 

card_shop_item.prototype.draw = function () {
    //image
    this.ctx.drawImage(this.spritesheet, this.x, this.y);

    this.ctx.save();

    if (this.canAfford()) {
        this.ctx.fillStyle = "#00ff00";
    } else {
        this.ctx.fillStyle = "#ff0000";
    }

    //name

    this.ctx.font = "15px Impact";
    this.ctx.fillText(this.name , this.x + this.nameXOffset, this.y + this.nameYOffset); 


    //gold cost
    this.ctx.font = "20px Impact";
    this.ctx.fillText("Costs: " +this.goldcost , this.x + this.goldXOffset, this.y + this.goldYOffset); 
    this.ctx.restore();


    //card text effect
    this.ctx.font = "10px Arial";
    this.ctx.fillStyle = "#ffffff";
    var x = 30;
    var y = 30;
    var lineheight = 10;
    var lines = this.text.split('\n');

    for (var i = 0; i<lines.length; i++)
        this.ctx.fillText(lines[i], this.x + this.textXOffset, (this.y + this.textYOffset) + (i*lineheight) );
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
function card_reward(game, dungeon, cardFromDatabase, x, y){
    
    this.x = x;
    this.y = y;
    this.width = cardFromDatabase.width 
    this.height = cardFromDatabase.height
    this.opacity = 1;
    this.spritesheet = cardFromDatabase.spritesheet;
    this.cardFromDatabase = cardFromDatabase;
    this.game = game;
    this.ctx = game.ctx;
    this.dungeon = dungeon;
    this.name = cardFromDatabase.name;
    
    this.nameXOffset = 35;
    this.nameYOffset = 27;
    this.textXOffset = 25;
    this.textYOffset = 120;
    this.text = cardFromDatabase.text;
};

 

card_reward.prototype.draw = function () {
    //image
    this.ctx.drawImage(this.spritesheet, this.x, this.y);

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

card_reward.prototype.update = function () {

        if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
        && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
            this.dungeon.PlayerCharacter.DeckList.push(this.cardFromDatabase);
            this.dungeon.cardChosen = true;
            this.dungeon.state = 'rewards'
            this.game.click = false;
    }
    
};
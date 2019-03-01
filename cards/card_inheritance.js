function card_inheritance(game, dungeon, card, x, y) {
    this.game = game;
    this.dungeon = dungeon;
    this.x = x;
    this.y = y;
    this.opacity = 1;
    this.fn = card;
    this.spritesheet = card.spritesheet;

    this.width = card.width;
    this.height = card.height;
    this.ctx = game.ctx;

    this.card = card;
    this.name = card.name;
    this.nameXOffset = this.width * .25;
    this.nameYOffset = this.height * .13;
    this.textXOffset = this.width * .18;
    this.textYOffset = this.height * .672;
    this.text = card.text;
};

card_inheritance.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y, this.width, this.height);

    //name
    this.ctx.save();
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "#f0ff0f";
    this.ctx.fillText(this.name , this.x + this.nameXOffset, this.y + this.nameYOffset); 

    //card text effect
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "#ffff00";
    var lineheight = 20;
    var lines = this.text.split('\n');

    for (var i = 0; i<lines.length; i++)
        this.ctx.fillText(lines[i], this.x + this.textXOffset, (this.y + this.textYOffset) + (i*lineheight) );
    this.ctx.restore();

        
};

card_inheritance.prototype.update = function () {

};
function deck_viewer_card(game, dungeon, card, x, y){

    card_inheritance.call(this, game, dungeon, card, x, y);
    this.width = 200;
    this.height = 261;
    this.nameXOffset = this.width * .25;
    this.nameYOffset = this.height * .13;
    this.textXOffset = this.width * .18;
    this.textYOffset = this.height * .672;
    this.yOrig = this.y;
    this.clipX = 0;

};

 
deck_viewer_card.prototype = Object.create(card_inheritance.prototype);
//ctx.drawImage(image,clipX,clipY,clipWidth,clipHeight,0,0,clipWidth,clipHeight);


deck_viewer_card.prototype.draw = function () {
    //this.ctx.drawImage(this.spritesheet, this.x, this.y, 200, 261);
   //this.yOrig - this.y
   if (this.y < 130) {
       //this.y = 130;
    this.ctx.drawImage(this.spritesheet,
       this.clipX, 130 - this.y, this.width, this.height, this.x, 130, this.width, this.height);
    } else {
        this.ctx.drawImage(this.spritesheet,
            this.clipX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
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

deck_viewer_card.prototype.update = function () {
    
};
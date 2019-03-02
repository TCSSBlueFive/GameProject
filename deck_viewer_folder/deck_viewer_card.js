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
//this.y + this.height > 730
 
deck_viewer_card.prototype = Object.create(card_inheritance.prototype);
//ctx.drawImage(image,clipX,clipY,clipWidth,clipHeight,0,0,clipWidth,clipHeight);


deck_viewer_card.prototype.draw = function () {
    //this.ctx.drawImage(this.spritesheet, this.x, this.y, 200, 261);
   //this.yOrig - this.y
   //console.log(this.y);
   if (this.y < 140) {
       //this.y = 130;
    this.ctx.drawImage(this.spritesheet,
       this.clipX, 140 - this.y, this.width, this.height, this.x, 140, this.width, this.height);
    }else if (this.y + this.height > 730) {
        this.ctx.drawImage(this.spritesheet,
            this.clipX, 0, this.width, 450 - this.y + this.height , this.x, this.y, this.width, 450 - this.y + this.height );
    } else if (this.y >= 140){
        this.ctx.drawImage(this.spritesheet,
            this.clipX, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    } 
    //name
    
    this.ctx.save();
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "#f0ff0f";
    if (this.y > 110)
        this.ctx.fillText(this.name , this.x + this.nameXOffset, this.y + this.nameYOffset); 

    //card text effect
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "#ffff00";
    var lineheight = 20;
    var lines = this.text.split('\n');

    //-43 all the way to -105

    //console.log(690 + this.textYOffset + 1 * -20)
    // /this.y < 730 + this.textYOffset + i * -20 
    //this.y < 525
    //this.y < 500 for 2nd line
    for (var i = 0; i<lines.length; i++)
    //if (this.y > 100 - i * 10)
        if ((this.y > -30 + i * - 20) && this.y < 525 + i * -20) 
        this.ctx.fillText(lines[i], this.x + this.textXOffset, (this.y + this.textYOffset) + (i*lineheight) );
    this.ctx.restore();
    


};

deck_viewer_card.prototype.update = function () {
    
};
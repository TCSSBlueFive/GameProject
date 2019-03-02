function deck_viewer_card(game, dungeon, card, x, y){

    card_inheritance.call(this, game, dungeon, card, x, y);
    this.width = 200;
    this.height = 261;
    this.nameXOffset = this.width * .25;
    this.nameYOffset = this.height * .13;
    this.textXOffset = this.width * .18;
    this.textYOffset = this.height * .672;
    this.yOrig = this.y;

};

 
deck_viewer_card.prototype = Object.create(card_inheritance.prototype);

deck_viewer_card.prototype.draw = function () {
    card_inheritance.prototype.draw.call(this); 
};

deck_viewer_card.prototype.update = function () {
    
};
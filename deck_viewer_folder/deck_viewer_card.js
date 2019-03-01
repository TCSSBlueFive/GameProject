function deck_viewer_card(game, dungeon, card, x, y){
    card_inheritance.call(this, game, dungeon, card, x, y);

};

 
deck_viewer_card.prototype = Object.create(card_inheritance.prototype);

deck_viewer_card.prototype.draw = function () {
    //image
    card_inheritance.prototype.draw.call(this); 


};

deck_viewer_card.prototype.update = function () {
    
};
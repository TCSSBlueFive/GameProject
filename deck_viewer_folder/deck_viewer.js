var AM = new AssetManager();
function deck_viewer(game, dungeon, Cardhand, type) {
  this.x = 100;
  this.y = 100;
  this.fullDeckX = 1800
  this.fullDeckY = 5;
  this.fullDeckDimensions = 120;

  this.drawPileX = 25
  this.drawPileY = 1030;

  this.discardPileX = 2225;
  this.discardPileY = 1030;

  this.drawAndDiscardDimensions = 150;


  this.width = 250 * 4 + 100; //this is card with x 4 plus a little extra
  this.opacity = 1;
  this.game = game;
  this.ctx = game.ctx;
  this.cardhand = Cardhand;
  this.drawPile = Cardhand.DeckListCardsRemaining;
  this.discardPile = Cardhand.DeckListCardsUsed;

  //this.height = Math.ceil((drawPile.length + discardPile.length) / 4)

  this.deck_discard_sprite = AM.getAsset("./img/cards/deck_discard.png");
  this.deck_draw_sprite = AM.getAsset("./img/cards/deck_draw.png");
  this.deck_full_sprite = AM.getAsset("./img/cards/full_deck.png");

  this.deck_viewer_type = type;
  this.combined = this.drawPile + this.discardPile;
  this.dungeon = dungeon;
  this.debug = true;
};  
  
deck_viewer.prototype.draw = function () {
  this.ctx.drawImage(this.deck_discard_sprite,
    this.discardPileX, this.discardPileY);
  
  this.ctx.drawImage(this.deck_draw_sprite,
    this.drawPileX, this.drawPileY);
  
  this.ctx.drawImage(this.deck_full_sprite,
    this.fullDeckX, this.fullDeckY);
  

  for (let i = 0; i > 4; i++) {
    var newCard = new Card(this.game, this.dungeon, this, card, this.x + (card.width * i), this.y, card.width, this.height, this.opacity)
  }
};

deck_viewer.prototype.update = function () {
  this.drawPile = this.cardhand.DeckListCardsRemaining;
  this.discardPile = this.cardhand.DeckListCardsUsed;
  this.combined = this.drawPile.concat(this.discardPile, this.cardhand.cardsInHand);// + this.discardPile + this.cardhand.cardsInHand;
  
  if (this.game.click) {
    if((this.game.click['x'] >this.fullDeckX  && this.game.click['x'] <  this.fullDeckX + this.fullDeckDimensions  )
    && (this.game.click['y'] > this.fullDeckY && this.game.click['y'] < this.fullDeckY + this.fullDeckDimensions)) {
      if (this.debug) {

        for (let i = 0; i < this.combined.length; i++) {
          console.log(this.combined[i])
        }      
        this.game.click = false;  
      }  

    //discard
    } else if((this.game.click['x'] > this.discardPileX && this.game.click['x'] < this.discardPileX + this.drawAndDiscardDimensions   )
    && (this.game.click['y'] > this.discardPileY  && this.game.click['y'] < this.discardPileY + this.drawAndDiscardDimensions)) {
      if (this.debug) {

        for (let i = 0; i < this.discardPile.length; i++) {
          console.log(this.discardPile[i].card)
        }
      }
      this.game.click = false;  
    //draw
    } else if((this.game.click['x'] > this.drawPileX && this.game.click['x'] <this.drawPileX + this.drawAndDiscardDimensions   )
    && (this.game.click['y'] > this.drawPileY  && this.game.click['y'] < this.drawPileY + this.drawAndDiscardDimensions)) {
      if (this.debug) {

        for (let i = 0; i < this.drawPile.length; i++) {
          console.log(this.drawPile[i])
        }
      }
      this.game.click = false;  
    }

    
  }
}

var AM = new AssetManager();
function deck_viewer(game, dungeon, PlayerCharacter, Cardhand) {
  this.x = 600;
  this.y = 100;
  this.fullDeckX = 1800
  this.fullDeckY = 5;
  this.fullDeckDimensions = 120;
  this.width = 200;
  this.height = 261;

  this.drawPileX = 25
  this.rowcol = 5;
  this.drawPileY = 1030;

  this.discardPileX = 2225;
  this.discardPileY = 1030;

  this.drawAndDiscardDimensions = 150;

  this.PlayerCharacter = PlayerCharacter;


  //this.width = 250 * 4 + 100; //this is card with x 4 plus a little extra
  this.opacity = 1;
  this.game = game;
  this.ctx = game.ctx;
  if (Cardhand) {
    this.cardhand = Cardhand;
    this.drawPile = Cardhand.DeckListCardsRemaining;
    this.discardPile = Cardhand.DeckListCardsUsed;
  }


  //this.height = Math.ceil((drawPile.length + discardPile.length) / 4)

  this.deck_discard_sprite = AM.getAsset("./img/cards/deck_discard.png");
  this.deck_draw_sprite = AM.getAsset("./img/cards/deck_draw.png");
  this.deck_full_sprite = AM.getAsset("./img/cards/full_deck.png");

  this.cardsToDraw = [];

  this.combined = this.drawPile + this.discardPile;
  this.dungeon = dungeon;
  this.debug = true;
};  
  
deck_viewer.prototype.draw = function () {
  if (this.cardhand) {
    this.ctx.drawImage(this.deck_discard_sprite,this.discardPileX, this.discardPileY);

      this.ctx.save();
      //discard
      this.ctx.font = "60px Arial";
      this.ctx.fillStyle = "#FF4500";
      this.ctx.fillText(this.discardPile.length , this.discardPileX - 20, this.discardPileY + 40); 

    //draw
    this.ctx.drawImage(this.deck_draw_sprite,this.drawPileX, this.drawPileY);
      this.ctx.fillStyle = "#00FA9A";
      this.ctx.fillText(this.drawPile.length , this.drawPileX + 120, this.drawPileY + 40); 
      
  }
  //full
  this.ctx.drawImage(this.deck_full_sprite, this.fullDeckX, this.fullDeckY);
    this.ctx.fillStyle = "#FFA500";
    this.ctx.fillText(this.combined.length , this.fullDeckX + 90, this.fullDeckY + 110); 
    this.ctx.restore();
  

  for (let i = 0; i < this.cardsToDraw.length; i++) {
    this.cardsToDraw[i].draw();
  }
};

deck_viewer.prototype.update = function () {
  if (this.cardhand) {
    //drawpile
    this.drawPile = this.cardhand.DeckListCardsRemaining;

    //discard pile
    this.discardPile = this.cardhand.DeckListCardsUsed;

    //full deck
    this.combined = this.drawPile.concat(this.discardPile);// + this.discardPile + this.cardhand.cardsInHand;

    for (let i = 0; i < this.cardhand.cardsInHand.length; i++) {
      this.combined.push(this.cardhand.cardsInHand[i].fn)
    }
  } else {
    this.combined = this.PlayerCharacter.DeckList;
  }


  //fulldeck
  if (this.game.click) {
    if((this.game.click['x'] >this.fullDeckX  && this.game.click['x'] <  this.fullDeckX + this.fullDeckDimensions  )
    && (this.game.click['y'] > this.fullDeckY && this.game.click['y'] < this.fullDeckY + this.fullDeckDimensions)) {
      this.cardsToDraw = [];

        if (this.debug) {
          for (let i = 0; i < this.combined.length; i++) {
            var card = new deck_viewer_card(this.game, this.dungeon, this.combined[i], this.x + (i % this.rowcol) * this.width,
              this.y + (this.height * Math.floor(i / this.rowcol)));
              this.cardsToDraw.push(card);
          }      
          console.log(this.combined.length)
          this.game.click = false;      
      } 
    //discard
    }
    if (this.cardhand) {
      if((this.game.click['x'] > this.discardPileX && this.game.click['x'] < this.discardPileX + this.drawAndDiscardDimensions   )
      && (this.game.click['y'] > this.discardPileY  && this.game.click['y'] < this.discardPileY + this.drawAndDiscardDimensions)) {
        this.cardsToDraw = [];

          if (this.debug) {
            for (let i = 0; i < this.discardPile.length; i++) {
              var card = new deck_viewer_card(this.game, this.dungeon, this.discardPile[i], this.x + (i % this.rowcol) * this.width,
              this.y + (this.height * Math.floor(i / this.rowcol)));
              this.cardsToDraw.push(card);
              console.log(this.discardPile[i])
            }
          }
        this.game.click = false;  
      //draw
      } else if((this.game.click['x'] > this.drawPileX && this.game.click['x'] <this.drawPileX + this.drawAndDiscardDimensions   )
      && (this.game.click['y'] > this.drawPileY  && this.game.click['y'] < this.drawPileY + this.drawAndDiscardDimensions)) {
        if (this.debug) {
          this.cardsToDraw = [];

          for (let i = 0; i < this.drawPile.length; i++) {
            var card = new deck_viewer_card(this.game, this.dungeon, this.drawPile[i], this.x + (i % this.rowcol) * this.width,
              this.y + (this.height * Math.floor(i / this.rowcol)));
              this.cardsToDraw.push(card);
            console.log(this.drawPile[i])

          }
        }
        this.game.click = false;  
      }
    }
  }
}

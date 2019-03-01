function deck_viewer(game, spritesheet, dungeon, Cardhand, type) {
    this.x = 500;
    this.y = 0;
    this.width = 250 * 4 + 100; //this is card with x 4 plus a little extra
    this.opacity = 1;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
    this.cardhand = Cardhand;
    this.drawPile = Cardhand.DeckListCardsRemaining;
    this.discardPile = Cardhand.DeckListCardsUsed;

    //this.height = Math.ceil((drawPile.length + discardPile.length) / 4)

    this.deck_viewer_type = type;
    this.combined = this.drawPile + this.discardPile;
    this.dungeon = dungeon;
  };  
  
  deck_viewer.prototype.draw = function () {
    for (let i = 0; i > 4; i++) {
      var newCard = new Card(this.game, this.dungeon, this, card, this.x + (card.width * i), this.y, card.width, this.height, this.opacity)

    }
  };

  deck_viewer.prototype.update = function () {
    //this.drawPile = this.cardhand.DeckListCardsRemaining;
    //this.discardPile = this.cardhand.DeckListCardsUsed;
    //this.combined = this.drawPile + this.discardPile;
    
    if (this.game.click) {
      if((this.game.click['x'] > 1200 && this.game.click['x'] < 2400  )
      && (this.game.click['y'] > 0 && this.game.click['y'] < 600)) {
          this.game.click = false;    
          console.log('draw pile');
          console.log(this.drawPile);
          console.log('discard pile')
          console.log(this.discardPile);
          console.log('both')
          console.log(this.combined)
      }
    }
    
 

  }
  
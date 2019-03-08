var AM = new AssetManager();
function deck_viewer(game, dungeon, PlayerCharacter, Cardhand) {
  this.width = 200;//card width do not change, these have to be a static value unfortunately due to the fact drawimage with clipping is weird
  this.height = 261; //card height do not change, these have to be a static value unfortunately due to the fact drawimage with clipping is weird

  this.x = game.width * .24;

  this.y = 140;

  this.fullDeckX = game.width * .61016;
  this.fullDeckY = 5;
  this.fullDeckDimensions = game.width * .040677;

  this.drawPileX = game.width * .015;
  this.rowcol = 5;
  this.drawPileY = game.height * .8;

  this.discardPileX = game.width * .9;
  this.discardPileY =  this.drawPileY;
  

  this.drawAndDiscardDimensions = game.width *.050847;
  this.numberFontSize = game.width * .02033898 + "px Arial"
  this.PlayerCharacter = PlayerCharacter;

  this.view_window_present = 'none';

  this.scrollbarX = this.x + this.width * this.rowcol + 31;



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
  this.deck_background = AM.getAsset("./img/viewing_deck_bg.png");
  this.cardsToDraw = [];

  this.myScrollBar = new scrollbar(this.game, AM.getAsset("./img/scrollbar.png"), this.cardsToDraw, this.scrollbarX, 150, 'vertical');

  this.combined = this.drawPile + this.discardPile;
  this.dungeon = dungeon;
  this.debug = true;
};  
  
deck_viewer.prototype.draw = function () {
  if (this.view_window_present != 'none'){
    this.ctx.drawImage(this.deck_background, this.x , 130, this.width * this.rowcol, 600);
    this.myScrollBar.draw();
  }
  this.ctx.save();
  this.ctx.font = this.numberFontSize;

  if (this.cardhand && this.dungeon.state != 'viewing_deck') {
    this.ctx.drawImage(this.deck_discard_sprite,this.discardPileX, this.discardPileY, this.drawAndDiscardDimensions, this.drawAndDiscardDimensions);

      this.ctx.save();
      //discard
      this.ctx.fillStyle = "#FF4500";
      this.ctx.fillText(this.discardPile.length , this.discardPileX - 20, this.discardPileY + 40); 

    //draw
    this.ctx.drawImage(this.deck_draw_sprite,this.drawPileX, this.drawPileY, this.drawAndDiscardDimensions, this.drawAndDiscardDimensions);
      this.ctx.fillStyle = "#00FA9A";
      this.ctx.fillText(this.drawPile.length , this.drawPileX + 90, this.drawPileY + 40); 
      
  }
  //full
  this.ctx.drawImage(this.deck_full_sprite, this.fullDeckX, this.fullDeckY, this.fullDeckDimensions, this.fullDeckDimensions);
    this.ctx.fillStyle = "#FFA500";
    if (this.combined) {
      this.ctx.fillText(this.combined.length , this.fullDeckX + this.game.width * .030508, this.fullDeckY + this.game.height * .06667); 

    }
    this.ctx.restore();
  

  for (let i = 0; i < this.cardsToDraw.length; i++) {
    this.cardsToDraw[i].draw();
  }
};

deck_viewer.prototype.update = function () {
 // if(this.view_window_present != 'none') {
    this.myScrollBar.update(this.cardsToDraw);
  //}
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

  if (this.game.click) {
    if((this.game.click['x'] > this.fullDeckX  && this.game.click['x'] <  this.fullDeckX + this.fullDeckDimensions  )
    && (this.game.click['y'] > this.fullDeckY && this.game.click['y'] < this.fullDeckY + this.fullDeckDimensions )) {
      this.myScrollBar.reset();
      if (this.view_window_present != 'displaying_full_deck') {
        this.originalstate = this.dungeon.state;
        this.dungeon.state = 'viewing_deck'
        this.dungeon.stateChanged = true;
        this.view_window_present = 'displaying_full_deck';
        this.cardsToDraw = [];

        for (let i = 0; i < this.combined.length; i++) {
          var card = new deck_viewer_card(this.game, this.dungeon, this.combined[i], this.x + (i % this.rowcol) * this.width,
            this.y + (this.height * Math.floor(i / this.rowcol)));
            this.cardsToDraw.push(card);
        }
      } else {
        this.cardsToDraw = [];
        this.dungeon.state = 'view_deck_restore'
        this.dungeon.stateChanged = true;
        //this.dungeon.state = this.originalstate;
        this.view_window_present = 'none';
      }
      this.game.click = false;      
      } 

    if (this.cardhand && this.dungeon.state != 'viewing_deck') {
      if((this.game.click['x'] > this.discardPileX && this.game.click['x'] < this.discardPileX + this.drawAndDiscardDimensions   )
      && (this.game.click['y'] > this.discardPileY  && this.game.click['y'] < this.discardPileY + this.drawAndDiscardDimensions)) {
        this.myScrollBar.reset();
        if (this.view_window_present != 'displaying_discard_deck') {
          this.view_window_present = 'displaying_discard_deck';
          this.cardsToDraw = [];
  
          for (let i = 0; i < this.discardPile.length; i++) {
            var card = new deck_viewer_card(this.game, this.dungeon, this.discardPile[i], this.x + (i % this.rowcol) * this.width,
              this.y + (this.height * Math.floor(i / this.rowcol)));
              this.cardsToDraw.push(card);
          }
        } else {
          this.cardsToDraw = [];
          this.view_window_present = 'none';
        }
        this.game.click = false;      
        
      }  else if((this.game.click['x'] > this.drawPileX && this.game.click['x'] <this.drawPileX + this.drawAndDiscardDimensions   )
      && (this.game.click['y'] > this.drawPileY  && this.game.click['y'] < this.drawPileY + this.drawAndDiscardDimensions)) {
        this.myScrollBar.reset();
        if (this.view_window_present != 'displaying_draw_deck') {
          this.view_window_present = 'displaying_draw_deck';
          this.cardsToDraw = [];
  
          for (let i = 0; i < this.drawPile.length; i++) {
            var card = new deck_viewer_card(this.game, this.dungeon, this.drawPile[i], this.x + (i % this.rowcol) * this.width,
              this.y + (this.height * Math.floor(i / this.rowcol)));
              this.cardsToDraw.push(card);
          }
        } else {
          this.cardsToDraw = [];
          this.view_window_present = 'none';
        }
        this.game.click = false;      
        
        }
    }
  }


  //this.content[i].y = this.content[i].yOrig - (this.y - this.miny)
//function deck_viewer_card(game, dungeon, card, x, y){

  if (this.view_window_present === 'displaying_discard_deck') {
    this.cardsToDraw = [];
  
    for (let i = 0; i < this.discardPile.length; i++) {
      var card = new deck_viewer_card(this.game, this.dungeon, this.discardPile[i], this.x + (i % this.rowcol) * this.width,
                                     (this.y + (this.height * Math.floor(i / this.rowcol))) - (this.myScrollBar.y - this.myScrollBar.miny));
        
      this.cardsToDraw.push(card);
    }
  } else if (this.view_window_present === 'displaying_draw_deck') {
    this.cardsToDraw = [];
  
    for (let i = 0; i < this.drawPile.length; i++) {
      var card = new deck_viewer_card(this.game, this.dungeon, this.drawPile[i], this.x + (i % this.rowcol) * this.width,
                                     (this.y + (this.height * Math.floor(i / this.rowcol))) - (this.myScrollBar.y - this.myScrollBar.miny));
        this.cardsToDraw.push(card);
        
    }
  } 
}
function CardHand(game, dungeon, PlayerCharacter, opacity){
    this.x = 425;// each card will be 75 units wide for now
    this.y = 850;
    this.dungeon = dungeon;
    this.opacity = opacity;
    this.currentCardDraw = 5;
    this.cardsInHand = [];
    this.PlayerCharacter = PlayerCharacter;
    this.DeckList = this.PlayerCharacter.DeckList;
    this.DeckListCardsRemaining = this.PlayerCharacter.DeckList;
    this.DeckListCardsUsed = [];
    this.game = game;
    this.ctx = game.ctx;
    //this.fn = fn; 
    this.debug = false;
};
CardHand.prototype.useAll = function () {

    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.DeckListCardsUsed.push(this.cardsInHand[i].fn)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


CardHand.prototype.reshuffle = function () {
    for (let i = 0; i < this.DeckListCardsUsed.length; i++) {
        this.DeckListCardsRemaining.push(this.DeckListCardsUsed[i]);
    }
    this.DeckListCardsUsed = [];

}
 
CardHand.prototype.generateInitialHand = function () {
    if (this.debug) {
        console.log("initial")

        console.log(this.DeckListCardsRemaining);
        console.log(this.DeckListCardsUsed);
    }

    this.reshuffle();
    if (this.debug) {
        console.log(this.DeckListCardsRemaining);
        console.log(this.DeckListCardsUsed);
   }


    for(let i = 0; i < this.currentCardDraw; i++) {
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        var card = this.DeckListCardsRemaining[myNum];
        var newCard = new Card(this.game, this.dungeon, this, card, this.x + (card.width * i), this.y, card.width, this.height, this.opacity)
        var index = this.DeckListCardsRemaining.indexOf(card);
        if (index > -1) {
            this.DeckListCardsRemaining.splice(index, 1);
            //this.DeckListCardsUsed.push(newCard);

        }

        this.cardsInHand[i] = newCard;
    }
    if (this.debug) {

        console.log(this.DeckListCardsRemaining);
        console.log(this.DeckListCardsUsed);
        console.log(this.cardsInHand);

        console.log("initial end")
    }
}

CardHand.prototype.generateNewHand = function () {
    if (this.debug) {

        console.log("new hand")
        console.log(this.DeckListCardsRemaining);
        console.log(this.DeckListCardsUsed);
        console.log(this.cardsInHand);
    }
    this.cardsInHand = [];
    for(let i = 0; i < this.currentCardDraw; i++) {
        if (this.DeckListCardsRemaining.length === 0) {
            this.reshuffle();
        }
        
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        var card = this.DeckListCardsRemaining[myNum];

        var newCard = new Card(this.game, this.dungeon, this, card, this.x + (card.width * i), this.y, card.width, card.height,  this.opacity)

        var index = this.DeckListCardsRemaining.indexOf(card);
        if (index > -1) {
            this.DeckListCardsRemaining.splice(index, 1);
        }
        this.cardsInHand[i] = newCard;
    }
    if (this.debug) {

        console.log(this.DeckListCardsRemaining);
        console.log(this.DeckListCardsUsed);
        console.log(this.cardsInHand);
        console.log("new hand end")
    }


}
CardHand.prototype.drawCard = function () {
    if (this.debug) {

        console.log(this.DeckListCardsRemaining.length);
        console.log(this.DeckListCardsUsed.length);
    }
        if (this.DeckListCardsRemaining.length === 0) {
        this.reshuffle();
    }
    if (this.DeckListCardsRemaining.length != 0) {
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        var card = this.DeckListCardsRemaining[myNum];
        var newCard = new Card(this.game, this.dungeon, this, card, this.x, this.y, card.width, card.height,  this.opacity)
        var index = this.DeckListCardsRemaining.indexOf(card);
        if (index > -1) {
            this.DeckListCardsRemaining.splice(index, 1);
        }
        this.cardsInHand.push(newCard);
    }
    if (this.debug) {

        console.log(this.DeckListCardsRemaining.length);
        console.log(this.DeckListCardsUsed.length);
    }
}

CardHand.prototype.addCard = function (card) {
    if (this.debug) {

        console.log(card)
    }
    var newCard = new Card(this.game, this.dungeon, this, card, this.x + (card.width * this.cardsInHand.length), this.y, card.width, card.height,  this.opacity)
    this.cardsInHand.push(newCard);
}

CardHand.prototype.draw = function () {
    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.cardsInHand[i].draw();
    }
    
};
CardHand.prototype.normalize = function () {
    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.cardsInHand[i].x = this.x + (this.cardsInHand[i].width * i);
    }
}
CardHand.prototype.update = function () {
    this.normalize();
    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.cardsInHand[i].update();    
    }
};
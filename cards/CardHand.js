function CardHand(game, dungeon, PlayerCharacter, opacity){
    this.x = game.width * .15;// each card will be 75 units wide for now
    this.y = game.height * .65;
    this.dungeon = dungeon;
    this.opacity = opacity;
    this.currentCardDraw = 6;
    this.cardsInHand = [];
    this.PlayerCharacter = PlayerCharacter;
    this.DeckList = this.PlayerCharacter.DeckList;
    this.DeckListCardsRemaining = this.PlayerCharacter.DeckList;
    this.DeckListCardsUsed = [];
    this.game = game;
    this.exhaustedCards = [];
    this.ctx = game.ctx;
    this.width = game.width / 8;
    this.cardclipwidth = this.width;
    //this.fn = fn; 
    this.debug = false;

    this.endPoint = this.width * 5 ;
};
CardHand.prototype.restoreExhausted = function () {
    console.log(this.exhaustedCards)
    var len =this.exhaustedCards.length;
    for (let i = 0; i < len; i++) {
        card  = this.exhaustedCards.pop();
        this.DeckListCardsRemaining.push(card);

    }
}

CardHand.prototype.removeTemporary = function () {
    console.log(this.DeckListCardsRemaining)
    for (let i = 0; i < this.DeckListCardsRemaining.length; i++) {
        card = this.DeckListCardsRemaining[i];
        if (card.temporary) {
            var index = this.DeckListCardsRemaining.indexOf(card);
            this.PlayerCharacter.DeckList.splice(index, 1)
            i -=1;
        }
        
    }
}
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
        //debugger
        var newCard = new Card(this.game, this.dungeon, this, card, this.x + (this.width * i), this.y,  i)
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
        //debugger
        var newCard = new Card(this.game, this.dungeon, this, card, this.x + (this.width * i), this.y,  i )

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
        //debugger
        var newCard = new Card(this.game, this.dungeon, this, card, this.x, this.y, this.cardsInHand.length)
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
    //debugger
    var newCard = new Card(this.game, this.dungeon, this, card, this.x + (this.width * this.cardsInHand.length), this.y, this.cardsInHand.length)
    this.cardsInHand.push(newCard);
}

CardHand.prototype.draw = function () {
    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.cardsInHand[i].draw(this.cardsInHand.length);
    }
    
};

CardHand.prototype.normalize = function () {
    for (let i = 0; i < this.cardsInHand.length; i++) {

        this.cardsInHand[i].x = this.x + ((this.endPoint / this.cardsInHand.length)* i);
        this.cardsInHand[i].pos = i;
    }
}
CardHand.prototype.update = function () {
    this.normalize();
    if (this.cardsInHand.length > 5) {
        this.cardclipwidth = this.endPoint / this.cardsInHand.length;
    }
    for (let i = this.cardsInHand.length - 1; i >= 0;  i--) {

        if (this.cardsInHand.length > 0 ) {
            this.cardsInHand[i].update();    
        }
    }
};
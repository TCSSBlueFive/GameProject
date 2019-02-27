function CardHand(game, dungeon, PlayerCharacter, opacity){
    this.x = 320;// each card will be 75 units wide for now
    this.y = 500;
    this.width = 140; //card width
    this.dungeon = dungeon;
    this.height = 183; //card height
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
};
CardHand.prototype.useAll = function () {

    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.DeckListCardsUsed.push(this.cardsInHand[i])
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


CardHand.prototype.reshuffle = function () {
    for (let i = 0; i < this.DeckListCardsUsed.length; i++) {
        this.DeckListCardsRemaining.push(this.DeckListCardsUsed[i].fn);
    }
    this.DeckListCardsUsed = [];

}
 
CardHand.prototype.generateInitialHand = function () {
    console.log("initial")

    console.log(this.DeckListCardsRemaining);
    console.log(this.DeckListCardsUsed);
    this.reshuffle();
    console.log(this.DeckListCardsRemaining);
    console.log(this.DeckListCardsUsed);

    for(let i = 0; i < this.currentCardDraw; i++) {
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        var cardChosen = this.DeckListCardsRemaining[myNum];
        var newCard = new Card(this.game, this.dungeon, this, cardChosen, this.x + (this.width * i), this.y, this.width, this.height, this.opacity)

        var index = this.DeckListCardsRemaining.indexOf(cardChosen);
        if (index > -1) {
            this.DeckListCardsRemaining.splice(index, 1);
            //this.DeckListCardsUsed.push(newCard);

        }

        this.cardsInHand[i] = newCard;
    }
    console.log(this.DeckListCardsRemaining);
    console.log(this.DeckListCardsUsed);
    console.log(this.cardsInHand);

    console.log("initial end")
}

CardHand.prototype.generateNewHand = function () {
    console.log("new hand")

    console.log(this.DeckListCardsRemaining);
    console.log(this.DeckListCardsUsed);
    console.log(this.cardsInHand);
    this.cardsInHand = [];
    for(let i = 0; i < this.currentCardDraw; i++) {
        if (this.DeckListCardsRemaining.length === 0) {
            this.reshuffle();
        }
        
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        var cardChosen = this.DeckListCardsRemaining[myNum];
        var newCard = new Card(this.game, this.dungeon, this, cardChosen, this.x + (this.width * i), this.y, this.width, this.height,  this.opacity)

        var index = this.DeckListCardsRemaining.indexOf(cardChosen);
        if (index > -1) {
            this.DeckListCardsRemaining.splice(index, 1);
        }
        this.cardsInHand[i] = newCard;
    }
    console.log(this.DeckListCardsRemaining);
    console.log(this.DeckListCardsUsed);
    console.log(this.cardsInHand);
    console.log("new hand end")


}
CardHand.prototype.drawCard = function () {
    console.log(this.DeckListCardsRemaining.length);
    console.log(this.DeckListCardsUsed.length);
        if (this.DeckListCardsRemaining.length === 0) {
        this.reshuffle();
    }
    if (this.DeckListCardsRemaining.length != 0) {
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        var cardChosen = this.DeckListCardsRemaining[myNum];
        var newCard = new Card(this.game, this.dungeon, this, cardChosen, this.x, this.y, this.width, this.height,  this.opacity)
        var index = this.DeckListCardsRemaining.indexOf(cardChosen);
        if (index > -1) {
            this.DeckListCardsRemaining.splice(index, 1);
        }
        this.cardsInHand.push(newCard);
    }
    console.log(this.DeckListCardsRemaining.length);
    console.log(this.DeckListCardsUsed.length);
}

CardHand.prototype.addCard = function (card) {
    console.log(card)
    var newCard = new Card(this.game, this.dungeon, this, card, this.x + (this.width * this.cardsInHand.length), this.y, this.width, this.height,  this.opacity)
    this.cardsInHand.push(newCard);
}

CardHand.prototype.draw = function () {
    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.cardsInHand[i].draw();
    }
    
};
CardHand.prototype.normalize = function () {
    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.cardsInHand[i].x = this.x + (this.width * i);
    }
}
CardHand.prototype.update = function () {
    this.normalize();
    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.cardsInHand[i].update();    
    }
};
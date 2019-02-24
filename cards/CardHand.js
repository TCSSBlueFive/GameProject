function CardHand(game, dungeon, PlayerCharacter, opacity){
    this.x = 500;// each card will be 75 units wide for now
    this.y = 500;
    this.width = 140; //card width
    this.dungeon = dungeon;
    this.height = 183; //card height
    this.opacity = opacity;
    this.currentCardDraw = 3;
    this.cardsInHand = [];
    this.PlayerCharacter = PlayerCharacter;
    this.DeckList = this.PlayerCharacter.DeckList;
    this.DeckListCardsRemaining = this.PlayerCharacter.DeckList;
    this.DeckListCardsUsed = [];

    
    this.game = game;
    this.ctx = game.ctx;
    //this.fn = fn; 
};


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
    this.reshuffle();

    for(let i = 0; i < this.currentCardDraw; i++) {
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        var cardChosen = this.DeckListCardsRemaining[myNum];
        var newCard = new Card(this.game, this.dungeon, this, cardChosen, this.x + (this.width * i), this.y, this.width, this.height, this.opacity)

        var index = this.DeckListCardsRemaining.indexOf(cardChosen);
        if (index > -1) {
            this.DeckListCardsRemaining.splice(index, 1);
            this.DeckListCardsUsed.push(newCard);

        }

        this.cardsInHand[i] = newCard;
    }

}

CardHand.prototype.generateNewHand = function () {
    
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
            this.DeckListCardsUsed.push(newCard);
        }
        this.cardsInHand[i] = newCard;
    }
}

CardHand.prototype.draw = function () {
    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.cardsInHand[i].draw();
    }
    
};

CardHand.prototype.update = function () {
    for (let i = 0; i < this.cardsInHand.length; i++) {
        this.cardsInHand[i].update();    
    }
};
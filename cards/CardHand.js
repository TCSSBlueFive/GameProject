function CardHand(game, spritesheet, PlayerCharacter, opacity){
    this.x = 500;// each card will be 75 units wide for now
    this.y = 600;
    this.width = 75; //card width
    this.height = 25; //card height
    this.opacity = opacity;
    this.currentCardDraw = 5;
    this.cardsInHand = [];
    this.PlayerCharacter = PlayerCharacter;
    this.DeckList = this.PlayerCharacter.DeckList;
    this.DeckListCardsRemaining = this.PlayerCharacter.DeckList;
    this.spritesheet = spritesheet;
    
    this.currentHand = this.DeckList.slice(0, 5);
    
    this.game = game;
    this.ctx = game.ctx;
    //this.fn = fn; 
};


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



CardHand.prototype.generateInitialHand = function () {
    this.DeckListCardsRemaining = this.PlayerCharacter.DeckList;
    for(let i = 0; i < this.currentCardDraw; i++) {
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        console.log(myNum);
        console.log(this.DeckListCardsRemaining.length);
        var cardChosen = this.DeckListCardsRemaining[myNum];
        console.log(cardChosen);

        var newCard = new Card(this.game, this, cardChosen.spritesheet, this.x + (this.width * i), this.y, this.width, this.height, cardChosen, this.opacity)

        var index = this.DeckListCardsRemaining.indexOf(cardChosen);
        if (index > -1) {
            this.DeckListCardsRemaining.splice(index, 1);
        }

        this.cardsInHand[i] = newCard;
    }
}

CardHand.prototype.generateNewHand = function () {
    for(let i = 0; i < currentCardDraw; i++) {
        if (this.DeckListCardsRemaining.length === 0) {
            this.DeckListCardsRemaining = this.PlayerCharacter.DeckList;
        }
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        var cardChosen = this.DeckListCardsremaining[myNum];
        var newCard = new Card(this.game, this, cardChosen.spritesheet, this.x + (this.width * i), this.y, this.width, this.height, cardChosen, opacity)


        var index = this.DeckListCardsRemaining.indexOf(cardChosen);
        if (index > -1) {
            this.DeckListCardsRemaining.splice(index, 1);
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
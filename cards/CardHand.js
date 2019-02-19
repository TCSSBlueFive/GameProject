function CardHand(game, dungeon, spritesheet, PlayerCharacter, opacity){
    this.x = 500;// each card will be 75 units wide for now
    this.y = 600;
    this.width = 75; //card width
    this.dungeon = dungeon;
    this.height = 25; //card height
    this.opacity = opacity;
    this.currentCardDraw = 5;
    this.cardsInHand = [];
    this.PlayerCharacter = PlayerCharacter;
    this.DeckList = this.PlayerCharacter.DeckList;
    this.DeckListCardsRemaining = this.PlayerCharacter.DeckList;
    this.DeckListCardsUsed = [];

    this.spritesheet = spritesheet;
    
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
}

CardHand.prototype.generateInitialHand = function () {
    console.log(this.DeckListCardsUsed);
    console.log(this.PlayerCharacter.DeckList);

    this.reshuffle();
    
    for(let i = 0; i < this.currentCardDraw; i++) {
        var myNum = getRandomInt(this.DeckListCardsRemaining.length);
        var cardChosen = this.DeckListCardsRemaining[myNum];

        var newCard = new Card(this.game, this.dungeon, this, cardChosen.spritesheet, this.x + (this.width * i), this.y, this.width, this.height, cardChosen, this.opacity)

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
        var newCard = new Card(this.game, this.dungeon, this, cardChosen.spritesheet, this.x + (this.width * i), this.y, this.width, this.height, cardChosen, this.opacity)

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
var AM = new AssetManager();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function CardRemovalScene(game, dungeon){
    this.dungeon = dungeon;
    this.game = game;
    this.ctx = game.ctx;
    this.x = game.width * .02;
    this.y = game.height * .1;
    this.opacity = 1;
    this.CardDataBase = new CardDataBase(this.game)
    this.width = this.CardDataBase.width;
    this.height = this.CardDataBase.height;    
    this.cards = dungeon.PlayerCharacter.DeckList;
    this.removal_cards = [];
    this.amount_fit_in_row = Math.floor(game.width / this.width)
};

CardRemovalScene.prototype.generateCards = function () {
    //does 5 bars
    
    for (let i = 0; i < this.dungeon.PlayerCharacter.DeckList.length; i++) {
        newCard = this.cards[i];
        //console.log(i%8)
        this.removal_cards[i] = new card_removal(this.game, this.dungeon, newCard , this.x + (i%this.amount_fit_in_row * this.width),
        this.y + (Math.floor((this.x + (( i+1) * this.width)) / this.game.width)) * this.height, i);
    }
}

CardRemovalScene.prototype.draw = function () {
    for(let i = 0; i < this.removal_cards.length; i++) {
        this.removal_cards[i].draw();
    }    
};

CardRemovalScene.prototype.update = function () {     
    for (let i = 0; i < this.removal_cards.length; i++) {
        this.removal_cards[i].update();    
    }
};

var AM = new AssetManager();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function CardSelectionScene(game, dungeon){
    this.dungeon = dungeon;
    this.cards = [];
    this.game = game;
    this.ctx = game.ctx;
    this.CardDataBase = new CardDataBase(game);
    this.x = game.width * .3334;
    this.y = game.height * .475;
    this.opacity = 1;
    this.width = this.CardDataBase.width;
    this.height = this.CardDataBase.height;
    this.textbox = new TextBox(game, this.x - game.width *.05084745, game.height * .205182, game.width * .47457, game.height * .10256, 'Choose a card...');
    
    this.buffer = 50
};


CardSelectionScene.prototype.generateCards = function () {
    //does 5 bars
    
    for (let i = 0; i < 3; i++) {
        var myNum = getRandomInt(this.CardDataBase.cards_rewards.length);
        newCard = this.CardDataBase.cards_rewards[myNum]
        this.cards[i] = new card_reward(this.game, this.dungeon,newCard , this.x + (i * this.width) + ( i * this.buffer), this.y);
    }
}

CardSelectionScene.prototype.draw = function () {
    this.textbox.draw();
    for(let i = 0; i < this.cards.length; i++) {
        this.cards[i].draw();
    }    
};

CardSelectionScene.prototype.update = function () {     
    for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].update();    
    }
};

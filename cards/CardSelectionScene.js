var AM = new AssetManager();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function CardSelectionScene(game, dungeon){
    this.dungeon = dungeon;
    this.cards = [];
    this.game = game;
    this.ctx = game.ctx;
    this.CardDataBase = new CardDataBase();
    this.x = 800;
    this.y = 450
    this.opacity = 1;
    this.width = 250;
    this.height = 327;

    
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

    for(let i = 0; i < this.cards.length; i++) {
        this.cards[i].draw();
    }    
};

CardSelectionScene.prototype.update = function () {     
    for (let i = 0; i < this.cards.length; i++) {
        this.cards[i].update();    
    }
};

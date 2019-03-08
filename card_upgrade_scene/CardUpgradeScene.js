var AM = new AssetManager();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function CardUpgradeScene(game, dungeon){
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
    this.upgradable_cards = [];
    this.amount_fit_in_row = Math.floor(game.width / this.width)
};

CardUpgradeScene.prototype.generateCards = function () {
    //does 5 bars
    var q = 0;
    for (let i = 0; i < this.dungeon.PlayerCharacter.DeckList.length; i++) {
        newCard = this.cards[i];
        //console.log(i%8)
        if(newCard.upgraded) {
            q -=1;
        } else {
            this.upgradable_cards.push(new card_upgradable(this.game, this.dungeon, newCard , this.x + (q%this.amount_fit_in_row * this.width),
            this.y + (Math.floor((this.x + ((q+1) * this.width)) / this.game.width)) * this.height, q));
        }
    q++;
    }
}

CardUpgradeScene.prototype.draw = function () {
    for(let i = 0; i < this.upgradable_cards.length; i++) {
        this.upgradable_cards[i].draw();
    }    
};

CardUpgradeScene.prototype.update = function () {     
    for (let i = 0; i < this.upgradable_cards.length; i++) {
        this.upgradable_cards[i].update();    
    }
};

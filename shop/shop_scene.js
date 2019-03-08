var AM = new AssetManager();


function shop_scene(game, spritesheet, dungeon, opacity){
    this.dungeon = dungeon;
    this.x = 20;
    this.y = 200;
    this.shop_cards = [];
    this.spritesheet = spritesheet;
    this.opacity = opacity;
    this.generic_cards = 5;
    this.special_cards = 2;
    this.CardDataBase = new CardDataBase(game);
    this.width = this.CardDataBase.width;
    this.height = this.CardDataBase.height;
    this.game = game;
    this.buffer = 0;
    this.shopRemoveX = game.width * .7;
    this.has_not_used_card_removal_service = true;
    this.shopRemoveY = game.height * .6;
    this.ctx = game.ctx;
    this.shopRemoveGoldX = this.shopRemoveX;
    this.shopRemoveGoldY = this.shopRemoveY + this.height + game.height * .03;
    
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

shop_scene.prototype.createAndAddCard = function (i) {
    var myNum = getRandomInt(this.CardDataBase.cards_rewards.length);
    newCard = this.CardDataBase.cards_rewards[myNum]

    var goldCost = getRandomInt(50) + 50;
    console.log(newCard);
    this.shop_cards[i] = new card_shop_item(this.game, this.dungeon, this, goldCost, newCard , this.x + (i * this.width) + ( i * this.buffer), this.y);
}

shop_scene.prototype.generateShopCards = function () {
    for (let i = 0; i < this.generic_cards; i++) {
        this.createAndAddCard(i);
    }
    for (let i = this.generic_cards; i< this.generic_cards + this.special_cards; i++) {
        this.createAndAddCard(i);
    }
}

shop_scene.prototype.remove = function (shop_item_to_remove) {
    var index = this.shop_cards.indexOf(shop_item_to_remove);
    if (index > -1) {
        this.shop_cards.splice(index, 1);
    }
}


shop_scene.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        0,0, this.game.width, this.game.height) ;
    for (let i = 0; i < this.shop_cards.length; i++) {
        this.shop_cards[i].draw();
    }
    this.ctx.save();
    this.ctx.font = "40px Impact"
    this.ctx.fillStyle = "#FFFF00"

    if (this.has_not_used_card_removal_service) {
        this.ctx.fillText("Remove a card?", this.shopRemoveX, this.shopRemoveY)
        this.ctx.drawImage(AM.getAsset("./img/card_removal_service.png"), this.shopRemoveX, this.shopRemoveY, this.width, this.height)
        this.ctx.fillText("Costs: ", this.shopRemoveGoldX, this.shopRemoveGoldY)

        if (this.dungeon.PlayerCharacter.gold >= 50) {
            this.ctx.fillStyle = "#00ff00";
        } else {
            this.ctx.fillStyle = "#ff0000";
        }
        this.ctx.fillText('50', this.shopRemoveGoldX + 108, this.shopRemoveGoldY); 

    }
    this.ctx.restore();

};



shop_scene.prototype.update = function () {    
    for (let i = 0; i < this.shop_cards.length; i++) {
        this.shop_cards[i].update();
    }
    if (this.game.click && this.has_not_used_card_removal_service && this.dungeon.PlayerCharacter.gold >= 50) {
        if((this.game.click['x'] > this.shopRemoveX && this.game.click['x'] < this.shopRemoveX + this.width  )
        && (this.game.click['y'] > this.shopRemoveY && this.game.click['y'] < this.shopRemoveY + this.height)) {
            this.dungeon.PlayerCharacter.gold -= 50;
            this.dungeon.prevState = this.dungeon.state;
            this.dungeon.state = 'card_removal'
            this.dungeon.stateChanged = true;
            this.has_not_used_card_removal_service = false;
            this.game.click = false;
        }
    }
};


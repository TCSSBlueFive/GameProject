function Smith_Option(game, dungeon, PlayerCharacter, spritesheet, Scene, opacity){
    this.x = game.width * .6;
    this.y = game.height * .5;
    this.width = game.width * .1186; 
    this.dungeon = dungeon;
    this.height = game.height * .166; 
    this.opacity = opacity;
    this.PlayerCharacter = PlayerCharacter;
    this.spritesheet = spritesheet;
    this.game = game;
    this.campfire_scene = Scene;

    this.ctx = game.ctx;
};



Smith_Option.prototype.atleast_one_card_upgradable  = function() {
    var flag = false;
    for (let i = 0; i < this.PlayerCharacter.DeckList.length; i++) {
        if (this.PlayerCharacter.DeckList[i].upgraded === false){
            console.log(this.PlayerCharacter.DeckList[i])
            return true;
        }
    }
    return flag;
}

Smith_Option.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.width, this.height);

    var fontSize = this.game.width * .0169
    this.ctx.font = fontSize + "px Arial";
    this.ctx.fillStyle = "#f0ff0f";
    this.ctx.fillText("Upgrade a card?", this.x, this.y);
};

Smith_Option.prototype.update = function () {
    if(((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
    && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) && this.atleast_one_card_upgradable()) {
        this.game.click = false;
        this.campfire_scene.display_options = false;
        this.dungeon.prevState = this.dungeon.state;
        this.dungeon.state = 'card_upgrade'
        this.dungeon.stateChanged = true;

        //enables uprgrade of one the cards
    }
};
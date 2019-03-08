function Rest_Option(game, dungeon, PlayerCharacter, spritesheet, Scene, opacity){
    this.x = game.width * .2;
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



Rest_Option.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.width, this.height);
    
    var fontSize = this.game.width * .0169
    this.ctx.font = fontSize + "px Arial";
    this.ctx.fillStyle = "#f0ff0f";
    this.ctx.fillText("Restore " + this.PlayerCharacter.maxhealth * .4  +" health?", this.x , this.y ); 
    
    
};


Rest_Option.prototype.update = function () {
    if((this.game.click['x'] > this.x && this.game.click['x'] < this.x + this.width)
    && (this.game.click['y'] > this.y && this.game.click['y'] < this.y + this.height)) {
        this.PlayerCharacter.heal(this.PlayerCharacter.maxhealth *.4)
        this.game.click = false;
        this.campfire_scene.display_options = false;

    }
};
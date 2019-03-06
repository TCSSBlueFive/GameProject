var AM = new AssetManager();

function TopBanner(game,opacity) {
    this.x = 0;
    this.y = 0;
    this.opacity = opacity;
    this.game = game;
    this.ctx = game.ctx;
    this.width = game.width;
    this.height = game.height * .072;
    this.banner_spritesheet = AM.getAsset("./img/travel/top banner.png")
    this.sprite_heart = AM.getAsset("./img/heart_sprite.png")
    this.sprite_gold = AM.getAsset("./img/gold_sprite.png")
    this.sprite_time = AM.getAsset("./img/time_sprite.png")
    this.sprite_class = AM.getAsset("./img/class_sprite.png")
    this.sprite_floor = AM.getAsset("./img/floor_sprite.png")


    this.yOffset = this.game.height * .018181818;

    

};

TopBanner.prototype.draw = function () {

    this.ctx.drawImage(this.banner_spritesheet,
                   this.x, this.y, this.width, this.height);

    this.ctx.save();
    this.ctx.fillStyle = "#FF8C00";
    this.ctx.font = '30px Arial Black'

    //displays class and icon
    this.ctx.drawImage(this.sprite_class, this.game.width * .005,  this.yOffset, this.game.width *.023, this.game.height * .0424);
    this.ctx.fillText("The " +this.game.currentDungeon.PlayerCharacter.class, this.game.width *.023, this.game.height * .067); 
    
    //displays health and icon
    this.ctx.fillStyle = "#FFB6C1";

    this.ctx.drawImage(this.sprite_heart, this.game.width * .1508 , this.yOffset, this.game.width *.023, this.game.height *.04);
    this.ctx.fillText( this.game.currentDungeon.PlayerCharacter.health + "/"
                     + this.game.currentDungeon.PlayerCharacter.maxhealth, this.game.width * .1508 + this.game.width *.023 , this.game.height* .06667 ); 


    //displays gold and icon
    this.ctx.drawImage(this.sprite_gold, this.game.width * .24237, this.yOffset, this.game.width * .027118, this.game.height *.0484848);
    this.ctx.fillStyle = "#FFFF00";
    this.ctx.fillText( this.game.currentDungeon.PlayerCharacter.gold, this.game.width * .24237 + this.game.width * .027118, this.game.height *.0666667); 


    //displays time and icon
    this.ctx.fillStyle = "#2E8B57";
    this.ctx.drawImage(this.sprite_time, this.game.width *.303389, this.yOffset, this.game.width * .018644, this.game.height * .042424242);


    var minutes = Math.floor(this.game.timer.gameTime / 60);
    var displayedMinutes = Math.floor(minutes % 60);
    var hour = Math.floor(minutes / 60);
    var seconds = Math.floor(this.game.timer.gameTime % 60);
    this.ctx.fillText(+Math.round(hour) + ':' + displayedMinutes + '.' + Math.round(seconds), this.game.width *.303389 + this.game.width * .018644 , this.game.height * .066667); 

    //displays floor and icon
    this.ctx.fillStyle = "#FFDEAD";
    this.ctx.drawImage(this.sprite_floor, this.game.width *.381355, this.yOffset, this.game.width * .030508, this.game.height * .040606);
    this.ctx.fillText(this.game.currentDungeon.floor, this.game.width *.381355 + this.game.width * .030508, this.game.height * .066667);

    this.ctx.restore();
};

TopBanner.prototype.update = function () {

};

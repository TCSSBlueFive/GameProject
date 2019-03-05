var AM = new AssetManager();

function TopBanner(game,opacity) {
    this.x = 0;
    this.y = 0;
    this.opacity = opacity;
    this.game = game;
    this.ctx = game.ctx;
    this.width = game.width;
    this.height = 120;
    this.banner_spritesheet = AM.getAsset("./img/travel/top banner.png")
    this.sprite_heart = AM.getAsset("./img/heart_sprite.png")
    this.sprite_gold = AM.getAsset("./img/gold_sprite.png")
    this.sprite_time = AM.getAsset("./img/time_sprite.png")
    this.sprite_class = AM.getAsset("./img/class_sprite.png")
    this.sprite_floor = AM.getAsset("./img/floor_sprite.png")


    this.yOffset = 30;

    

};

TopBanner.prototype.draw = function () {

    this.ctx.drawImage(this.banner_spritesheet,
                   this.x, this.y, this.width, this.height);

    this.ctx.save();
    this.ctx.fillStyle = "#FF8C00";
    this.ctx.font = '30px Arial Black'

    //displays class and icon
    this.ctx.drawImage(this.sprite_class, 15, this.yOffset);
    this.ctx.fillText("The " +this.game.currentDungeon.PlayerCharacter.class, 90, 110); 
    
    //displays health and icon
    this.ctx.fillStyle = "#FFB6C1";

    this.ctx.drawImage(this.sprite_heart, 445 , this.yOffset);
    this.ctx.fillText( this.game.currentDungeon.PlayerCharacter.health + "/"
                     + this.game.currentDungeon.PlayerCharacter.maxhealth, 505, 110); 


    //displays gold and icon
    this.ctx.drawImage(this.sprite_gold, 715, this.yOffset);
    this.ctx.fillStyle = "#FFFF00";

    this.ctx.fillText( this.game.currentDungeon.PlayerCharacter.gold, 800, 110); 

    //displays time and icon
    this.ctx.fillStyle = "#2E8B57";
    this.ctx.drawImage(this.sprite_time, 895, this.yOffset);
    var minutes = Math.floor(this.game.timer.gameTime / 60);
    var displayedMinutes = Math.floor(minutes % 60);
    var hour = Math.floor(minutes / 60);
    var seconds = Math.floor(this.game.timer.gameTime % 60);
    this.ctx.fillText(+Math.round(hour) + ':' + displayedMinutes + '.' + Math.round(seconds), 960, 110); 

    //displays floor and icon
    this.ctx.fillStyle = "#FFDEAD";
    this.ctx.drawImage(this.sprite_floor, 1125, this.yOffset);
    this.ctx.fillText(this.game.currentDungeon.floor, 1225, 110);

    this.ctx.restore();
};

TopBanner.prototype.update = function () {

};

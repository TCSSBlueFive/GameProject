function TopBanner(game, spritesheet, opacity) {
    this.x = 0;
    this.y = 0;
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;

};

TopBanner.prototype.draw = function () {

    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
    this.ctx.save();
    this.ctx.font = "45px Arial";
    this.ctx.fillStyle = "#00ff00";
    this.ctx.fillText("Health: " + this.game.currentDungeon.PlayerCharacter.health, 10, 40); 
    this.ctx.fillText("Class: " + this.game.currentDungeon.PlayerCharacter.class, 10, 110); 
    
    var minutes = Math.floor(this.game.timer.gameTime / 60);
    var displayedMinutes = Math.floor(minutes % 60);
    var hour = Math.floor(minutes / 60);
    var seconds = Math.floor(this.game.timer.gameTime % 60);

    this.ctx.fillText("Time Spent: " + Math.round(hour) + ':' + displayedMinutes + '.' + Math.round(seconds), 500, 40); 
    this.ctx.fillText("Gold: " + this.game.currentDungeon.PlayerCharacter.gold, 500, 110); 

    this.ctx.restore();
};

TopBanner.prototype.update = function () {

};

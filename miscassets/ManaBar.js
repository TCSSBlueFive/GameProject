function ManaBar(game, spritesheet, width, height, opacity) {
    this.x = 200;
    this.y = 875;
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
    this.mana = 3;
    this.width = width + 30;
    this.height = height + 30;
    this.manaPCNT = 1;
    this.maxMana = 3;
};

ManaBar.prototype.enoughMana = function (someNum) {
    if (someNum <= this.mana) {
        this.mana -= someNum;

        return true;
    } else {
        false;
    }
}

ManaBar.prototype.draw = function () {
    //border
    this.ctx.drawImage(this.spritesheet[0],
    this.x, this.y, this.width, this.height);

    //mana empty
    this.ctx.drawImage(this.spritesheet[1],
        this.x, this.y, this.width, this.height);
    //mana full
    if (this.mana > 0){
    this.ctx.drawImage(this.spritesheet[2],
                   this.x, this.y, this.width, this.height);//,((this.mana/this.maxMana) * this.width), this.height);
    }

    this.ctx.save();
    this.ctx.font = "40px Impact";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText(this.mana , this.x + 50, this.y + 80 ); 
    this.ctx.font = "70px Impact";

    this.ctx.fillText('/', this.x + 75, this.y + 110 ); 
    this.ctx.font = "40px Impact";
    this.ctx.fillText(this.maxMana , this.x + 110, this.y +120 ); 


};

ManaBar.prototype.reset = function () {
    this.mana = this.maxMana;
}

ManaBar.prototype.update = function () {
};
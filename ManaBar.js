function ManaBar(game, spritesheet, width, height, opacity) {
    this.x = 100;
    this.y = 475;
    this.opacity = opacity;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
    this.mana = 3;
    this.width = width;
    this.height = height;
    this.manaPCNT = 1;
    this.maxMana = 3;
};

ManaBar.prototype.enoughMana = function (someNum) {
    console.log(someNum);
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
    this.x, this.y);

    //mana empty
    this.ctx.drawImage(this.spritesheet[1],
        this.x, this.y, this.width, this.height);
    //mana full
    if (this.mana > 0){
    this.ctx.drawImage(this.spritesheet[2],
                   this.x, this.y, this.width, this.height);//,((this.mana/this.maxMana) * this.width), this.height);
    }
};

ManaBar.prototype.reset = function () {
    this.mana = this.maxMana;
}

ManaBar.prototype.update = function () {
};
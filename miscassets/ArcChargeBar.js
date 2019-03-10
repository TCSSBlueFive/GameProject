function ArcChargeBar(game) {
    this.x = game.width * .7;
    this.y = game.height * .07;

    //this.ArcChargeBar = battle;

    this.opacity = 1;
    this.game = game;
    this.ctx = game.ctx;
    this.ArcCharges = 5;

    this.enabled = true;
};



ArcChargeBar.prototype.draw = function () {
    this.ctx.save();
    this.ctx.font = "30px Arial"
    this.ctx.fillText("My Arc Charge Count:" + this.ArcCharges, this.x, this.y)
    this.ctx.restore();
};

ArcChargeBar.prototype.reset = function () {
    this.ArcCharges = 0;
    this.enable();
}

ArcChargeBar.prototype.update = function () {
};

ArcChargeBar.prototype.addCharges = function (num) {
    if (this.enabled) {
        this.ArcCharges += num;
        console.log(this.ArcCharges)
    }

}

ArcChargeBar.prototype.mult = function (num, additional) {
    if (this.enabled) {
        this.ArcCharges *= num;
        this.ArcCharges += additional;
    }

}
ArcChargeBar.prototype.disable = function () {
    this.enabled = false;
}

ArcChargeBar.prototype.enable = function () {
    this.enabled = true;

}
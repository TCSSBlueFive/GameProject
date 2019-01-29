//frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {


 
function PlayerCharacter(game, spritesheet, enemy, cardDataBase) {
    this.animation = new Animation(spritesheet, 200, 300, 1, .1, 14, true, 1);
    this.x = 200;
    this.y = 250;
    const AttCard = new Card(game,cardDataBase.cards[0], this);

    this.DeckList = [AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard];
    this.health = 100;
    this.attack = 30;

    this.speed = 0;
    this.game = game;
    this.battle = game.battle;
    this.ctx = game.ctx;
}

PlayerCharacter.prototype.attackCard = function() {
    this.battle.enemy.health -= 10;
}

PlayerCharacter.prototype.update = function () {
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;
    if (this.x > 1400) this.x = -230;
}
PlayerCharacter.prototype.draw = function () {
    this.animation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 0);
   // this.ctx.drawImage(this.spritesheet,this.x, this.y);
}

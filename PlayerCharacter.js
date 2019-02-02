
 
function PlayerCharacter(game, spritesheet, enemy, cardDataBase) {
    this.IdleAnimation = new Animation(spritesheet, 200, 300, 1, .1, 14, true, .9);
    //this.IdleAnimation = new Animation(spritesheet, 110, 230, 1, 1, 1, true, 1 );
    //this.AttackAnimation = to be added
    this.idle = true;
    this.x = 250;
    this.y = 250;
    this.selectedMove = {type: 'damage', value: 20 };
    this.DeckList = [{type: 'damage', value: 20 }, {type: 'damage', value: 20 }, {type: 'damage', value: 20 }, {type: 'damage', value: 20 }
                    ,{type: 'damage', value: 20 },{type: 'damage', value: 20 },{type: 'damage', value: 20 }];
    
                    
    this.health = 100;
    this.attack = 30;

    this.speed = 0;
    this.game = game;
    this.battle = game.battle;
    this.ctx = game.ctx;
}

PlayerCharacter.prototype.playCard = function() {
    //return this.AttCard;
    return this.selectedMove;
}

PlayerCharacter.prototype.update = function () {
    //needs to be added
}
PlayerCharacter.prototype.draw = function () {
    if (this.idle) {
        this.IdleAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 0);
    }
}

PlayerCharacter.prototype.takeDamage = function (attackDamage) {
    // call player damage animation
    this.health -= attackDamage;
}

PlayerCharacter.prototype.isAlive = function () {
    return this.health > 0;
}
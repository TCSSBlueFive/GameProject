
 
function PlayerCharacter(game, spritesheet, cardDataBase) {

    this.idleAnimation = new Animation(spritesheet[0], 37, 80, 1, .5, 2, true, 2);
    this.walkingRightAnimation = new Animation(spritesheet[2], 38, 79, 1, .5, 2, true, 2);
    this.walkingLeftAnimation = new Animation(spritesheet[3], 38, 79, 1, .5, 2, true, 2);
    this.attackingAnimation = new Animation(spritesheet[1], 50, 103, 1, .5, 3, true, 2);
    this.deathAnimation = new Animation(spritesheet[4], 83, 40, 1, .5, 2, true, 2);
    this.dodgeAnimation = new Animation(spritesheet[5], 42, 100, 1, .5, 4, true, 2);
    //this.AttackAnimation = to be added
    this.action = 'idle';
    this.x = 250;
    this.y = 300;
    //this.AttCard = new Card(game,cardDataBase.cards[0], this);

    //this.DeckList = [AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard, AttCard];
    this.health = 100;
    this.attack = 30;

    this.speed = 0;
    this.game = game;
    this.battle = game.battle;
    this.ctx = game.ctx;
}

PlayerCharacter.prototype.playCard = function() {
    this.action = 'attack';
    return {type: 'damage', value: 20 }
}

PlayerCharacter.prototype.update = function () {
    //needs to be added
}

PlayerCharacter.prototype.draw = function () {
    debugger
    if (this.action === 'attack') {
        this.attackingAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, .1);
    } else if (this.action === 'walking-right') {
        this.walkingRightAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, .55);
    } else if (this.action === 'walking-left') {
        this.walkingLeftAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 1.3);
    } else if (this.action === 'death') {
        this.deathAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, .25);
    } else if (this.action === 'dodge') {
        this.dodgeAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, .313);
    } else {
        this.idleAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 1.72);
    }
}

PlayerCharacter.prototype.takeDamage = function (attackDamage) {
    // call player damage animation
    this.health -= attackDamage;
}

PlayerCharacter.prototype.isAlive = function () {
    return this.health > 0;
}
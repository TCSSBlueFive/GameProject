
 
function PlayerCharacter(game, spritesheet, HPBar, Manabar, opacity) {

    this.idleAnimation = new Animation(spritesheet[0], 37, 80, 1, .5, 2, true, 2,0,0);
    this.walkingRightAnimation = new Animation(spritesheet[2], 38, 79, 1, .5, 2, true, 2,0,0);
    this.walkingLeftAnimation = new Animation(spritesheet[3], 38, 79, 1, .5, 2, false, 2,0,0);
    this.attackingAnimation = new Animation(spritesheet[1], 50, 103, 1, .5, 3, false, 2,0,0);
    this.deathAnimation = new Animation(spritesheet[4], 83, 40, 1, .5, 2, true, 2,0,0);
    this.dodgeAnimation = new Animation(spritesheet[5], 42, 100, 1, .5, 4, true, 2,0,0);
    this.opacity = opacity;
    this.action = 'walking-right';
    this.CardBase = new CardDataBase(this.game);
    this.DeckList = [...this.CardBase.cards];

    this.HPBar = HPBar;
    this.Manabar = Manabar;
    
    this.x = 250;
    this.y = 360;

    this.HPBar.x = this.x - 20;
    this.HPBar.y = this.y - 20;

    this.health = 100;
    this.attack = 30;

    this.speed = 0;
    this.game = game;
    this.battle = game.battle;
    this.ctx = game.ctx;
}

PlayerCharacter.prototype.playCard = function() {
    this.game.cooldown = 100;
    this.action = 'attack';
}

PlayerCharacter.prototype.update = function () {

}

PlayerCharacter.prototype.draw = function () {
    this.HPBar.draw();
    this.Manabar.draw();
    if (this.action === 'attack') {
        this.attackingAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, .1);
        if ((this.attackingAnimation.isDone())) {
            this.action = 'walking-right';
            this.attackingAnimation.elapsedTime = 0;
        }
    } else if (this.action === 'walking-right') {
        this.walkingRightAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, .55);
    } else if (this.action === 'walking-left') {
        this.walkingLeftAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 1.3);
        if ((this.walkingLeftAnimation.isDone())) {
            this.action = 'walking-right';
            this.walkingLeftAnimation.elapsedTime = 0;
        }
    } else if (this.action === 'death') {
        this.deathAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, .25);
    } else if (this.action === 'dodge') {
        this.dodgeAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, .313);
    } else {
        this.idleAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 1.72);
    }
}

PlayerCharacter.prototype.takeDamage = function (attackDamage) {
    this.action = 'walking-left';
    this.health -= attackDamage;
    this.HPBar.health -= attackDamage;
    if (this.HPBar.health <0) {
        this.HPBar.health = 0;
    }
}

PlayerCharacter.prototype.heal = function (healthPoints) {
    this.health += healthPoints;
    this.HPBar.health += healthPoints;
}

PlayerCharacter.prototype.died = function() {
    this.action = 'death';
    this.y = 470;
    this.x = 220;
    
}

PlayerCharacter.prototype.isAlive = function () {
    return this.health > 0;
}
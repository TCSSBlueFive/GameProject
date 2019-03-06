
var AM = new AssetManager(); 
function PlayerCharacter(game, spritesheet, HPBar, Manabar, opacity) {

    this.idleAnimation = new Animation(spritesheet[0], 37, 80, 1, .5, 2, true, 2,0,0);
    this.deathAnimation = new Animation(spritesheet[4], 83, 40, 1, .5, 2, true, 2,0,0);
    this.dodgeAnimation = new Animation(spritesheet[5], 42, 100, 1, .5, 4, true, 2,0,0);
    this.opacity = opacity;
    this.action = 'walking-right';
    this.CardBase = new CardDataBase(game);
    this.DeckList = [...this.CardBase.cards];
    this.class = 'Omnimage'
    this.HPBar = HPBar;
    this.Manabar = Manabar;
    this.x = game.width * .0975;
    this.y = game.height * .38;
    this.HPBar.x = this.x + game.height * .09;
    this.HPBar.y = this.y - 55;
    this.gold = 0;
    this.health = 100;
    this.maxhealth = 100;
    this.attack = 30;
    this.block = 0;
    this.speed = 0;
    this.game = game;
    this.battle = game.battle;
    this.ctx = game.ctx;
    this.value = 90;
    this.xOffset = 0;
    this.yOffset = 0;

    this.walkingRightAnimation = new Animation(AM.getAsset("./img/player/Duesa_Idle_00-Sheet.png"),  446, 344, 1, .035, 61, true, .8,0,0);
    this.walkingLeftAnimation = new Animation(AM.getAsset("./img/player/Duesa_Damage_00-Sheet.png"), 446, 344, 1, .035,31, false, .8,0,0);
    this.attackingAnimation = new Animation(AM.getAsset("./img/player/Duesa_Attack C_00-Sheet.png"), 446, 344, 1, .035, 31, false, .8,0,0);
    


    //an array for damage taken sources so that multiple damage text
    //will show.
    this.damage_taken_array = [];
}

PlayerCharacter.prototype.playCard = function() {
    this.game.cooldown = 100;

    this.action = 'attack';
}

PlayerCharacter.prototype.update = function () {
    this.HPBar.update(this.health)
}

PlayerCharacter.prototype.draw = function () {

    if (this.damage_taken_array.length > 0) {
        for (let i = 0; i < this.damage_taken_array.length; i++) {
            this.damage_taken_array[i].draw();
        }
    }
    this.HPBar.draw();
    this.Manabar.draw();
    if (this.action === 'attack') {
        this.attackingAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 0);
        if ((this.attackingAnimation.isDone())) {
            this.action = 'walking-right';
            this.attackingAnimation.elapsedTime = 0;
        }
    } else if (this.action === 'walking-right') {
        this.walkingRightAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 0);
    } else if (this.action === 'walking-left') {
        this.walkingLeftAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, 0);
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
    console.log()
    this.action = 'walking-left';
    const num = this.block;
    this.block -= attackDamage;
    attackDamage -= num;
    this.damage_taken_array.push(new damage_taken_numbers(this.game, this.damage_taken_array,attackDamage, 'damage',this.x + 90, this.y));

    if (this.block < 0) {
        this.block = 0
    }
    if (attackDamage < 0) {
        attackDamage = 0
    }
    this.health -= attackDamage;
    if (this.health < 0) {
        this.health = 0;
    }

}

PlayerCharacter.prototype.heal = function (healthPoints) {
    this.damage_taken_array.push(new damage_taken_numbers(this.game, this.damage_taken_array,healthPoints, 'heal',this.x + 90, this.y));
    this.health += healthPoints;
}

PlayerCharacter.prototype.died = function() {
    this.action = 'death';
    this.y += 130;
    this.x -= 45;
    
}

PlayerCharacter.prototype.isAlive = function () {
    return this.health > 0;
}
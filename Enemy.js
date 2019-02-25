
function Enemy(game, EnemyFromDatabase, opacity) {

    this.IdleAnimation = EnemyFromDatabase.animation;
    this.attackingAnimation = EnemyFromDatabase.attackAnimation;
    this.DeathAnimation = EnemyFromDatabase.deathAnimation;
    this.yIndexIdle = EnemyFromDatabase.animation.yIndex;
    this.yIndexAttack = EnemyFromDatabase.attackAnimation.yIndex;
    this.yDeathIndex = EnemyFromDatabase.deathAnimation.yIndex;
    this.damagedAnimation = EnemyFromDatabase.damagedAnimation;
    this.yDamagedIndex = EnemyFromDatabase.damagedAnimation.yIndex;
    this.opacity = opacity;


    this.HPBar = EnemyFromDatabase.HPBar;
    this.HPBar.health = EnemyFromDatabase.health;
    this.HPBar.x = EnemyFromDatabase.hpx;
    this.HPBar.y = EnemyFromDatabase.hpy;
    this.x = EnemyFromDatabase.x;
    this.y = EnemyFromDatabase.y;
    this.health = EnemyFromDatabase.health;
    this.attack = EnemyFromDatabase.attacks; // needs to return an array so that we can randomly select an attack

    this.speed = 0;
    this.action = 'idle';

    this.stunned = false;
    this.idle = true;
    this.yIndex = EnemyFromDatabase.yIndex;
    this.game = game;
    this.ctx = game.ctx;
}

Enemy.prototype.attackPlayer = function () {
    // call enemy attack animation right here
    this.action = 'attack';
    //var randomAttack = Math.random() * this.attacks.length; for when we random a move
    this.game.cooldown = 100;
    return this.attack;
}

Enemy.prototype.takeDamage = function (attackDamage) {
    this.action = 'taking-damage'
    this.health -= attackDamage;
    this.HPBar.health -= attackDamage;
    if (this.HPBar.health <0) {
        this.HPBar.health = 0;
    }
}

Enemy.prototype.update = function () {
    this.HPBar.update(this.health);
    //needs to be added
}
Enemy.prototype.checkNotStunned = function() {
    if (this.stunned === false) {
        return true;
    } else {
        this.stunduration -= 1;
        if (this.stunduration === 0) {
            this.stunned = false;
        }
        return false;
    }
    
}
Enemy.prototype.setStun = function (num) {
    this.stunned = true;
    this.stunduration = num;
}

Enemy.prototype.isAlive = function () {
    if(this.health <= 0) {
        this.action = 'death';
    }
    return this.health > 0;
}

Enemy.prototype.draw = function () {
    this.HPBar.draw();
    if (this.action === 'attack') {
        this.attackingAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, this.yIndexAttack);
        if ((this.attackingAnimation.isDone())) {
            this.action = 'idle';
            this.attackingAnimation.elapsedTime = 0;
        }
    } else if (this.action === 'idle') {
        this.IdleAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, this.yIndexIdle);
    
    } else if (this.action === 'death') {
        this.DeathAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, this.yDeathIndex);
    } 
    else if (this.action === 'taking-damage') {
        this.damagedAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, this.yDamagedIndex);
        if ((this.damagedAnimation.isDone())) {
            this.action = 'idle';
            this.damagedAnimation.elapsedTime = 0;
        }
    } 
}


function Enemy(game, EnemyFromDatabase, HPBar, opacity) {
    this.HPBar = HPBar,
    this.IdleAnimation = EnemyFromDatabase.animation;
    this.attackingAnimation = EnemyFromDatabase.attackAnimation;
    this.DeathAnimation = EnemyFromDatabase.deathAnimation;
    this.yIndexIdle = EnemyFromDatabase.animation.yIndex;
    this.yIndexAttack = EnemyFromDatabase.attackAnimation.yIndex;
    this.yDeathIndex = EnemyFromDatabase.deathAnimation.yIndex;
    this.damagedAnimation = EnemyFromDatabase.damagedAnimation;
    this.yDamagedIndex = EnemyFromDatabase.damagedAnimation.yIndex;
    this.opacity = opacity;

    this.HPBar = HPBar;
    this.HPBar.x = 1000;
    this.HPBar.y = 400;
    this.x = 1000;
    this.y = 400;
    this.health = EnemyFromDatabase.health;
    this.attack = EnemyFromDatabase.attacks; // needs to return an array so that we can randomly select an attack

    this.speed = 0;
    this.action = 'idle';
    this.idle = true;
    this.yIndex = EnemyFromDatabase.yIndex;
    this.game = game;
    this.ctx = game.ctx;
}

Enemy.prototype.attackPlayer = function () {
    // call enemy attack animation right here
    this.action = 'attack';
    //var randomAttack = Math.random() * this.attacks.length; for when we random a move
    return this.attack;
}

Enemy.prototype.takeDamage = function (attackDamage) {
    this.action = 'taking-damage'
    this.health -= attackDamage;
    this.HPBar.health -= attackDamage;
}

Enemy.prototype.update = function () {
    //needs to be added
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

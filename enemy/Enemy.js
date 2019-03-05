
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

    this.attack_sprite = new EnemyDataBase(game).attacksprite;
    console.log(this.attack_sprite)

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
    this.damage_taken_array = [];
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
    this.damage_taken_array.push(new damage_taken_numbers(this.game, this.damage_taken_array,attackDamage, 'damage', this.x - 90, this.y));

    this.HPBar.health -= attackDamage;
    if (this.HPBar.health <0) {
        this.HPBar.health = 0;
    }
}

Enemy.prototype.update = function () {
    this.HPBar.update(this.health);
    //needs to be added
    //what attacks it decides to prep may depend on its health.
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
    this.ctx.drawImage(this.attack_sprite, this.HPBar.x + 60, this.HPBar.y - 100)
    this.ctx.save();
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillStyle = '#FF0000'
    this.ctx.font = '40px Arial'

    this.ctx.fillText(this.attack.value, this.HPBar.x + 120, this.HPBar.y - 90)

    this.ctx.restore();
    if (this.damage_taken_array.length > 0) {
        for (let i = 0; i < this.damage_taken_array.length; i++) {
            this.damage_taken_array[i].draw();
        }
    }
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

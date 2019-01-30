
function Enemy(game, EnemyFromDatabase) {
    this.IdleAnimation = EnemyFromDatabase.animation;
    //this.AnimationAttack = [EnemyFromDatabase.AttackAnimation] This attack animation needs to be added to the database
    this.x = 1000;
    this.y = 400;
    this.health = EnemyFromDatabase.health;
    this.attack = EnemyFromDatabase.attack;
    this.speed = 0;
    console.log(this.attack);
    console.log(EnemyFromDatabase)
    this.idle = true;
    this.yIndex = EnemyFromDatabase.yIndex;
    this.game = game;
    this.ctx = game.ctx;
}


Enemy.prototype.update = function () {
    //needs to be added
}

Enemy.prototype.draw = function () {
    if (this.idle) {
        this.IdleAnimation.drawFrameLeftToRight(this.game.clockTick, this.ctx, this.x, this.y, this.yIndex);
    } 
    
}

//WORK IN PROGRESS

function Battle(game, PlayerCharacter) {
    this.game = game;
    this.PlayerCharacter = PlayerCharacter;
}



Battle.prototype.GenerateEnemyAttack = function() {
    return this.Enemy.attack;
}

Battle.prototype.playerMove = function() {
    if (this.PlayerTurn === true) {
        const selectedMove = this.PlayerCharacter.selectedMove;
        selectedMove();
        this.PlayerTurn === false;
    }
}

Battle.prototype.enemyMove = function() {
    if (this.EnemyTurn === true) {
        const selectedMove = GenerateEnemyAttack();
        selectedMove();
    }
}

Battle.prototype.isOverWin = function() {
    if (this.Enemy.health <= 0 ) {
        this.isBattleOver = true;
        this.game.travel = true;
        this.game.battle = false;
    }
}

Battle.prototype.isOverLoss = function() {
    if (this.PlayerCharacter.health <= 0) {
        this.isBattleOver = true;
        this.isGameOver = true;
    }
}



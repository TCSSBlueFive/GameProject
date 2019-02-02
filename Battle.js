//WORK IN PROGRESS

function Battle(game, Enemies, PlayerCharacter) {
    this.game = game;
    this.PlayerCharacter = PlayerCharacter;
    this.Enemies = Enemies.constructor === Array ? [...Enemies] : [Enemies];
    this.PlayerTurn = false
    this.isBattleOver = false
}

Battle.prototype.playerMove = function() {
    if (this.PlayerTurn && !this.isBattleOver) {
        var selectedMove = this.PlayerCharacter.playCard();
        if (selectedMove.type === 'damage') {
            this.Enemies[0].takeDamage(selectedMove.value);
            if (!this.Enemies[0].isAlive()) {
                this.isBattleOver = true;
            }
        }
        this.PlayerTurn === false;
    }
    console.log("Enemy Health: " + this.Enemies[0].health, "Player Health: " + this.PlayerCharacter.health);
}

Battle.prototype.enemyMoves = function() {
    if (!this.playerMove && !this.isBattleOver) {
        for (enemy in this.Enemies) {
            if (enemy.isAlive())
            var attack = enemy.attack()
            if (attack.type === 'damage') {
                this.PlayerCharacter.takeDamage(attack.value);
                if (!this.PlayerCharacter.isAlive()) {
                    this.battle.isBattleOver = true;
                    this.game.gameOver()
                }
            }
            // deal with buffs for enemies or blocks here
        }
    }

    this.PlayerTurn = true;
    console.log("Enemy Health: " + this.Enemies[0].health, "Player Health: " + this.PlayerCharacter.health);
}



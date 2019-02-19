//WORK IN PROGRESS

function Battle(game, Enemies, dungeon, PlayerCharacter) {
    this.game = game;
    this.PlayerCharacter = PlayerCharacter;
    //this.Enemies = Enemies.constructor === Array ? [...Enemies] : [Enemies];
    this.Enemy = Enemies;
    this.PlayerTurn = true;
    this.dungeon = dungeon;
    this.isBattleOver = false;
}

Battle.prototype.playerMove = function(card) {
    console.log(card.fn);
    if (this.PlayerTurn && !this.isBattleOver) {
        //var selectedMove = this.PlayerCharacter.playCard();
        if (card.fn.type === 'damage') {
            this.Enemy.takeDamage(card.fn.value);
            if(!this.Enemy.isAlive()) {
                this.isBattleOver = true;
                this.dungeon.BattleOngoing = false;
                this.dungeon.rewardScene = true;
                console.log("wae");
            }
        }
        this.PlayerTurn === false;
    }
   // console.log("Enemy Health: " + this.Enemies[0].health, "Player Health: " + this.PlayerCharacter.health);
    console.log("Enemy Health: " + this.Enemy.health, "Player Health: " + this.PlayerCharacter.health);

}


Battle.prototype.enemyMoves = function() {
    if (this.PlayerTurn && !this.isBattleOver) {
        if( this.Enemy.isAlive()) {
            var attack = this.Enemy.attackPlayer();
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

   // this.PlayerTurn = true;
    console.log("Enemy Health: " + this.Enemy.health, "Player Health: " + this.PlayerCharacter.health);
}



//WORK IN PROGRESS

function Battle(game, Enemies, dungeon, PlayerCharacter, newCardHand) {
    this.game = game;
    this.PlayerCharacter = PlayerCharacter;
    //this.Enemies = Enemies.constructor === Array ? [...Enemies] : [Enemies];
    this.Enemy = Enemies;
    this.PlayerTurn = true;
    this.dungeon = dungeon;
    this.isBattleOver = false;
    this.cooldown = 0; 
    this.timeOfLastMove = 0;
    this.cardhand = newCardHand;
    this.firstmove = true;
}

Battle.prototype.notOnCooldown = function () {
    if (this.game.timer.gameTime - this.timeOfLastMove >= this.cooldown ) {

        return true;
    } else {
        return false;
    }
}

Battle.prototype.playerMove = function(card) {
    if (this.PlayerTurn && !this.isBattleOver && this.notOnCooldown()) {
        this.PlayerCharacter.playCard();
        this.timeOfLastMove = this.game.timer.gameTime;

        if (card.type === 'damage') {
            this.Enemy.takeDamage(card.value);
            if(!this.Enemy.isAlive()) {
                this.isBattleOver = true;
                this.dungeon.BattleOngoing = false;
                this.dungeon.rewardScene = true;
            }
        } else if (card.type === 'heal') {
            if (this.PlayerCharacter.health + card.value < 100) {
                this.PlayerCharacter.heal(card.value)
            } else {
                this.PlayerCharacter.heal(100 - this.PlayerCharacter.health)
            }
        } else if (card.type === 'block') {
            this.PlayerCharacter.block += card.value
        } else if (card.type === 'debuff') {
            if (card.typeOfDebuff === 'stun single') {
                this.Enemy.setStun(card.duration);
            }
        } else if (card.type === 'card add') {
            for(let i = 0; i < card.value; i++) {
                this.cardhand.addCard(card.cardToAdd)
            }
        } 
        // this.PlayerTurn === false;
    }
    this.cooldown = 1.5;

   // console.log("Enemy Health: " + this.Enemies[0].health, "Player Health: " + this.PlayerCharacter.health);
   // console.log("Enemy Health: " + this.Enemy.health, "Player Health: " + this.PlayerCharacter.health);

}


Battle.prototype.enemyMoves = function() {
    console.log(this.Enemy.stunned)
   // while (this.notOnCooldown() === false) {
     //   console.log("weae")
   // }
    if (!this.PlayerTurn && !this.isBattleOver &&this.Enemy.checkNotStunned()) {
        if( this.Enemy.isAlive()) {
            this.timeOfLastMove = this.game.timer.gameTime;

            var attack = this.Enemy.attackPlayer();
            if (attack.type === 'damage') {

                this.PlayerCharacter.takeDamage(attack.value);
                if (!this.PlayerCharacter.isAlive()) {
                    this.isBattleOver = true;
                    this.dungeon.GameOver()
                }
            }
            // deal with buffs for enemies or blocks here

        }
    }

   this.PlayerTurn = true;
//console.log("Enemy Health: " + this.Enemy.health, "Player Health: " + this.PlayerCharacter.health);
}

Battle.prototype.endPlayerTurn = function() {
    this.PlayerTurn = false;
}

Battle.prototype.sufficientMana = function (card) {
    if (this.PlayerCharacter.Manabar.enoughMana(card.mana)) {
        return true;
    } else {
        return false;
    }
}
Battle.prototype.getPlayerTurn = function() {
    return this.PlayerTurn;
}



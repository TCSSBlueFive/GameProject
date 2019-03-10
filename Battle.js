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
    this.charges_per_turn = 0;
    this.cardsToAdd_per_turn = [];
    this.added_charges = 0;
    this.playcount_mod = 1;
    this.played_card_count = 0;
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

        let i = 0;
        if (this.played_card_count  < this.turns_limit) {  

        } else {
            i = this.playcount_mod - 1;
        }

        for (i; i < this.playcount_mod; i++) {
            if (card.type === 'damage') {
                this.Enemy.takeDamage(card.value);
                if(!this.Enemy.isAlive()) {
                    this.isBattleOver = true;
                    this.dungeon.state = 'battle_finished'
                    this.dungeon.stateChanged = true;
                }
            } else if (card.type === 'heal') {
                this.PlayerCharacter.heal(card.value)
            
            } else if (card.type === 'block') {
                this.PlayerCharacter.block += card.value
                console.log(card.value)
            } else if (card.type === 'debuff') {
                if (card.typeOfDebuff === 'stun single') {
                    this.Enemy.setStun(card.fn.duration);
                }
            } else if (card.type === 'card add') {
                for(let i = 0; i < card.value; i++) {
                    this.cardhand.addCard(card.fn.cardToAdd)
                }
            } else if (card.type === 'card draw') {
                for (let i = 0; i < card.value; i++) {
                    this.cardhand.drawCard();
                }
            } 

            if (card.generate === 'arc_charge') {
                this.PlayerCharacter.ArcChargeBar.addCharges(card.charge_gen_num + this.added_charges)
            }
            if (card.charge_consumption) {
                this.PlayerCharacter.ArcChargeBar.reset();
            }
            if (card.type === 'charge_mult') {
                this.PlayerCharacter.ArcChargeBar.mult(card.value, this.added_charges);
            }

            if (card.type === 'power') {
                if (card.effect ==="charge_per_turn") {
                    this.charges_per_turn +=2;                
                }   else if (card.effect === "gain_card_per_turn") {
                        this.cardsToAdd_per_turn.push(card.card_to_add)
                }   else if (card.effect ==="charge_booster") {
                        this.added_charges += card.value;
                } else if (card.effect === "free_cards") {
                    this.PlayerCharacter.Manabar.freeSpells(card.value);
                } else if (card.effect === "arcane_sacrifice") {
                    this.playcount_mod = card.playcount_mod;
                    this.turns_limit = card.turns_limit;
                    this.PlayerCharacter.ArcChargeBar.disable();
                }
            }
        }
    this.played_card_count +=1;
    this.cooldown = 1.5;
    }
}


/*
name: 'Arcane Missiles',
type: 'damage x arc charges',
drawback: 'costs_per_charge',
drawback_value: 6,
value: 3,
width: this.width,
height: this.height,
mana: 0,
text: 'Deal 3 damage\nDeal 3 more per 3 \narc charge\n\nCosts 1 more per 6 charges',
upgraded:false,

// ability: function () {
// game.battle.PlayerCharacter.health -= 20},
spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")


*/



Battle.prototype.enemyMoves = function() {
    this.PlayerCharacter.ArcChargeBar.addCharges(this.charges_per_turn + this.added_charges)
    this.played_card_count = 0;
    for (let i = 0; i < this.cardsToAdd_per_turn.length; i++) {
        console.log(this.cardsToAdd_per_turn[i])
        this.cardhand.addCard(this.cardsToAdd_per_turn[i])
    }
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
        }
    }

   this.PlayerTurn = true;
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



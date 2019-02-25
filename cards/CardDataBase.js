var AM = new AssetManager();

function CardDataBase() {
    //initial deck
    this.cards = [
    {
        name: 'heal',
        type: 'heal',
        value: 15,
        width: 140,
        height: 183,
        mana: 1,

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'fireball',
        type: 'damage',
        value: 1000,
        width: 140,
        height: 183,
        mana: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    }, {
        name: 'ice darts',
        type: 'damage',
        value: 30,
        width: 140,
        height: 183,
        mana: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }, {
        name: 'Blink',
        type: 'block',
        value: 7,
        width: 140,
        height: 183,
        mana: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")

    },{
        name: 'Polymorph',
        type: 'debuff',
        typeOfDebuff: 'stun single',
        value: 0,
        width: 140,
        height: 183,
        mana: 1,
        duration: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/polymorph-card.png")

    }]


    //potential cards as reward
    this.cards_rewards =[
    {
        name: 'heal',
        type: 'heal',
        value: 15,
        width: 140,
        height: 183,
        mana: 1,

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'fireball',
        type: 'damage',
        value: 10,
        width: 140,
        height: 183,
        mana: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    }, {
        name: 'ice darts',
        type: 'damage',
        value: 30,
        width: 140,
        height: 183,
        mana: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }, {
        name: 'Frost Nova',
        type: 'debuff',
        typeOfDebuff: 'stun all',
        width: 140,
        height: 183,
        mana: 1,
        duration: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/frost_nova-card.png")

    }, {
        name: 'Blink',
        type: 'block',
        value: 7,
        width: 140,
        height: 183,
        mana: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")

    }, {
        name: 'Polymorph',
        type: 'debuff',
        typeOfDebuff: 'stun single',
        value: 0,
        width: 140,
        height: 183,
        mana: 1,
        duration: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/polymorph-card.png")

    }, {
        name: 'Conjure Refreshment',
        type: 'card add',
        cardToAdd: {
            name: 'Biscuit',
            type: 'heal',
            value: 7,
            spritesheet: AM.getAsset("./img/cards/conjure_refreshment-card.png"),
            width: 140,
            height: 140,
            mana: 0
        },
        value: 2,
        width: 140,
        height: 183,
        mana: 1,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/conjure_refreshment-card.png")

    }, {
        name: 'Ice Block',
        type: 'immunity',
        drawback: 'stun self',
        durationOfImmunity: '1',
        durationOfDrawback: '1',
        width: 140,
        height: 183,
        mana: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice_block-card.png")

    }, {
        name: 'Counterspell',
        type: 'debuff',
        typeOfDebuff: 'stun single',
        value: 7,
        width: 140,
        height: 183,
        duration: 2,
        mana: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/counterspell-card.png")

    }, {
        name: 'Time Warp',
        type: 'buff',
        typeofbuff: 'gain extra turn',
        value: 1,
        width: 140,
        height: 183,
        mana: 2,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/time_warp-card.png")

    }, {
        name: 'Arcane Intellect',
        type: 'card draw',
        drawback: 'none',
        value: 2,
        width: 140,
        height: 183,
        mana: 2,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    }

    ]
}

/*

default item:
Arcane Mastery:
For every card you play, you have a 50% chance to gain an arcane charge. 
 
 [Arcane Barrage]
10 
deal x * 5 damage to all enemies.
x is the amount of Arcane charges.
 [Arcane Blast]
10 
deal 6 damage. Gain atleast one arcane charge.
 [Arcane Missiles]
14 
deal x * 8 damage to a single enemy.
x is the amount of arcane charges
 [Prismatic Barrier]
24 
gain 12 block.
gain 2 arcane charges.
 [Arcane Explosion]
28 
deal 7 damage to all enemies
 [Presence of Mind]
 Your next played card this turn is free.
30 
 [Slow
 Your target has its damage reduced in half
36 
 [Evocation]
 gain 5 mana next turn.
40 
 [Arcane Power]
 Your cards each cost 1 less.
44 
 [Greater Invisibility]
50 
 [Mastery: Savant]
 This combat every spell will give an arcane charge.
78 
*/
var AM = new AssetManager();

function CardDataBase(game) {
    //initial deck
    this.width = game.width * .12101;
    this.height = game.height *  .2769696969669;
    
    this.cards = [
    {
        name: 'Heal',
        type: 'heal',
        value: 6,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Restore 6 health.',
        index:0,
        upgraded:false,
        

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'Fireball',
        type: 'damage',
        value: 6000,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 6000 damage.',
        upgraded:false,
        index: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    }, {
        name: 'Ice Darts',
        type: 'damage',
        value: 18,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Deal 16 damage.',
        upgraded:false,
        index: 2,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }, {
        name: 'Blink',
        type: 'block',
        value: 5,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain 5 block.',
        upgraded:false,
        index:3,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")

    } , {
        name: 'Blink',
        type: 'block',
        value: 5,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain 5 block.',
        upgraded:false,
        index:3,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")
    } , {
        name: 'Blink',
        type: 'block',
        value: 5,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain 5 block.',
        upgraded:false,
        index:3,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")
    } , {
        name: 'Blink',
        type: 'block',
        value: 5,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain 5 block.',
        upgraded:false,
        index:3,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")
    } , {
        name: 'Blink',
        type: 'block',
        value: 5,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain 5 block.',
        upgraded:false,
        index:3,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")
    } , {
        name: 'Fireball',
        type: 'damage',
        value: 6,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 6 damage.',
        upgraded:false,
        index: 1,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    } , {
        name: 'Fireball',
        type: 'damage',
        value: 6,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 6 damage.',
        upgraded:false,
        index: 1,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    } , {
        name: 'Fireball',
        type: 'damage',
        value: 6,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 6 damage.',
        upgraded:false,
        index: 1,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    } , {
        name: 'Fireball',
        type: 'damage',
        value: 6,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 6 damage.',
        upgraded:false,
        index: 1,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    }]
    //potential cards as reward
    this.cards_rewards =[
    /*{
        name: 'Frost Nova',
        type: 'debuff',
        typeOfDebuff: 'stun all',
        width: this.width,
        height: this.height,
        mana: 1,
        duration: 1,
        text: 'Stun all enemies for \n1 turn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/frost_nova-card.png")

    },*/ /* {
        name: 'Polymorph',
        type: 'debuff',
        typeOfDebuff: 'stun single',
        value: 0,
        width: this.width,
        height: this.height,
        mana: 1,
        duration: 1,
        text: 'Stun an enemy for \n1 turn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/polymorph-card.png")

    }, */{
        name: 'Conjure Refreshment',
        type: 'card add',
        cardToAdd: {
            name: 'Biscuit',
            type: 'heal',
            value: 3,
            spritesheet: AM.getAsset("./img/cards/conjure_refreshment-card.png"),
            width: this.width,
            height: this.height,
            upgraded:false,
            exhaust:true,
            temporary:true,
            mana: 0,
            text: 'Restore 3 health.',

        },
        index:5,
        upgraded:false,
        value: 2,
        width: this.width,
        height: this.height,
        mana: 2,
        upgraded:false,
        exhaust:true,
        text: 'Add 2 Biscuit cards \nto hand.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/conjure_refreshment-card.png")

    },/* {
        name: 'Ice Block',
        type: 'immunity',
        drawback: 'stun self',
        durationOfImmunity: '1',
        durationOfDrawback: '1',
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain Immunity for \n1 turn. \nYou are stunned for \n1 turn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice_block-card.png")

}, */ /*{
        name: 'Silence',
        type: 'debuff',
        typeOfDebuff: 'stun single',
        value: 7,
        width: this.width,
        height: this.height,
        duration: 2,
        mana: 1,
        text: 'If an enemy is buffing\n Stun them for 2 turns.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/counterspell-card.png")

},*//* {
        name: 'Time Warp',
        type: 'buff',
        typeofbuff: 'gain extra turn',
        value: 1,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Gain an extra turn.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/time_warp-card.png")

    },*/ {
        name: 'Arcane Intellect',
        type: 'card draw',
        drawback: 'none',
        value: 2,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Add 2 cards to \nyour hand.',
        index: 4,
        upgraded:false,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    }]





    //these upgraded variants must be in the same index as found in the normal
    //cards array
    this.upgraded_cards =[ 

        {name: 'HEAL+',
        type: 'heal',
        value: 10,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Restore 10 health.',
        upgraded:true,
        

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    
    } , {
        name: 'FIREBALL+',
        type: 'damage',
        value: 10,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 10 damage.',
        upgraded:true,
        index: 1,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    } , {
        name: 'ICE DARTS+',
        type: 'damage',
        value: 22,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Deal 22 damage.',
        upgraded:true,
        index: 2,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    } , {
        name: 'BLINK+',
        type: 'block',
        value: 9,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain 9 block.',
        upgraded:true,
        index:3,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/blink-card.png")

    } ,  {
        name: 'ARCANE INT+',
        type: 'card draw',
        drawback: 'none',
        value: 2,
        width: this.width,
        height: this.height,
        mana: 0,
        upgraded:true,
        text: 'Add 2 cards to \nyour hand.',

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    } , {
        name: 'CONJURE REF.+',
        type: 'card add',
        cardToAdd: {
            name: 'BISCUIT+',
            type: 'heal',
            value: 5,
            spritesheet: AM.getAsset("./img/cards/conjure_refreshment-card.png"),
            width: this.width,
            height: this.height,
            mana: 0,
            upgraded:true,
            text: 'Restore 5 health.',
            exhaust:true,
            temporary:true,

        },
        value: 2,
        upgraded: true,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Add 2 Biscuit cards \nto hand.',
        exhaust:true,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/conjure_refreshment-card.png")

    },
    
    ]
}
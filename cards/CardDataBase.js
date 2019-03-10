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

    }, 


                            //      ARCANE CARDS BELOW
    //////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    { 
        name: 'Arcane Missiles',
        type: 'damage',
        update_type: "damage x arc charges",
        drawback: 'costs_per_charge',
        drawback_value: 6,
        value: 3,
        mult_value: 3,
        width: this.width,
        height: this.height,
        mana: 0,
            text: 'Deal 3 damage. Deal 3\nmore per 2 arc charges\nCosts 1 more per 6 charges',
        charge_div_value: 2,
        upgraded:false,
        updateable:true,
        index:6,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    },

    {
        name: 'Arcane Blast',
        type: 'damage',
        drawback: 'costs_per_charge',
        drawback_value: 6,
        value: 10,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Deal 10 damage\nCosts 1 more per\n 6 charges\nGain 2 arc charge',
        generate: "arc_charge",
        upgraded:false,
        updateable:true,
        charge_gen_num:2,
        index:7,

        
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    },

    {
        name: 'Arcane Shield',
        update_type: 'block x arc charges',
        type: 'block',
        drawback: 'costs_per_charge',
        drawback_value: 6,
        value: 0,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Gain block of 2x arc charge\nCosts 1 more per\n 6 charges\nGain 1 arc charge',
        generate: "arc_charge",
        upgraded:false,
        updateable:true,
        charge_gen_num: 1,
        mult_value: 2,
        index:8,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    }, {
        name: 'Arcane Barrage',
        type: 'damage',
        update_type: "damage x arc charges",
        value: 0,
        mult_value: 5,
        width: this.width,
        height: this.height,
        mana: 0,
        text: 'Deal 0 damage\nDeal 5 more per \narc charge\nConsumes all charges',
        charge_div_value: 1,
        charge_consumption: true,
        upgraded:false,
        updateable:true,
        index:9,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    },  
    
    {
    name: 'Arcane Focus',
    type: 'charge_mult',
    value: 2,
    width: this.width,
    height: this.height,
    mana: 3,
    text: 'Doubles Current \nArc Charges',
    charge_div_value: 1,
    index:10,

    upgraded:false,
    updateable:true,
    // ability: function () {
    // game.battle.PlayerCharacter.health -= 20},
    spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    },

    //Powers Below
    {
        name: 'Arcane Empowerment',
        type: 'power',
        effect: "charge_per_turn",
        value: 2,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Gain 2 Arc Charges\nEvery turn',
        index:11,

        upgraded:false,
        updateable:true,
        exhaust:true,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    },
    
    {
        name: 'Arcane Artillery',
        type: 'power',
        effect: "gain_card_per_turn",
        value: 2,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Gain a Arcane\nMissiles card\nEvery turn',
        upgraded:false,
        updateable:true,
        exhaust:true,
        index:12,

        card_to_add: { 
            name: 'Arcane Missiles',
            type: 'damage',
            update_type: "damage x arc charges",
            drawback: 'costs_per_charge',
            drawback_value: 6,
            value: 3,
            mult_value: 3,
            width: this.width,
            height: this.height,
            mana: 0,
            text: 'Deal 3 damage. Deal 3\nmore per 2 arc charges\nCosts 1 more per 6 charges\n\nExhaust. Temporary.',
            charge_div_value: 2,

            upgraded:false,
            updateable:true,
            exhaust:true,
            temporary:true,
    
            // ability: function () {
            // game.battle.PlayerCharacter.health -= 20},
            spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
        },
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    },
    {
        name: 'Arcane Enchantment',
        type: 'power',
        effect: "charge_booster",
        value: 1,
        index:13,

        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Gain 1 additional charges\nfrom all sources',
        upgraded:false,
        exhaust:true,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    },
    {
        name: 'Arcane Enchantment',
        type: 'power',
        effect: "free_cards",
        value: 2,
        width: this.width,
        index:14,

        height: this.height,
        mana: 2,
        text: 'Consume all arc charges\nYour next 2 casts are free',
        upgraded:false,
        exhaust:true,
        charge_consumption: true,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    }, {
    name: 'Arcane Sacrifice',
    type: 'power',
    effect: "free_cards",
    width: this.width,
    height: this.height,
    mana: 3,
    text: 'Lose the ability to gain\nArcane charges.\nEvery turn your 2 first card\nis played an additional times',
    upgraded:false,
    exhaust:true,
    effect:'arcane_sacrifice',
    index:15,

    playcount_mod: 2,
    turns_limit: 2,

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

    },  { 
        name: 'ARCANE MISSILES+',
        type: 'damage',
        update_type: "damage x arc charges",
        drawback: 'costs_per_charge',
        drawback_value: 9,
        value: 4,
        mult_value: 4,
        width: this.width,
        height: this.height,
        mana: 0,
            text: 'Deal 4 damage. Deal 4\nmore per 2 arc charges\nCosts 1 more per 9 charges',
        charge_div_value: 2,
        upgraded:true,
        updateable:true,
        index:6,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    },

    {
        name: 'ARCANE BLAST+',
        type: 'damage',
        drawback: 'costs_per_charge',
        drawback_value: 9,
        value: 10,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Deal 10 damage\nCosts 1 more per\n 9 charges\nGain 3 arc charge',
        generate: "arc_charge",
        upgraded:true,
        updateable:true,
        charge_gen_num:3,
        index:7,

        
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    },

    {
        name: 'ARCANE SHIELD+',
        update_type: 'block x arc charges',
        type: 'block',
        drawback: 'costs_per_charge',
        drawback_value: 6,
        value: 0,
        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Gain block of 3x arc charge\nCosts 1 more per\n 6 charges\nGain 1 arc charge',
        generate: "arc_charge",
        upgraded:true,
        charge_gen_num: 1,
        updateable:true,
        mult_value: 3,
        index:8,


        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    }, {
        name: 'ARCANE BARRAGE+',
        type: 'damage',
        update_type: "damage x arc charges",
        value: 0,
        mult_value: 8,
        width: this.width,
        height: this.height,
        mana: 0,
        text: 'Deal 0 damage\nDeal 8 more per \narc charge\nConsumes all charges',
        charge_div_value: 1,
        charge_consumption: true,
        upgraded:true,
        updateable:true,
        index:9,
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")

    },  
    
    {
    name: 'ARCANE FOCUS+',
    type: 'charge_mult',
    value: 3,
    width: this.width,
    height: this.height,
    mana: 3,
    text: 'Triples Current \nArc Charges',
    index:10,

    upgraded:true,
    updateable:true,
    spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    },

    //Powers Below
    {
        name: 'ARCANE EMPOWERMENT+',
        type: 'power',
        effect: "charge_per_turn",
        value: 2,
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain 2 Arc Charges\nEvery turn',
        index:11,

        upgraded:true,
        updateable:true,
        exhaust:true,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    },
    
    {
        name: 'ARCANE ARTILLERY+',
        type: 'power',
        effect: "gain_card_per_turn",
        width: this.width,
        height: this.height,
        mana: 1,
        text: 'Gain a Arcane\nMissiles card\nEvery turn',
        upgraded:true,
        updateable:true,
        exhaust:true,
        index:12,

        card_to_add: { 
            name: 'ARCANE MISSILES+',
            type: 'damage',
            update_type: "damage x arc charges",
            drawback: 'costs_per_charge',
            drawback_value: 6,
            value: 3,
            mult_value: 3,
            width: this.width,
            height: this.height,
            mana: 0,
            text: 'Deal 3 damage. Deal 3\nmore per 2 arc charges\nCosts 1 more per 6 charges\n\nExhaust. Temporary.',
            charge_div_value: 2,

            upgraded:true,
            updateable:true,
            exhaust:true,
            temporary:true,
    
            // ability: function () {
            // game.battle.PlayerCharacter.health -= 20},
            spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
        },
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    },
    {
        name: 'ARCANE ENCHANTMENT+',
        type: 'power',
        effect: "charge_booster",
        value: 2,
        index:13,

        width: this.width,
        height: this.height,
        mana: 2,
        text: 'Gain 2 additional charges\nfrom all sources',
        upgraded:true,
        exhaust:true,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    },
    {
        name: 'ARCANE SLIPSTREAM+',
        type: 'power',
        effect: "free_cards",
        value: 3,
        width: this.width,
        index:14,

        height: this.height,
        mana: 2,
        text: 'Consume all arc charges\nYour next 3 casts are free',
        upgraded:true,
        exhaust:true,
        charge_consumption: true,

        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
    }, {
    name: 'ARCANE SACRIFICE+',
    type: 'power',
    effect: "free_cards",
    value: 3,
    width: this.width,
    height: this.height,
    mana: 3,
    text: 'Lose the ability to gain\nArcane charges.\nEvery turn your 3 first card\nARE played an additional times',
    upgraded:true,
    exhaust:true,
    effect:'arcane_sacrifice',
    index:15,

    playcount_mod: 2,
    turns_limit: 3,

    // ability: function () {
    // game.battle.PlayerCharacter.health -= 20},
    spritesheet: AM.getAsset("./img/cards/arcane_intellect-card.png")
}

]
















    //Arcane Cards
    this.cards_rewards_test =[

    ]
}
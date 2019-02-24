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

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'fireball',
        type: 'damage',
        value: 10,
        value: 15,
        width: 140,
        height: 183,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    }, {
        name: 'ice darts',
        type: 'damage',
        value: 30,
        value: 15,
        width: 140,
        height: 183,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }, {
        name: 'ice darts',
        type: 'damage',
        value: 30,
        value: 15,
        width: 140,
        height: 183,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }, {
        name: 'ice darts',
        type: 'damage',
        value: 30,
        value: 15,
        width: 140,
        height: 183,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }]


    //potential cards as reward
    this.cards_rewards =[
    {
        name: 'heal',
        type: 'heal',
        value: 15,
        width: 140,
        height: 183,

        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'fireball',
        type: 'damage',
        value: 10,
        value: 15,
        width: 140,
        height: 183,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    }, {
        name: 'ice darts',
        type: 'damage',
        value: 30,
        value: 15,
        width: 140,
        height: 183,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }, {
        name: 'ice darts',
        type: 'damage',
        value: 30,
        value: 15,
        width: 140,
        height: 183,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }, {
        name: 'ice darts',
        type: 'damage',
        value: 30,
        value: 15,
        width: 140,
        height: 183,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.png")
    }


    ]
}
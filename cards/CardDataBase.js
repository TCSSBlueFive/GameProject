var AM = new AssetManager();

function CardDataBase(gamet) {
    this.cards = [
    {
        name: 'heal',
        type: 'heal',
        value: 15,
        spritesheet: AM.getAsset("./img/cards/heal-card.png")
    }, {
        name: 'fireball',
        type: 'damage',
        value: 40,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/fireball-card.png")
    }, {
        name: 'ice darts',
        type: 'damage',
        value: 30,
        // ability: function () {
        // game.battle.PlayerCharacter.health -= 20},
        spritesheet: AM.getAsset("./img/cards/ice-card.jpg")
    }]
}